import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Markdown from 'react-markdown';
import { ChevronRight, Search, BookOpen, Bookmark, BookmarkCheck, Newspaper, Globe, Brain, Sparkles, Loader2, GraduationCap, ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { studyTopics, caseStudies, quizSets, glossary, acronyms, redFlags, defaultFlashcards } from '../data/mockData';
import { StudyTopic, CaseStudy, SavedItem, Flashcard, QuizSet } from '../types';
import { cn } from '../lib/utils';
import { generateFlashcards } from '../services/geminiService';
import Flashcards from './Flashcards';
import { useAuth } from '../AuthContext';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

interface StudyGuideProps {
  initialView?: 'topics' | 'cases' | 'bookmarks' | 'flashcards' | 'glossary';
}

const RiskCalculator: React.FC = () => {
  const [inherentRisk, setInherentRisk] = React.useState<number>(3); // 1-5
  const [controlEffectiveness, setControlEffectiveness] = React.useState<number>(3); // 1-5

  const residualRisk = Math.max(0, inherentRisk - controlEffectiveness);
  
  const getRiskLabel = (val: number) => {
    if (val <= 1) return { label: 'Low', color: 'text-green-600 bg-green-50' };
    if (val <= 2) return { label: 'Medium-Low', color: 'text-blue-600 bg-blue-50' };
    if (val <= 3) return { label: 'Medium', color: 'text-amber-600 bg-amber-50' };
    if (val <= 4) return { label: 'High', color: 'text-orange-600 bg-orange-50' };
    return { label: 'Critical', color: 'text-red-600 bg-red-50' };
  };

  const riskInfo = getRiskLabel(residualRisk + 1); // Offset for 1-5 scale

  return (
    <div className="mt-8 p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-indigo-600 rounded-lg text-white">
          <Sparkles size={18} />
        </div>
        <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-tight">Interactive Risk Calculator</h4>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Inherent Risk</label>
            <span className="text-sm font-bold text-slate-900 dark:text-white">{inherentRisk} / 5</span>
          </div>
          <input 
            type="range" min="1" max="5" step="1"
            value={inherentRisk}
            onChange={(e) => setInherentRisk(Number(e.target.value))}
            className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
          <p className="text-[10px] text-slate-500 italic">Risk level before any controls are applied.</p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Control Effectiveness</label>
            <span className="text-sm font-bold text-slate-900 dark:text-white">{controlEffectiveness} / 5</span>
          </div>
          <input 
            type="range" min="1" max="5" step="1"
            value={controlEffectiveness}
            onChange={(e) => setControlEffectiveness(Number(e.target.value))}
            className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-600"
          />
          <p className="text-[10px] text-slate-500 italic">How well controls mitigate the inherent risk.</p>
        </div>
      </div>

      <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 flex flex-col items-center text-center">
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Calculated Residual Risk</p>
        <div className={cn("px-6 py-2 rounded-full text-2xl font-black mb-2 transition-all", riskInfo.color)}>
          {riskInfo.label}
        </div>
        <p className="text-sm text-slate-500 max-w-xs">
          Formula: Inherent Risk ({inherentRisk}) - Control Effectiveness ({controlEffectiveness}) = Residual Risk
        </p>
      </div>
    </div>
  );
};

const StudyGuide: React.FC<StudyGuideProps> = ({ initialView }) => {
  const { user, progress } = useAuth();
  const [view, setView] = React.useState<'topics' | 'cases' | 'bookmarks' | 'flashcards' | 'assets' | 'glossary'>(initialView || 'topics');
  const [selectedTopic, setSelectedTopic] = React.useState<StudyTopic | null>(null);
  const [selectedCase, setSelectedCase] = React.useState<CaseStudy | null>(null);
  const [selectedSavedItem, setSelectedSavedItem] = React.useState<SavedItem | null>(null);
  const [selectedGlossaryTerm, setSelectedGlossaryTerm] = React.useState<{term: string, definition: string} | null>(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isGeneratingCards, setIsGeneratingCards] = React.useState(false);
  const [flashcardCount, setFlashcardCount] = React.useState<number>(10);
  const [includeImages, setIncludeImages] = React.useState(true);
  const [showMobileList, setShowMobileList] = React.useState(true);
  const [caseDecision, setCaseDecision] = React.useState<'sar' | 'investigate' | null>(null);
  const [showCaseFeedback, setShowCaseFeedback] = React.useState(false);
  const [activeQuiz, setActiveQuiz] = React.useState<QuizSet | null>(null);

  const [bookmarks, setBookmarks] = React.useState<string[]>(() => {
    const saved = localStorage.getItem('cams_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });
  const [newsBookmarks, setNewsBookmarks] = React.useState<SavedItem[]>(() => {
    const saved = localStorage.getItem('cams_news_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });
  const [flashcards, setFlashcards] = React.useState<Flashcard[]>(() => {
    const saved = localStorage.getItem('cams_flashcards');
    return saved ? JSON.parse(saved) : defaultFlashcards;
  });

  React.useEffect(() => {
    localStorage.setItem('cams_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  React.useEffect(() => {
    localStorage.setItem('cams_news_bookmarks', JSON.stringify(newsBookmarks));
  }, [newsBookmarks]);

  React.useEffect(() => {
    localStorage.setItem('cams_flashcards', JSON.stringify(flashcards));
  }, [flashcards]);

  const handleGenerateFlashcards = async () => {
    if (!selectedTopic) return;
    setIsGeneratingCards(true);
    try {
      const response = await generateFlashcards(selectedTopic.title, selectedTopic.content, flashcardCount, includeImages);
      const newCards: Flashcard[] = response.split('---').filter(item => item.includes('Front:')).map(item => {
        const frontMatch = item.match(/Front:\s*(.*)/);
        const backMatch = item.match(/Back:\s*(.*)/);
        const imageMatch = item.match(/Image:\s*(.*)/);
        return {
          id: Math.random().toString(36).substring(2, 11),
          front: frontMatch ? frontMatch[1].trim() : 'Question',
          back: backMatch ? backMatch[1].trim() : 'Answer',
          imageDescription: imageMatch ? imageMatch[1].trim() : undefined,
          topicId: selectedTopic.id,
          nextReview: Date.now(),
          interval: 0,
          easeFactor: 2.5,
          repetitions: 0
        };
      });
      setFlashcards(prev => [...prev, ...newCards]);
      setView('flashcards');
    } catch (error) {
      console.error("Flashcard Generation Error:", error);
    } finally {
      setIsGeneratingCards(false);
    }
  };

  const toggleChapterCompletion = async (chapterId: string) => {
    if (!user) return;
    try {
      const progressRef = doc(db, 'progress', user.uid);
      const isCompleted = progress?.completedChapters?.includes(chapterId);
      
      await updateDoc(progressRef, {
        completedChapters: isCompleted ? arrayRemove(chapterId) : arrayUnion(chapterId)
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `progress/${user.uid}`);
    }
  };

  const toggleBookmark = (id: string) => {
    setBookmarks(prev => 
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    );
  };

  const toggleNewsBookmark = (item: SavedItem) => {
    setNewsBookmarks(prev => 
      prev.some(b => b.id === item.id) ? prev.filter(b => b.id !== item.id) : [...prev, item]
    );
  };

  const filteredTopics = studyTopics.filter(topic => 
    (topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.category.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (view !== 'bookmarks' || bookmarks.includes(topic.id))
  );

  const filteredCases = caseStudies.filter(cs => 
    (cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cs.scenario.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (view !== 'bookmarks' || bookmarks.includes(cs.id))
  );

  const filteredNews = newsBookmarks.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredGlossary = glossary.filter(item => 
    item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderTopicCard = (topic: StudyTopic) => {
    const isSelected = selectedTopic?.id === topic.id;
    const isBookmarked = bookmarks.includes(topic.id);
    const isCompleted = progress?.completedChapters?.includes(topic.id);

    return (
      <div 
        key={topic.id} 
        className={cn(
          "bg-white dark:bg-slate-800 rounded-2xl border p-5 transition-all group relative flex flex-col gap-3",
          isSelected 
            ? "border-blue-500 ring-1 ring-blue-500 shadow-md shadow-blue-500/10" 
            : "border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-sm"
        )}
      >
        <div className="flex justify-between items-start">
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-[10px] font-black uppercase tracking-widest">
              {topic.category}
            </span>
            {isCompleted && (
              <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 dark:text-green-400">
                <CheckCircle2 size={12} />
                Done
              </span>
            )}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleBookmark(topic.id);
            }}
            className={cn(
              "p-1.5 rounded-lg transition-all",
              isBookmarked 
                ? "text-blue-600 bg-blue-50 dark:bg-blue-900/40" 
                : "text-slate-300 hover:text-blue-600 hover:bg-blue-50 opacity-0 group-hover:opacity-100"
            )}
          >
            {isBookmarked ? <BookmarkCheck size={16} fill="currentColor" /> : <Bookmark size={16} />}
          </button>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-1 leading-tight line-clamp-2">{topic.title}</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
            {topic.description}
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedTopic(topic);
            setSelectedCase(null);
            setSelectedSavedItem(null);
            setActiveQuiz(null);
            if (window.innerWidth < 1024) setShowMobileList(false);
          }}
          className={cn(
            "w-full mt-2 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2",
            isSelected
              ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
              : "bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white"
          )}
        >
          {isSelected ? "Viewing Now" : "View Details"}
          <ChevronRight size={14} />
        </button>
      </div>
    );
  };

  const renderCaseCard = (cs: CaseStudy) => {
    const isSelected = selectedCase?.id === cs.id;
    const isBookmarked = bookmarks.includes(cs.id);

    return (
      <div 
        key={cs.id} 
        className={cn(
          "bg-white dark:bg-slate-800 rounded-2xl border p-5 transition-all group relative flex flex-col gap-3",
          isSelected 
            ? "border-indigo-500 ring-1 ring-indigo-500 shadow-md shadow-indigo-500/10" 
            : "border-slate-100 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-sm"
        )}
      >
        <div className="flex justify-between items-start">
          <span className="px-2 py-0.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded text-[10px] font-black uppercase tracking-widest">
            Compliance Case
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleBookmark(cs.id);
            }}
            className={cn(
              "p-1.5 rounded-lg transition-all",
              isBookmarked 
                ? "text-indigo-600 bg-indigo-50 dark:bg-indigo-900/40" 
                : "text-slate-300 hover:text-indigo-600 hover:bg-indigo-50 opacity-0 group-hover:opacity-100"
            )}
          >
            {isBookmarked ? <BookmarkCheck size={16} fill="currentColor" /> : <Bookmark size={16} />}
          </button>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-1 leading-tight line-clamp-2">{cs.title}</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
            {cs.scenario}
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedCase(cs);
            setSelectedTopic(null);
            setSelectedSavedItem(null);
            setActiveQuiz(null);
            setCaseDecision(null);
            setShowCaseFeedback(false);
            if (window.innerWidth < 1024) setShowMobileList(false);
          }}
          className={cn(
            "w-full mt-2 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2",
            isSelected
              ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
              : "bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-indigo-600 hover:text-white"
          )}
        >
          {isSelected ? "Analyzing Now" : "Analyze Case"}
          <ChevronRight size={14} />
        </button>
      </div>
    );
  };

  const renderListButton = (item: StudyTopic | CaseStudy | SavedItem, type: 'topic' | 'case' | 'saved') => {
    const isSelected = type === 'topic' 
      ? selectedTopic?.id === item.id 
      : type === 'case' 
        ? selectedCase?.id === item.id 
        : selectedSavedItem?.id === item.id;
    
    const isBookmarked = type === 'saved' ? true : bookmarks.includes(item.id);
    const category = type === 'saved' 
      ? (item as SavedItem).type === 'news' ? 'Global News' : 'BFIU Circular'
      : 'category' in item ? item.category : 'Compliance Scenario';

    return (
      <div key={item.id} className="relative group">
        <button
          onClick={() => {
            if (type === 'topic') {
              setSelectedTopic(item as StudyTopic);
              setSelectedCase(null);
              setSelectedSavedItem(null);
              setActiveQuiz(null);
            } else if (type === 'case') {
              setSelectedCase(item as CaseStudy);
              setSelectedTopic(null);
              setSelectedSavedItem(null);
              setActiveQuiz(null);
              setCaseDecision(null);
              setShowCaseFeedback(false);
            } else {
              setSelectedSavedItem(item as SavedItem);
              setSelectedTopic(null);
              setSelectedCase(null);
              setActiveQuiz(null);
            }
            if (window.innerWidth < 1024) setShowMobileList(false);
          }}
          className={cn(
            "w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between",
            isSelected
              ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20"
              : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20"
          )}
        >
          <div className="pr-8">
            <p className={cn(
              "text-[10px] font-bold uppercase tracking-wider mb-1",
              isSelected ? "text-blue-100" : "text-blue-600 dark:text-blue-400"
            )}>
              {category}
            </p>
            <h4 className="font-bold line-clamp-1 text-sm">{item.title}</h4>
          </div>
          <ChevronRight className={cn(
            "transition-transform group-hover:translate-x-1 shrink-0",
            isSelected ? "text-white" : "text-slate-300 dark:text-slate-600"
          )} size={18} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (type === 'saved') toggleNewsBookmark(item as SavedItem);
            else toggleBookmark(item.id);
          }}
          className={cn(
            "absolute right-10 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-all",
            isSelected 
              ? "text-blue-200 hover:text-white hover:bg-blue-500" 
              : isBookmarked 
                ? "text-blue-600 bg-blue-50 dark:bg-blue-900/40" 
                : "text-slate-300 hover:text-blue-600 hover:bg-blue-50 opacity-0 group-hover:opacity-100"
          )}
        >
          {isBookmarked ? <BookmarkCheck size={18} fill="currentColor" /> : <Bookmark size={18} />}
        </button>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
      <div className={cn(
        "lg:col-span-1 flex flex-col gap-6 transition-all duration-300",
        !showMobileList && "hidden lg:flex"
      )}>
        <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-x-auto scrollbar-hide">
          <button
            onClick={() => { setView('topics'); setActiveQuiz(null); setSelectedGlossaryTerm(null); }}
            className={cn(
              "flex-1 min-w-[80px] py-2 text-sm font-bold rounded-lg transition-all",
              view === 'topics' ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm" : "text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            )}
          >
            Topics
          </button>
          <button
            onClick={() => { setView('cases'); setActiveQuiz(null); setSelectedGlossaryTerm(null); }}
            className={cn(
              "flex-1 min-w-[80px] py-2 text-sm font-bold rounded-lg transition-all",
              view === 'cases' ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm" : "text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            )}
          >
            Cases
          </button>
          <button
            onClick={() => { setView('bookmarks'); setActiveQuiz(null); setSelectedGlossaryTerm(null); }}
            className={cn(
              "flex-1 min-w-[80px] py-2 text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2",
              view === 'bookmarks' ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm" : "text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            )}
          >
            <Bookmark size={14} />
            Saved
          </button>
          <button
            onClick={() => { setView('flashcards'); setActiveQuiz(null); setSelectedGlossaryTerm(null); }}
            className={cn(
              "flex-1 min-w-[80px] py-2 text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2",
              view === 'flashcards' ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm" : "text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            )}
          >
            <Brain size={14} />
            Cards
          </button>
          <button
            onClick={() => { 
              setView('glossary'); 
              setActiveQuiz(null); 
              setSelectedTopic(null);
              setSelectedCase(null);
              setSelectedSavedItem(null);
            }}
            className={cn(
              "flex-1 min-w-[80px] py-2 text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2",
              view === 'glossary' ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm" : "text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            )}
          >
            <BookOpen size={14} />
            Glossary
          </button>
          <button
            onClick={() => { setView('assets'); setActiveQuiz(null); setSelectedGlossaryTerm(null); }}
            className={cn(
              "flex-1 min-w-[80px] py-2 text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2",
              view === 'assets' ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm" : "text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            )}
          >
            <Sparkles size={14} />
            Assets
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder={
              view === 'bookmarks' ? "Search saved items..." : 
              view === 'topics' ? "Search topics..." : 
              view === 'glossary' ? "Search glossary terms..." :
              view === 'assets' ? "Search red flags & acronyms..." :
              "Search cases..."
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-hide">
          {view === 'topics' && filteredTopics.map(topic => renderTopicCard(topic))}
          {view === 'cases' && filteredCases.map(cs => renderCaseCard(cs))}
          {view === 'glossary' && (
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-600 rounded-lg">
                  <BookOpen className="text-white" size={18} />
                </div>
                <h4 className="font-bold text-indigo-900 dark:text-indigo-200">AML Glossary</h4>
              </div>
              <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-4">
                Master the technical language of financial crime compliance. Use the search bar to find specific terms and definitions.
              </p>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-xl border border-indigo-100 dark:border-indigo-900/50">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Terms</span>
                <span className="text-sm font-black text-indigo-600 dark:text-indigo-400">{glossary.length}</span>
              </div>
            </div>
          )}

          {view === 'assets' && (
            <div className="p-4 bg-slate-50 dark:bg-slate-900/20 rounded-2xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-600 rounded-lg">
                  <Sparkles className="text-white" size={18} />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-slate-200">Study Assets</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Quick reference for acronyms and red flags across different financial sectors.
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Acronyms</span>
                  <span className="text-sm font-black text-slate-900 dark:text-white">{acronyms.length}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Red Flags</span>
                  <span className="text-sm font-black text-slate-900 dark:text-white">{redFlags.length}</span>
                </div>
              </div>
            </div>
          )}

        {view === 'flashcards' && (
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Brain className="text-white" size={18} />
                </div>
                <h4 className="font-bold text-blue-900 dark:text-blue-200">Active Learning</h4>
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-4">
                Select a study topic and click "Generate Cards" to create AI-powered flashcards for spaced repetition review.
              </p>
              {flashcards.length > 0 && (
                <button
                  onClick={() => setShowMobileList(false)}
                  className="lg:hidden w-full mb-4 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
                >
                  <Brain size={18} />
                  Review {flashcards.length} Cards
                </button>
              )}
              <div className="flex flex-col gap-2">
                <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest px-1">Stats</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-blue-100 dark:border-blue-900">
                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{flashcards.length}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold">Total Cards</div>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-blue-100 dark:border-blue-900">
                    <div className="text-xl font-bold text-green-600 dark:text-green-400">
                      {flashcards.filter(f => f.nextReview <= Date.now()).length}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold">Due Today</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={cn(
        "lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col transition-all duration-300",
        showMobileList && "hidden lg:flex"
      )}>
        {/* Mobile Back Button */}
        <div className="lg:hidden p-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
          <button 
            onClick={() => setShowMobileList(true)}
            className="flex items-center gap-2 text-blue-600 font-bold text-sm"
          >
            <ChevronRight className="rotate-180" size={18} />
            Back to List
          </button>
        </div>

        {view === 'flashcards' ? (
          <div className="flex-1 p-4 lg:p-8 overflow-y-auto">
            <Flashcards flashcards={flashcards} onUpdate={setFlashcards} />
          </div>
        ) : view === 'glossary' && !selectedGlossaryTerm ? (
          <div className="flex-1 p-4 lg:p-12 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-500/20">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">AML/CFT Glossary</h2>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">Search and explore essential terminology for financial crime professionals.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {glossary
                  .filter(g => 
                    g.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    g.definition.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.01 }}
                      onClick={() => setSelectedGlossaryTerm(item)}
                      className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-900 transition-all group cursor-pointer"
                    >
                      <h4 className="text-lg font-black text-indigo-600 dark:text-indigo-400 mb-2 group-hover:translate-x-1 transition-transform">{item.term}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">{item.definition}</p>
                    </motion.div>
                  ))
                }
              </div>

              {glossary.filter(g => 
                g.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
                g.definition.toLowerCase().includes(searchQuery.toLowerCase())
              ).length === 0 && (
                <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
                  <Search className="mx-auto text-slate-300 dark:text-slate-700 mb-4" size={48} />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No terms found</h3>
                  <p className="text-slate-500 dark:text-slate-400">We couldn't find any glossary terms matching "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>
        ) : view === 'assets' ? (
          <div className="flex-1 p-4 lg:p-12 overflow-y-auto">
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-slate-800 rounded-2xl text-white shadow-lg shadow-slate-500/20">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Compliance Assets</h2>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">Reference materials for acronyms and red flag indicators.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Acronyms */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-indigo-600 rounded-lg text-white">
                      <GraduationCap size={18} />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Acronym Tracker</h3>
                  </div>
                  <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                    {acronyms.filter(a => a.acronym.toLowerCase().includes(searchQuery.toLowerCase()) || a.description.toLowerCase().includes(searchQuery.toLowerCase())).map((item, i) => (
                      <div key={i} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700 flex gap-4 hover:border-indigo-200 transition-colors">
                        <div className="font-black text-indigo-600 dark:text-indigo-400 shrink-0 w-16">{item.acronym}</div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Red Flags */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-red-600 rounded-lg text-white">
                      <AlertTriangle size={18} />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Red Flag Master List</h3>
                  </div>
                  <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                    {redFlags.filter(f => f.flag.toLowerCase().includes(searchQuery.toLowerCase()) || f.sector.toLowerCase().includes(searchQuery.toLowerCase())).map((item, i) => (
                      <div key={i} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-red-200 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded text-[10px] font-black uppercase tracking-widest">
                            {item.sector}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{item.flag}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (selectedTopic || selectedCase || selectedSavedItem || selectedGlossaryTerm) ? (
          <motion.div 
            key={selectedTopic?.id || selectedCase?.id || selectedSavedItem?.id || selectedGlossaryTerm?.term}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 p-4 lg:p-8"
          >
            {selectedGlossaryTerm ? (
              <div className="max-w-3xl mx-auto py-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-500/20">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">Glossary Term</p>
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">{selectedGlossaryTerm.term}</h2>
                  </div>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                  <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {selectedGlossaryTerm.definition}
                  </p>
                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={() => {
                        const newCard: Flashcard = {
                          id: Math.random().toString(36).substring(2, 11),
                          front: selectedGlossaryTerm.term,
                          back: selectedGlossaryTerm.definition,
                          nextReview: Date.now(),
                          interval: 0,
                          easeFactor: 2.5,
                          repetitions: 0
                        };
                        setFlashcards(prev => [...prev, newCard]);
                        alert(`Flashcard created for "${selectedGlossaryTerm.term}"!`);
                      }}
                      className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20"
                    >
                      <Brain size={18} />
                      Create Flashcard
                    </button>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800 flex items-start gap-4">
                  <Sparkles className="text-blue-600 shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-blue-900 dark:text-blue-200 mb-1">Study Tip</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Understanding the precise definition of "{selectedGlossaryTerm.term}" is crucial for the CAMS exam. Try to relate this term to real-world scenarios or case studies in the guide.
                    </p>
                  </div>
                </div>
              </div>
            ) : activeQuiz ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-8">
                  <button 
                    onClick={() => setActiveQuiz(null)}
                    className="text-sm font-bold text-blue-600 flex items-center gap-1"
                  >
                    <ChevronRight className="rotate-180" size={18} /> Back to Content
                  </button>
                  <h3 className="text-xl font-bold dark:text-white">{activeQuiz.title}</h3>
                </div>
                <div className="space-y-8">
                  {activeQuiz.questions.map((q, idx) => (
                    <div key={q.id} className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                      <p className="text-sm font-bold text-blue-600 mb-2">Question {idx + 1}</p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white mb-4">{q.question}</p>
                      <div className="grid grid-cols-1 gap-2">
                        {q.options.map((opt, oIdx) => (
                          <div key={oIdx} className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-300">
                            {opt}
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-xs text-blue-700 dark:text-blue-300">
                        <span className="font-bold">Correct Answer:</span> {q.options[q.correctAnswer]}
                        <p className="mt-1">{q.explanation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : selectedTopic && (
              <>
                <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-[10px] font-black uppercase tracking-widest">
                        {selectedTopic.category}
                      </span>
                      <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-[10px] font-black uppercase tracking-widest">
                        {selectedTopic.id.toUpperCase()}
                      </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white leading-tight">{selectedTopic.title}</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-3 text-lg leading-relaxed max-w-2xl">{selectedTopic.description}</p>
                  </div>
                    <div className="flex flex-wrap items-center gap-3 shrink-0">
                      <button
                        onClick={() => toggleChapterCompletion(selectedTopic.id)}
                        className={cn(
                          "flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold transition-all shadow-lg",
                          progress?.completedChapters?.includes(selectedTopic.id)
                            ? "bg-green-600 text-white shadow-green-500/20"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
                        )}
                      >
                        {progress?.completedChapters?.includes(selectedTopic.id) ? (
                          <>
                            <CheckCircle2 size={18} />
                            Completed
                          </>
                        ) : (
                          <>
                            <div className="w-4 h-4 border-2 border-slate-300 dark:border-slate-600 rounded-full" />
                            Mark Complete
                          </>
                        )}
                      </button>
                      <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 p-1.5 rounded-xl border border-slate-100 dark:border-slate-800">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Count:</span>
                      <select 
                        value={flashcardCount}
                        onChange={(e) => setFlashcardCount(Number(e.target.value))}
                        className="bg-transparent text-xs font-bold text-slate-600 dark:text-slate-300 focus:outline-none cursor-pointer"
                      >
                        <option value={5}>5 Cards</option>
                        <option value={10}>10 Cards</option>
                        <option value={15}>15 Cards</option>
                      </select>
                    </div>
                    <button
                      onClick={() => {
                        const chapterNum = selectedTopic.id.replace('ch', '');
                        const quiz = quizSets.find(q => q.id === `q${chapterNum}`);
                        if (quiz) setActiveQuiz(quiz);
                      }}
                      className="flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-500/20"
                    >
                      <GraduationCap size={18} />
                      Practice Quiz
                    </button>
                    <button
                      onClick={handleGenerateFlashcards}
                      disabled={isGeneratingCards}
                      className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50"
                    >
                      {isGeneratingCards ? (
                        <Loader2 className="animate-spin" size={18} />
                      ) : (
                        <Sparkles size={18} />
                      )}
                      Gen Cards
                    </button>
                    <button
                      onClick={() => toggleBookmark(selectedTopic.id)}
                      className={cn(
                        "p-2.5 rounded-xl border transition-all",
                        bookmarks.includes(selectedTopic.id)
                          ? "bg-amber-500 border-amber-500 text-white shadow-lg shadow-amber-500/20"
                          : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 hover:border-amber-200 hover:text-amber-500"
                      )}
                    >
                      {bookmarks.includes(selectedTopic.id) ? <BookmarkCheck size={20} fill="currentColor" /> : <Bookmark size={20} />}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-5 md:p-8 rounded-3xl border border-blue-100/50 dark:border-blue-800/50 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-200 dark:scrollbar-thumb-blue-900">
                    <div className="flex items-center justify-between mb-6 min-w-max">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                          <BookOpen size={20} />
                        </div>
                        <h3 className="text-xl font-black text-slate-900 dark:text-white">Study Overview</h3>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-blue-100/50 dark:bg-blue-900/30 rounded-full text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest animate-pulse lg:hidden">
                        <ArrowRight size={12} />
                        Scroll Right
                      </div>
                    </div>
                    
                    <div className="prose prose-slate dark:prose-invert max-w-none break-words min-w-[300px]
                      prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900 dark:prose-headings:text-white
                      prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed prose-p:text-base md:text-lg
                      prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-bold
                      prose-ul:list-disc prose-li:text-slate-600 dark:prose-li:text-slate-300
                      prose-hr:border-slate-200 dark:prose-hr:border-slate-800
                    ">
                      <Markdown>{selectedTopic.content}</Markdown>
                    </div>

                    {(selectedTopic.id === 'ch2' || selectedTopic.id === 'ch3') && (
                      <RiskCalculator />
                    )}
                  </div>
                </div>
              </>
            )}

            {selectedCase && (
              <>
                <div className="mb-8 flex justify-between items-start">
                  <div>
                    <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 rounded-full text-xs font-bold uppercase tracking-wider">
                      Case Study
                    </span>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-4">{selectedCase.title}</h2>
                  </div>
                  <button
                    onClick={() => toggleBookmark(selectedCase.id)}
                    className={cn(
                      "p-3 rounded-xl border transition-all",
                      bookmarks.includes(selectedCase.id)
                        ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20"
                        : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-400 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50"
                    )}
                  >
                    {bookmarks.includes(selectedCase.id) ? <BookmarkCheck size={24} fill="currentColor" /> : <Bookmark size={24} />}
                  </button>
                </div>

                <div className="space-y-8">
                  <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Scenario</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg italic">"{selectedCase.scenario}"</p>
                  </div>

                  <div className="bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-800">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <Brain className="text-blue-400" size={24} />
                      Compliance Decision
                    </h3>
                    <p className="text-blue-100/60 mb-8">Based on the scenario above, what is your immediate compliance action?</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button 
                        onClick={() => { setCaseDecision('sar'); setShowCaseFeedback(true); }}
                        className={cn(
                          "p-6 rounded-2xl border-2 transition-all text-left group",
                          caseDecision === 'sar' ? "bg-blue-600 border-blue-400 text-white" : "bg-slate-800 border-slate-700 text-slate-300 hover:border-blue-500 hover:bg-slate-700"
                        )}
                      >
                        <div className="font-black uppercase tracking-widest text-[10px] mb-2 opacity-60">Action A</div>
                        <div className="text-lg font-bold">File a SAR/STR</div>
                        <p className="text-sm mt-2 opacity-60">Immediate reporting to the FIU based on confirmed suspicion.</p>
                      </button>

                      <button 
                        onClick={() => { setCaseDecision('investigate'); setShowCaseFeedback(true); }}
                        className={cn(
                          "p-6 rounded-2xl border-2 transition-all text-left group",
                          caseDecision === 'investigate' ? "bg-indigo-600 border-indigo-400 text-white" : "bg-slate-800 border-slate-700 text-slate-300 hover:border-indigo-500 hover:bg-slate-700"
                        )}
                      >
                        <div className="font-black uppercase tracking-widest text-[10px] mb-2 opacity-60">Action B</div>
                        <div className="text-lg font-bold">Further Investigation</div>
                        <p className="text-sm mt-2 opacity-60">Conduct EDD and gather more intelligence before reporting.</p>
                      </button>
                    </div>

                    <AnimatePresence>
                      {showCaseFeedback && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-8 p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl"
                        >
                          <div className="flex items-start gap-3">
                            <Sparkles className="text-blue-400 shrink-0 mt-1" size={20} />
                            <div>
                              <p className="font-black text-white text-sm uppercase tracking-widest mb-1">Expert Feedback</p>
                              <p className="text-blue-100/80 text-sm leading-relaxed">
                                {caseDecision === 'sar' 
                                  ? "Correct approach if suspicion is confirmed. However, ensure internal documentation is robust before filing to avoid regulatory pushback."
                                  : "A prudent step for complex cases. Gathering more intelligence through EDD helps in building a stronger SAR or justifying a non-filing decision."}
                              </p>
                              <div className="mt-4 pt-4 border-t border-blue-500/20">
                                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Recommended Next Steps</p>
                                <ul className="space-y-1">
                                  {selectedCase.recommendedActions.map((action, idx) => (
                                    <li key={idx} className="text-xs text-blue-100/60 flex items-center gap-2">
                                      <div className="w-1 h-1 bg-blue-400 rounded-full" />
                                      {action}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <section className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                        <AlertTriangle className="text-red-500" size={24} />
                        Key Risks
                      </h3>
                      <ul className="grid grid-cols-1 gap-3">
                        {selectedCase.risks.map((risk, idx) => (
                          <li key={idx} className="flex gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-900/40 text-red-800 dark:text-red-300 text-sm">
                            <span className="font-bold text-red-400">{idx + 1}.</span>
                            {risk}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                        <CheckCircle2 className="text-green-500" size={24} />
                        Recommended Actions
                      </h3>
                      <ul className="grid grid-cols-1 gap-3">
                        {selectedCase.recommendedActions.map((action, idx) => (
                          <li key={idx} className="flex gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-900/40 text-green-800 dark:text-green-300 text-sm">
                            <span className="font-bold text-green-400">{idx + 1}.</span>
                            {action}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </div>
              </>
            )}

            {selectedSavedItem && (
              <>
                <div className="mb-8 flex justify-between items-start">
                  <div>
                    <span className={cn(
                      "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                      selectedSavedItem.type === 'news' 
                        ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" 
                        : "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300"
                    )}>
                      {selectedSavedItem.type === 'news' ? 'Global AML Update' : 'BFIU Circular'}
                    </span>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-4">{selectedSavedItem.title}</h2>
                    <p className="text-slate-400 dark:text-slate-500 mt-2 text-sm flex items-center gap-2">
                      <Globe size={14} />
                      Saved on {new Date(selectedSavedItem.date).toLocaleDateString()}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleNewsBookmark(selectedSavedItem)}
                    className="p-3 rounded-xl border bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20 transition-all"
                  >
                    <BookmarkCheck size={24} fill="currentColor" />
                  </button>
                </div>

                <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-600 dark:prose-p:text-slate-300">
                  <Markdown>{selectedSavedItem.content}</Markdown>
                </div>
              </>
            )}
          </motion.div>
        ) : (
          <div className="flex-1 overflow-y-auto p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-500/20">
                  {view === 'topics' ? <BookOpen size={24} /> : view === 'cases' ? <AlertTriangle size={24} /> : <Bookmark size={24} />}
                </div>
                <div>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    {view === 'topics' ? 'Study Modules' : view === 'cases' ? 'Case Analysis' : 'Saved Materials'}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">
                    {view === 'topics' 
                      ? 'Explore comprehensive AML/CFT study materials and master the syllabus.' 
                      : view === 'cases' 
                        ? 'Analyze real-world scenarios and test your compliance decision-making.' 
                        : 'Review your bookmarked topics, cases, and global news updates.'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {view === 'topics' && filteredTopics.map(topic => renderTopicCard(topic))}
                {view === 'cases' && filteredCases.map(cs => renderCaseCard(cs))}
                {view === 'bookmarks' && (
                  <>
                    {filteredTopics.map(topic => renderTopicCard(topic))}
                    {filteredCases.map(cs => renderCaseCard(cs))}
                    {filteredNews.map(item => (
                      <div key={item.id} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-6 flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                          <span className="px-2 py-0.5 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded text-[10px] font-black uppercase tracking-widest">
                            {item.type === 'news' ? 'Global News' : 'BFIU Circular'}
                          </span>
                          <BookmarkCheck className="text-blue-600" size={18} fill="currentColor" />
                        </div>
                        <h4 className="font-bold text-slate-900 dark:text-white line-clamp-2">{item.title}</h4>
                        <button
                          onClick={() => setSelectedSavedItem(item)}
                          className="mt-auto w-full py-2.5 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-xl text-xs font-bold hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2"
                        >
                          Read Full Article
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    ))}
                  </>
                )}
              </div>

              {((view === 'topics' && filteredTopics.length === 0) || 
                (view === 'cases' && filteredCases.length === 0) || 
                (view === 'bookmarks' && filteredTopics.length === 0 && filteredCases.length === 0 && filteredNews.length === 0)) && (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-slate-50 dark:bg-slate-900 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Search className="text-slate-200 dark:text-slate-700" size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No results found</h3>
                  <p className="text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyGuide;
