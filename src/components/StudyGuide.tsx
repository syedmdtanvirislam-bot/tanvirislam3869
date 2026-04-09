import React from 'react';
import { motion } from 'motion/react';
import Markdown from 'react-markdown';
import { ChevronRight, Search, BookOpen, Bookmark, BookmarkCheck, Newspaper, Globe, Brain, Sparkles, Loader2 } from 'lucide-react';
import { studyTopics, caseStudies } from '../data/mockData';
import { StudyTopic, CaseStudy, SavedItem, Flashcard } from '../types';
import { cn } from '../lib/utils';
import { generateFlashcards } from '../services/geminiService';
import Flashcards from './Flashcards';

const StudyGuide: React.FC = () => {
  const [view, setView] = React.useState<'topics' | 'cases' | 'bookmarks' | 'flashcards'>('topics');
  const [selectedTopic, setSelectedTopic] = React.useState<StudyTopic | null>(null);
  const [selectedCase, setSelectedCase] = React.useState<CaseStudy | null>(null);
  const [selectedSavedItem, setSelectedSavedItem] = React.useState<SavedItem | null>(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isGeneratingCards, setIsGeneratingCards] = React.useState(false);
  const [flashcardCount, setFlashcardCount] = React.useState<number>(5);
  const [includeImages, setIncludeImages] = React.useState(false);
  const [showMobileList, setShowMobileList] = React.useState(true);
  
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
    return saved ? JSON.parse(saved) : [];
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
            } else if (type === 'case') {
              setSelectedCase(item as CaseStudy);
              setSelectedTopic(null);
              setSelectedSavedItem(null);
            } else {
              setSelectedSavedItem(item as SavedItem);
              setSelectedTopic(null);
              setSelectedCase(null);
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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(100vh-12rem)] relative">
      <div className={cn(
        "lg:col-span-1 flex flex-col gap-6 h-full transition-all duration-300",
        !showMobileList && "hidden lg:flex"
      )}>
        <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
          <button
            onClick={() => setView('topics')}
            className={cn(
              "flex-1 py-2 text-sm font-bold rounded-lg transition-all",
              view === 'topics' ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm" : "text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            )}
          >
            Topics
          </button>
          <button
            onClick={() => setView('cases')}
            className={cn(
              "flex-1 py-2 text-sm font-bold rounded-lg transition-all",
              view === 'cases' ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm" : "text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            )}
          >
            Cases
          </button>
          <button
            onClick={() => setView('bookmarks')}
            className={cn(
              "flex-1 py-2 text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2",
              view === 'bookmarks' ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm" : "text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            )}
          >
            <Bookmark size={14} />
            Saved
          </button>
          <button
            onClick={() => setView('flashcards')}
            className={cn(
              "flex-1 py-2 text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2",
              view === 'flashcards' ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm" : "text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            )}
          >
            <Brain size={14} />
            Cards
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder={view === 'bookmarks' ? "Search saved items..." : view === 'topics' ? "Search topics..." : "Search cases..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>

        <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-hide">
          {view === 'topics' && filteredTopics.map(topic => renderListButton(topic, 'topic'))}
          {view === 'cases' && filteredCases.map(cs => renderListButton(cs, 'case'))}
          {view === 'bookmarks' && (
            <>
              {filteredTopics.length > 0 && (
                <div className="mb-4">
                  <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2 px-2">Study Topics</p>
                  <div className="space-y-3">
                    {filteredTopics.map(topic => renderListButton(topic, 'topic'))}
                  </div>
                </div>
              )}
              {filteredCases.length > 0 && (
                <div className="mb-4">
                  <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2 px-2">Case Studies</p>
                  <div className="space-y-3">
                    {filteredCases.map(cs => renderListButton(cs, 'case'))}
                  </div>
                </div>
              )}
              {filteredNews.length > 0 && (
                <div>
                  <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2 px-2">News & Circulars</p>
                  <div className="space-y-3">
                    {filteredNews.map(item => renderListButton(item, 'saved'))}
                  </div>
                </div>
              )}
              {filteredTopics.length === 0 && filteredCases.length === 0 && filteredNews.length === 0 && (
                <div className="text-center py-12 px-4">
                  <Bookmark className="mx-auto text-slate-200 dark:text-slate-700 mb-3" size={32} />
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">No saved items yet.</p>
                </div>
              )}
            </>
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
        ) : (selectedTopic || selectedCase || selectedSavedItem) ? (
          <motion.div 
            key={selectedTopic?.id || selectedCase?.id || selectedSavedItem?.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 overflow-y-auto p-4 lg:p-8"
          >
            {selectedTopic && (
              <>
                <div className="mb-8 flex justify-between items-start">
                  <div>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider">
                      {selectedTopic.category}
                    </span>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-4">{selectedTopic.title}</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">{selectedTopic.description}</p>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900/50 p-2 rounded-xl border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Count:</span>
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
                      <div className="w-px h-4 bg-slate-200 dark:bg-slate-700" />
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          checked={includeImages}
                          onChange={(e) => setIncludeImages(e.target.checked)}
                          className="hidden"
                        />
                        <div className={cn(
                          "w-4 h-4 rounded border transition-all flex items-center justify-center",
                          includeImages ? "bg-blue-600 border-blue-600" : "border-slate-300 dark:border-slate-600"
                        )}>
                          {includeImages && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">Visuals</span>
                      </label>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={handleGenerateFlashcards}
                        disabled={isGeneratingCards}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl font-bold hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-all border border-blue-100 dark:border-blue-800 disabled:opacity-50"
                      >
                        {isGeneratingCards ? (
                          <Loader2 className="animate-spin" size={18} />
                        ) : (
                          <Sparkles size={18} />
                        )}
                        Generate Cards
                      </button>
                      <button
                        onClick={() => toggleBookmark(selectedTopic.id)}
                        className={cn(
                          "p-3 rounded-xl border transition-all",
                          bookmarks.includes(selectedTopic.id)
                            ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20"
                            : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-400 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50"
                        )}
                      >
                        {bookmarks.includes(selectedTopic.id) ? <BookmarkCheck size={24} fill="currentColor" /> : <Bookmark size={24} />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-strong:text-slate-900 dark:prose-strong:text-white">
                  <Markdown>{selectedTopic.content}</Markdown>
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
                  <section>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-blue-600 rounded-full" />
                      Scenario Description
                    </h3>
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl text-slate-600 dark:text-slate-300 leading-relaxed border border-slate-100 dark:border-slate-700">
                      {selectedCase.scenario}
                    </div>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-red-500 rounded-full" />
                      Risks Involved
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

                  <section>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-green-500 rounded-full" />
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
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <div className="w-16 h-16 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center mb-4">
              <BookOpen className="text-slate-300 dark:text-slate-700" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {view === 'bookmarks' ? 'Select a saved item' : 'Select a topic to start studying'}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-xs">
              {view === 'bookmarks' 
                ? 'Choose one of your bookmarked topics, cases, or news updates to review.' 
                : 'Choose a topic from the list on the left to view detailed study materials and notes.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyGuide;
