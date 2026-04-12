import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw,
  Trophy,
  HelpCircle,
  Timer,
  AlertTriangle,
  ShieldCheck,
  Download,
  Award,
  Loader2,
  GraduationCap,
  Brain,
  Sparkles
} from 'lucide-react';
import { toPng } from 'html-to-image';
import { quizSets } from '../data/mockData';
import { cn } from '../lib/utils';
import { QuizSet } from '../types';
import { useAuth } from '../AuthContext';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

const Quiz: React.FC = () => {
  const { user, progress } = useAuth();
  const [selectedSet, setSelectedSet] = React.useState<QuizSet | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null);
  const [isAnswered, setIsAnswered] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [showResults, setShowResults] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(1800); // Default 30 minutes
  const [isTimerActive, setIsTimerActive] = React.useState(false);
  const [isSimulator, setIsSimulator] = React.useState(false);
  const [isDownloading, setIsDownloading] = React.useState(false);
  const [difficultyFilter, setDifficultyFilter] = React.useState<'all' | 'easy' | 'medium' | 'hard'>('all');
  const [customQuizConfig, setCustomQuizConfig] = React.useState({
    topicId: 'all',
    questionCount: 20
  });
  const certificateRef = React.useRef<HTMLDivElement>(null);

  const isMockExam = selectedSet?.id.startsWith('mock-exam');
  const isSimulatorMode = selectedSet?.id === 'cams-simulator';
  const passMark = isSimulatorMode ? 90 : isMockExam ? 32 : Math.ceil((selectedSet?.questions.length || 0) * 0.7);
  const isPassed = score >= passMark;

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTimerActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isTimerActive) {
      setIsTimerActive(false);
      setShowResults(true);
    }
    return () => clearInterval(timer);
  }, [isTimerActive, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const startQuiz = (set: QuizSet, difficulty: 'all' | 'easy' | 'medium' | 'hard' = 'all') => {
    const isMock = set.id.includes('mock-exam');
    const isSim = set.id === 'cams-simulator';
    const limit = isSim ? 120 : isMock ? 40 : 20;
    
    let finalQuestions: any[] = [];

    if (isSim) {
      // Simulator Weightage Logic:
      // Ch 1: 26% (31), Ch 2: 25% (30), Ch 3: 28% (34), Ch 4: 21% (25)
      const ch1 = shuffleArray(quizSets.find(s => s.id === 'ch1')?.questions || []).slice(0, 31);
      const ch2 = shuffleArray(quizSets.find(s => s.id === 'ch2')?.questions || []).slice(0, 30);
      const ch3 = shuffleArray(quizSets.find(s => s.id === 'ch3')?.questions || []).slice(0, 34);
      const ch4 = shuffleArray(quizSets.find(s => s.id === 'ch4')?.questions || []).slice(0, 25);
      
      finalQuestions = shuffleArray([...ch1, ...ch2, ...ch3, ...ch4]);
      // If we don't have enough, fill with randoms
      if (finalQuestions.length < 120) {
        const all = shuffleArray(quizSets.flatMap(s => s.questions));
        finalQuestions = [...finalQuestions, ...all.slice(0, 120 - finalQuestions.length)];
      }
      setTimeLeft(10500); // 175 minutes
      setIsSimulator(true);
    } else {
      let questionsPool = set.questions;
      if (difficulty !== 'all') {
        questionsPool = set.questions.filter(q => q.difficulty === difficulty);
      }
      if (questionsPool.length < 5 && difficulty !== 'all') {
        questionsPool = set.questions;
      }
      finalQuestions = shuffleArray(questionsPool).slice(0, limit);
      setTimeLeft(1800); // 30 minutes
      setIsSimulator(false);
    }
    
    setSelectedSet({ ...set, questions: finalQuestions });
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsTimerActive(true);
    setShowResults(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const downloadCertificate = async () => {
    if (!certificateRef.current) return;
    setIsDownloading(true);
    try {
      const dataUrl = await toPng(certificateRef.current, {
        quality: 1.0,
        pixelRatio: 2,
        backgroundColor: '#ffffff'
      });
      const link = document.createElement('a');
      link.download = `CAMS-Mock-Exam-Certificate.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Certificate download failed:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  if (!selectedSet) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Practice & Exams</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Choose between targeted practice sets (20 Qs) or full-length mock exams (40 Qs). All exams are limited to 30 minutes.</p>
          </div>
          
          <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl shrink-0">
            {(['all', 'easy', 'medium', 'hard'] as const).map((d) => (
              <button
                key={d}
                onClick={() => setDifficultyFilter(d)}
                className={cn(
                  "px-4 py-2 text-xs font-bold rounded-lg transition-all capitalize",
                  difficultyFilter === d 
                    ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm" 
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                )}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <button
            onClick={() => {
              startQuiz({
                id: 'cams-simulator',
                title: 'CAMS Exam Simulator',
                questions: [] // Populated in startQuiz
              });
            }}
            className="md:col-span-2 bg-gradient-to-br from-indigo-600 to-blue-700 p-8 rounded-3xl shadow-xl shadow-blue-500/20 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 group hover:scale-[1.01] transition-all text-left"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors shrink-0">
                <GraduationCap className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">Full CAMS Exam Simulator</h3>
                <p className="text-blue-100/60 text-sm mt-1">120 Questions • 175 Minutes • 75% Passing Score • Weighted by Chapter</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl text-sm font-black group-hover:bg-blue-50 transition-all shadow-lg">
              Start Simulator <ArrowRight size={18} />
            </div>
          </button>

          <button
            onClick={() => {
              const allQuestions = shuffleArray(quizSets.flatMap(s => s.questions));
              // Use first 40 for Set A
              const poolA = allQuestions.slice(0, 40);
              startQuiz({
                id: 'mock-exam-a',
                title: 'Mock Exam: Set A',
                questions: poolA
              }, difficultyFilter);
            }}
            className="bg-slate-900 dark:bg-blue-600 p-8 rounded-3xl shadow-xl shadow-blue-500/10 border border-slate-800 dark:border-blue-500 flex flex-col items-start justify-between gap-6 group hover:scale-[1.02] transition-all text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ShieldCheck className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Mock Exam: Set A</h3>
                <p className="text-blue-100/60 text-xs">Primary Question Pool • 40 Qs • 32 Pass</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl text-white text-sm font-bold group-hover:bg-white/20 transition-all">
              Start Set A <ArrowRight size={16} />
            </div>
          </button>

          <button
            onClick={() => {
              const allQuestions = shuffleArray(quizSets.flatMap(s => s.questions));
              // Use questions 41-80 for Set B to ensure they are different if possible
              // or just shuffle again for a different random set
              const poolB = allQuestions.slice(40, 80);
              // If we have less than 80, just take another random 40
              const finalPoolB = poolB.length >= 40 ? poolB : shuffleArray(allQuestions).slice(0, 40);
              
              startQuiz({
                id: 'mock-exam-b',
                title: 'Mock Exam: Set B',
                questions: finalPoolB
              }, difficultyFilter);
            }}
            className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 flex flex-col items-start justify-between gap-6 group hover:scale-[1.02] transition-all text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                <Trophy className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Mock Exam: Set B</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs">Advanced Question Pool • 40 Qs • 32 Pass</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all">
              Start Set B <ArrowRight size={16} />
            </div>
          </button>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-600 rounded-lg text-white">
              <Brain size={18} />
            </div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Custom Quiz Builder</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Select Topic</label>
              <select 
                value={customQuizConfig.topicId}
                onChange={(e) => setCustomQuizConfig(prev => ({ ...prev, topicId: e.target.value }))}
                className="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"
              >
                <option value="all">All Chapters</option>
                {quizSets.map(set => (
                  <option key={set.id} value={set.id}>{set.title}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Number of Questions</label>
              <select 
                value={customQuizConfig.questionCount}
                onChange={(e) => setCustomQuizConfig(prev => ({ ...prev, questionCount: Number(e.target.value) }))}
                className="w-full p-3 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"
              >
                <option value={10}>10 Questions</option>
                <option value={20}>20 Questions</option>
                <option value={30}>30 Questions</option>
                <option value={40}>40 Questions</option>
                <option value={50}>50 Questions</option>
              </select>
            </div>

            <button
              onClick={() => {
                let pool = [];
                if (customQuizConfig.topicId === 'all') {
                  pool = quizSets.flatMap(s => s.questions);
                } else {
                  pool = quizSets.find(s => s.id === customQuizConfig.topicId)?.questions || [];
                }
                
                if (difficultyFilter !== 'all') {
                  pool = pool.filter(q => q.difficulty === difficultyFilter);
                }

                const finalQuestions = shuffleArray(pool).slice(0, customQuizConfig.questionCount);
                
                startQuiz({
                  id: `custom-${Date.now()}`,
                  title: `Custom Quiz: ${customQuizConfig.topicId === 'all' ? 'Mixed Topics' : quizSets.find(s => s.id === customQuizConfig.topicId)?.title}`,
                  questions: finalQuestions
                });
              }}
              className="w-full py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2"
            >
              Generate Quiz <Sparkles size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizSets.map((set) => (
            <button
              key={set.id}
              onClick={() => startQuiz(set, difficultyFilter)}
              className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-blue-200 transition-all text-left group"
            >
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Trophy className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{set.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">20 Questions • 30 Mins</p>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm">
                Start Practice <ArrowRight size={16} />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const currentQuestion = selectedSet.questions[currentQuestionIndex];

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswered(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = async () => {
    if (currentQuestionIndex < selectedSet.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsTimerActive(false);
      setShowResults(true);
      
      // Save score to Firestore if user is logged in
      if (user && selectedSet) {
        try {
          const progressRef = doc(db, 'progress', user.uid);
          const currentScores = progress?.quizScores || {};
          const bestScore = currentScores[selectedSet.id] || 0;
          
          if (score > bestScore) {
            await updateDoc(progressRef, {
              [`quizScores.${selectedSet.id}`]: score,
              totalPoints: (progress?.totalPoints || 0) + (score - bestScore)
            });
          }
        } catch (error) {
          handleFirestoreError(error, OperationType.UPDATE, `progress/${user.uid}`);
        }
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
    setSelectedSet(null);
    setIsTimerActive(false);
    setTimeLeft(1800);
  };

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-slate-800 p-6 lg:p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 text-center"
        >
          <div className="w-20 h-20 lg:w-24 lg:h-24 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8">
            {timeLeft === 0 ? <AlertTriangle className="text-red-600 dark:text-red-400" size={40} /> : <Trophy className="text-yellow-600 dark:text-yellow-400" size={40} />}
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-2">
            {timeLeft === 0 ? "Time's Up!" : isPassed ? "Congratulations!" : "Keep Practicing!"}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base lg:text-lg mb-8">
            {isPassed 
              ? `You passed the ${selectedSet.title} with a score of ${score}/${selectedSet.questions.length}!` 
              : `You scored ${score}/${selectedSet.questions.length}. You need ${passMark} to pass.`}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 lg:mb-12">
            <div className={cn(
              "p-6 rounded-2xl border transition-all",
              isPassed ? "bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800" : "bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-800"
            )}>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">Result</p>
              <p className={cn(
                "text-3xl lg:text-4xl font-black mt-1",
                isPassed ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
              )}>{isPassed ? "PASSED" : "FAILED"}</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">Score</p>
              <p className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-1">{score} / {selectedSet.questions.length}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={resetQuiz}
              className="flex-1 flex items-center justify-center gap-2 py-4 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white rounded-2xl font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition-all"
            >
              <RotateCcw size={20} />
              Back to Selection
            </button>
            {isPassed && (isMockExam || isSimulatorMode) && (
              <button 
                onClick={downloadCertificate}
                disabled={isDownloading}
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50"
              >
                {isDownloading ? <Loader2 className="animate-spin" size={20} /> : <Download size={20} />}
                Download Certificate
              </button>
            )}
          </div>
        </motion.div>

        {/* Hidden Certificate for Capture */}
        {isPassed && (isMockExam || isSimulatorMode) && (
          <div className="fixed left-[-9999px] top-0">
            <div 
              ref={certificateRef}
              className="w-[800px] h-[600px] bg-white p-12 flex flex-col items-center justify-between border-[16px] border-blue-600 relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-blue-50 rounded-full opacity-50" />
              <div className="absolute bottom-[-50px] left-[-50px] w-40 h-40 bg-blue-50 rounded-full opacity-50" />
              
              <div className="text-center space-y-4">
                <div className="flex justify-center mb-4">
                  <Award className="text-blue-600" size={80} />
                </div>
                <h1 className="text-5xl font-black text-slate-900 uppercase tracking-tighter">Certificate of Achievement</h1>
                <div className="w-32 h-1 bg-blue-600 mx-auto" />
              </div>

              <div className="text-center space-y-6">
                <p className="text-xl text-slate-500 italic">This is to certify that you have successfully passed the</p>
                <h2 className="text-3xl font-bold text-slate-800">{isSimulatorMode ? 'CAMS OFFICIAL EXAM SIMULATOR' : 'CAMS FULL MOCK EXAMINATION'}</h2>
                <div className="py-8">
                  <p className="text-lg text-slate-500">With a score of</p>
                  <p className="text-6xl font-black text-blue-600">{score} / {selectedSet.questions.length}</p>
                </div>
              </div>

              <div className="w-full flex justify-between items-end pt-8 border-t border-slate-100">
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-900">Date: {new Date().toLocaleDateString()}</p>
                  <p className="text-xs text-slate-400">AML Study Guide Platform</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-blue-600 font-black italic text-xl">
                    <ShieldCheck size={24} />
                    AML CERTIFIED
                  </div>
                  <p className="text-[10px] text-slate-300 uppercase tracking-widest mt-1">Verification ID: {Math.random().toString(36).substring(2, 11).toUpperCase()}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div>
            <button 
              onClick={() => {
                setSelectedSet(null);
                setIsTimerActive(false);
              }}
              className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4 flex items-center gap-1"
            >
              <ArrowRight size={14} className="rotate-180" /> Back to Sets
            </button>
            <div className="flex items-center gap-2 mt-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-[10px] font-black uppercase tracking-widest">
                {currentQuestion.category}
              </span>
              {currentQuestion.difficulty && (
                <span className={cn(
                  "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                  currentQuestion.difficulty === 'easy' ? "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300" :
                  currentQuestion.difficulty === 'medium' ? "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300" :
                  "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300"
                )}>
                  {currentQuestion.difficulty}
                </span>
              )}
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-4">Question {currentQuestionIndex + 1} of {selectedSet.questions.length}</h2>
          </div>
        </div>
        <div className="flex items-center justify-between sm:justify-end gap-4 lg:gap-8">
          <div className={cn(
            "flex items-center gap-3 px-4 lg:px-6 py-3 rounded-2xl border-2 transition-all",
            timeLeft < 300 
              ? "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-900/40 text-red-600 dark:text-red-400 animate-pulse" 
              : "bg-slate-50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300"
          )}>
            <Timer size={20} />
            <div className="text-right">
              <p className="text-[10px] uppercase font-bold opacity-60">Time Left</p>
              <p className="text-xl font-mono font-bold leading-none">{formatTime(timeLeft)}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-widest">Score</p>
            <p className="text-2xl font-black text-blue-600 dark:text-blue-400">{score}</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 p-6 lg:p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 mb-8">
        <h3 className="text-lg lg:text-xl font-bold text-slate-800 dark:text-slate-200 leading-relaxed mb-8">
          {currentQuestion.question}
        </h3>

        <div className="space-y-3 lg:space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              disabled={isAnswered}
              onClick={() => handleOptionSelect(index)}
              className={cn(
                "w-full text-left p-4 lg:p-5 rounded-2xl border-2 transition-all flex items-center justify-between group",
                selectedOption === index 
                  ? isAnswered 
                    ? index === currentQuestion.correctAnswer
                      ? "bg-green-50 dark:bg-green-900/20 border-green-500 dark:border-green-900/40 text-green-700 dark:text-green-300"
                      : "bg-red-50 dark:bg-red-900/20 border-red-500 dark:border-red-900/40 text-red-700 dark:text-red-300"
                    : "bg-blue-50 dark:bg-blue-900/20 border-blue-500 dark:border-blue-900/40 text-blue-700 dark:text-blue-300"
                  : isAnswered && index === currentQuestion.correctAnswer
                    ? "bg-green-50 dark:bg-green-900/20 border-green-500 dark:border-green-900/40 text-green-700 dark:text-green-300"
                    : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              )}
            >
              <span className="font-bold text-sm lg:text-base">{option}</span>
              {isAnswered && index === currentQuestion.correctAnswer && <CheckCircle2 size={20} className="text-green-600 dark:text-green-400 shrink-0 ml-2" />}
              {isAnswered && selectedOption === index && index !== currentQuestion.correctAnswer && <XCircle size={20} className="text-red-600 dark:text-red-400 shrink-0 ml-2" />}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {isAnswered && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-8 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-700"
            >
              <div className="flex items-start gap-3">
                <HelpCircle className="text-blue-600 dark:text-blue-400 shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-black text-slate-900 dark:text-white text-sm uppercase tracking-widest mb-1">Explanation</p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{currentQuestion.explanation}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-end">
        {!isAnswered ? (
          <button
            disabled={selectedOption === null}
            onClick={handleCheckAnswer}
            className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
          >
            {currentQuestionIndex === selectedSet.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            <ArrowRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
