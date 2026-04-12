import React from 'react';
import { ArrowLeft, Maximize2, Minimize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface EbookReaderProps {
  book: {
    title: string;
    fileURL: string;
  };
  onBack: () => void;
}

const EbookReader: React.FC<EbookReaderProps> = ({ book, onBack }) => {
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-slate-700 rounded-full transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-lg font-bold truncate max-w-xs md:max-w-md">
            {book.title}
          </h1>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleFullscreen}
            className="p-2 hover:bg-slate-700 rounded-full transition-colors"
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          >
            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
          </button>
        </div>
      </div>

      {/* PDF Viewer Container */}
      <div className="flex-1 relative bg-slate-950 overflow-hidden">
        <iframe
          src={book.fileURL}
          className="w-full h-full border-none"
          title={book.title}
        />
      </div>

      {/* Footer / Controls (Optional for native PDF viewer) */}
      <div className="p-4 bg-slate-800 border-t border-slate-700 flex justify-center items-center gap-8">
        <p className="text-xs text-slate-400">
          Using native browser PDF viewer. For best experience, use a desktop browser.
        </p>
      </div>
    </div>
  );
};

export default EbookReader;
