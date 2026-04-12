import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  ChevronLeft,
  Sparkles,
  Clock,
  Plus,
  Camera,
  Download,
  Share2,
  ShieldCheck
} from 'lucide-react';
import { toPng } from 'html-to-image';
import { Flashcard } from '../types';
import { cn } from '../lib/utils';

interface FlashcardsProps {
  flashcards: Flashcard[];
  onUpdate: (updated: Flashcard[]) => void;
}

const Flashcards: React.FC<FlashcardsProps> = ({ flashcards, onUpdate }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [showReviewOnly, setShowReviewOnly] = React.useState(true);
  const [isCapturing, setIsCapturing] = React.useState(false);
  const [streak, setStreak] = React.useState<number>(() => {
    const saved = localStorage.getItem('cams_flashcard_streak');
    const lastDate = localStorage.getItem('cams_last_review_date');
    if (!saved || !lastDate) return 0;
    
    const last = new Date(lastDate);
    const today = new Date();
    last.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    
    const diffTime = Math.abs(today.getTime() - last.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays <= 1) return parseInt(saved);
    return 0;
  });
  const cardRef = React.useRef<HTMLDivElement>(null);

  const updateStreak = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const lastDateStr = localStorage.getItem('cams_last_review_date');
    
    if (!lastDateStr) {
      setStreak(1);
      localStorage.setItem('cams_flashcard_streak', '1');
      localStorage.setItem('cams_last_review_date', today.toISOString());
      return;
    }

    const lastDate = new Date(lastDateStr);
    lastDate.setHours(0, 0, 0, 0);
    
    const diffTime = today.getTime() - lastDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      localStorage.setItem('cams_flashcard_streak', newStreak.toString());
      localStorage.setItem('cams_last_review_date', today.toISOString());
    } else if (diffDays > 1) {
      setStreak(1);
      localStorage.setItem('cams_flashcard_streak', '1');
      localStorage.setItem('cams_last_review_date', today.toISOString());
    } else if (diffDays === 0 && streak === 0) {
      setStreak(1);
      localStorage.setItem('cams_flashcard_streak', '1');
      localStorage.setItem('cams_last_review_date', today.toISOString());
    }
  };

  const dueCards = React.useMemo(() => {
    const now = Date.now();
    return flashcards.filter(card => !showReviewOnly || card.nextReview <= now);
  }, [flashcards, showReviewOnly]);

  const currentCard = dueCards[currentIndex];

  const handleSRSReview = (quality: number) => {
    if (!currentCard) return;

    const updatedCard = { ...currentCard };
    
    // SM-2 Algorithm simplified
    if (quality >= 3) {
      if (updatedCard.repetitions === 0) {
        updatedCard.interval = 1;
      } else if (updatedCard.repetitions === 1) {
        updatedCard.interval = 6;
      } else {
        updatedCard.interval = Math.round(updatedCard.interval * updatedCard.easeFactor);
      }
      updatedCard.repetitions += 1;
    } else {
      updatedCard.repetitions = 0;
      updatedCard.interval = 1;
    }

    updatedCard.easeFactor = updatedCard.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (updatedCard.easeFactor < 1.3) updatedCard.easeFactor = 1.3;
    
    updatedCard.nextReview = Date.now() + updatedCard.interval * 24 * 60 * 60 * 1000;

    const newFlashcards = flashcards.map(f => f.id === updatedCard.id ? updatedCard : f);
    onUpdate(newFlashcards);
    updateStreak();
    
    // Move to next card
    setIsFlipped(false);
    if (currentIndex < dueCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleCapture = async (action: 'download' | 'share') => {
    if (!cardRef.current) return;
    
    setIsCapturing(true);
    // Give a small delay for UI to settle if needed
    await new Promise(resolve => setTimeout(resolve, 100));

    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        backgroundColor: isFlipped ? '#2563eb' : (document.documentElement.classList.contains('dark') ? '#1e293b' : '#ffffff'),
        style: {
          borderRadius: '24px',
        }
      });

      if (action === 'download') {
        const link = document.createElement('a');
        link.download = `flashcard-${currentCard.id}-${isFlipped ? 'back' : 'front'}.png`;
        link.href = dataUrl;
        link.click();
      } else if (action === 'share') {
        const blob = await (await fetch(dataUrl)).blob();
        const file = new File([blob], 'flashcard.png', { type: 'image/png' });
        
        if (navigator.share && navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: 'AML Flashcard',
            text: 'Check out this AML study flashcard!',
          });
        } else {
          // Fallback to download if share is not supported
          const link = document.createElement('a');
          link.download = `flashcard-${currentCard.id}.png`;
          link.href = dataUrl;
          link.click();
        }
      }
    } catch (err) {
      console.error('Capture failed:', err);
    } finally {
      setIsCapturing(false);
    }
  };

  if (dueCards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-20 h-20 bg-green-50 dark:bg-green-900/20 rounded-3xl flex items-center justify-center mb-6">
          <CheckCircle2 className="text-green-600 dark:text-green-400" size={40} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">All caught up!</h3>
        <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8">
          You've reviewed all your due flashcards. Check back later or add more cards from the Study Topics.
        </p>
        <button 
          onClick={() => setShowReviewOnly(false)}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
        >
          View All Cards ({flashcards.length})
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-500/20">
            <Brain className="text-white" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Flashcard Review</h2>
            <div className="flex items-center gap-2">
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                {currentIndex + 1} of {dueCards.length} cards {showReviewOnly ? 'due' : 'total'}
              </p>
              {streak > 0 && (
                <>
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  <div className="flex items-center gap-1 text-orange-500 font-bold text-sm">
                    <Sparkles size={14} />
                    <span>{streak} Day Streak</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
            <button 
              onClick={() => handleCapture('download')}
              disabled={isCapturing}
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              title="Download as Image"
            >
              <Download size={18} />
            </button>
            <button 
              onClick={() => handleCapture('share')}
              disabled={isCapturing}
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              title="Share Card"
            >
              <Share2 size={18} />
            </button>
          </div>
          <button 
            onClick={() => setShowReviewOnly(!showReviewOnly)}
            className={cn(
              "px-4 py-2 rounded-xl text-sm font-bold transition-all border",
              showReviewOnly 
                ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400"
                : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"
            )}
          >
            {showReviewOnly ? "Review Mode" : "All Cards"}
          </button>
        </div>
      </div>

      <div className="relative h-[350px] sm:h-[400px] lg:h-[450px] perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard?.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="w-full h-full"
          >
            <motion.div
              ref={cardRef}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
              className="w-full h-full relative preserve-3d cursor-pointer"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Front */}
              <div className="absolute inset-0 backface-hidden bg-white dark:bg-slate-800 rounded-3xl border-2 border-slate-100 dark:border-slate-700 shadow-xl flex flex-col items-center justify-center p-4 sm:p-8 lg:p-12 text-center overflow-y-auto">
                <div className="absolute top-3 left-3 sm:top-6 sm:left-6 flex items-center gap-2">
                  <ShieldCheck className="text-blue-600" size={12} />
                  <span className="text-[8px] sm:text-[10px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-widest">AML Study Card</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight px-2">
                  {currentCard?.front}
                </h3>
                {currentCard?.imageDescription && (
                  <div className="mt-3 sm:mt-6 p-2 sm:p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 w-full max-w-[95%] mx-auto">
                    <p className="text-[8px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Visual Scenario</p>
                    <p className="text-[9px] sm:text-xs text-slate-500 dark:text-slate-400 italic">
                      {currentCard.imageDescription}
                    </p>
                  </div>
                )}
                {!isCapturing && (
                  <p className="mt-4 sm:mt-8 text-slate-400 text-[9px] sm:text-sm font-medium flex items-center gap-2">
                    <Sparkles size={12} />
                    Tap to reveal answer
                  </p>
                )}
                <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 text-[7px] sm:text-[8px] font-bold text-slate-300 dark:text-slate-700 uppercase tracking-widest">
                  v7.0 Guide
                </div>
              </div>

              {/* Back */}
              <div 
                className="absolute inset-0 backface-hidden bg-blue-600 rounded-3xl shadow-xl flex flex-col items-center justify-center p-4 sm:p-8 lg:p-12 text-center text-white overflow-y-auto"
                style={{ transform: 'rotateY(180deg)' }}
              >
                <div className="absolute top-3 left-3 sm:top-6 sm:left-6 flex items-center gap-2">
                  <ShieldCheck className="text-blue-200" size={12} />
                  <span className="text-[8px] sm:text-[10px] font-black text-blue-200 uppercase tracking-widest">AML Answer</span>
                </div>
                <div className="prose prose-invert max-w-none px-2">
                  <p className="text-sm sm:text-lg lg:text-xl font-medium leading-relaxed">
                    {currentCard?.back}
                  </p>
                </div>
                {!isCapturing && (
                  <p className="mt-4 sm:mt-8 text-blue-200 text-[9px] sm:text-sm font-medium">
                    Rate your recall below
                  </p>
                )}
                <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 text-[7px] sm:text-[8px] font-bold text-blue-400 uppercase tracking-widest">
                  v7.0 Guide
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {isFlipped && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-4 gap-2 sm:gap-3"
        >
          {[
            { q: 1, label: 'Forgot', color: 'bg-red-500' },
            { q: 3, label: 'Hard', color: 'bg-orange-500' },
            { q: 4, label: 'Good', color: 'bg-blue-500' },
            { q: 5, label: 'Easy', color: 'bg-green-500' }
          ].map((btn) => (
            <button
              key={btn.q}
              onClick={() => handleSRSReview(btn.q)}
              className={cn(
                "py-3 sm:py-4 rounded-xl sm:rounded-2xl text-white text-xs sm:text-base font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg",
                btn.color
              )}
            >
              {btn.label}
            </button>
          ))}
        </motion.div>
      )}

      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-4 text-slate-400 dark:text-slate-600 text-sm font-medium">
          <div className="flex items-center gap-1.5">
            <Clock size={14} />
            Next review: {new Date(currentCard?.nextReview).toLocaleDateString()}
          </div>
          <div className="flex items-center gap-1.5">
            <RotateCcw size={14} />
            {currentCard?.repetitions} reviews
          </div>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => {
              setIsFlipped(false);
              setCurrentIndex(prev => (prev > 0 ? prev - 1 : dueCards.length - 1));
            }}
            className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => {
              setIsFlipped(false);
              setCurrentIndex(prev => (prev < dueCards.length - 1 ? prev + 1 : 0));
            }}
            className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Flashcards;
