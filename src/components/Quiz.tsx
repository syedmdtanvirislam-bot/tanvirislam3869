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
  ShieldCheck
} from 'lucide-react';
import { quizSets } from '../data/mockData';
import { cn } from '../lib/utils';
import { QuizSet } from '../types';

const Quiz: React.FC = () => {
  const [selectedSet, setSelectedSet] = React.useState<QuizSet | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null);
  const [isAnswered, setIsAnswered] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [showResults, setShowResults] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(1800); // 30 minutes
  const [isTimerActive, setIsTimerActive] = React.useState(false);

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

  const startQuiz = (set: QuizSet) => {
    const limitedQuestions = set.questions.slice(0, 25);
    setSelectedSet({ ...set, questions: limitedQuestions });
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(1800);
    setIsTimerActive(true);
    setShowResults(false);
  };

  if (!selectedSet) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Practice & Exams</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Choose between targeted practice sets or a full-length mock exam. All exams are limited to 25 questions and 30 minutes.</p>
        </div>

        <div className="mb-12">
          <button
            onClick={() => {
              const allQuestions = quizSets.flatMap(s => s.questions);
              const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
              startQuiz({
                id: 'mock-exam',
                title: 'Full Mock Exam',
                questions: shuffled
              });
            }}
            className="w-full bg-slate-900 dark:bg-blue-600 p-8 rounded-3xl shadow-xl shadow-blue-500/10 border border-slate-800 dark:border-blue-500 flex flex-col md:flex-row items-center justify-between gap-6 group hover:scale-[1.01] transition-all"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ShieldCheck className="text-white" size={32} />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-1">Full Mock Exam</h3>
                <p className="text-blue-100/60 text-sm">Randomized selection from all topics • 25 Questions • 30 Mins</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-white/10 rounded-xl text-white font-bold group-hover:bg-white/20 transition-all">
              Start Final Exam <ArrowRight size={20} />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizSets.map((set) => (
            <button
              key={set.id}
              onClick={() => startQuiz(set)}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all text-left group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Trophy className="text-blue-600 group-hover:text-white transition-colors" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{set.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{Math.min(set.questions.length, 25)} Questions • 30 Mins</p>
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                Start Exam <ArrowRight size={16} />
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

  const handleNextQuestion = () => {
    if (currentQuestionIndex < selectedSet.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsTimerActive(false);
      setShowResults(true);
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
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto bg-white dark:bg-slate-800 p-6 lg:p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 text-center"
      >
        <div className="w-20 h-20 lg:w-24 lg:h-24 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8">
          {timeLeft === 0 ? <AlertTriangle className="text-red-600 dark:text-red-400" size={40} /> : <Trophy className="text-yellow-600 dark:text-yellow-400" size={40} />}
        </div>
        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-2">
          {timeLeft === 0 ? "Time's Up!" : "Quiz Completed!"}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base lg:text-lg mb-8">
          {timeLeft === 0 
            ? "The exam timer has expired. Here is how you performed."
            : `Great job! You've completed the ${selectedSet.title} session.`}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 lg:mb-12">
          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">Your Score</p>
            <p className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-1">{score} / {selectedSet.questions.length}</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">Time Remaining</p>
            <p className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-1">{formatTime(timeLeft)}</p>
          </div>
        </div>

        <button 
          onClick={resetQuiz}
          className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
        >
          <RotateCcw size={20} />
          Back to Quiz Selection
        </button>
      </motion.div>
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
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-[10px] font-black uppercase tracking-widest">
              {currentQuestion.category}
            </span>
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
