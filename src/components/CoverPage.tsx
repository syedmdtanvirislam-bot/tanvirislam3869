import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, BookOpen, GraduationCap, Sparkles, ShieldAlert } from 'lucide-react';

interface CoverPageProps {
  onEnter: () => void;
}

const CoverPage: React.FC<CoverPageProps> = ({ onEnter }) => {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden selection:bg-blue-500 selection:text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl w-full px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest mb-6">
              <Sparkles size={16} />
              The Ultimate CAMS Preparation Experience
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-4">
              AML <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-3xl md:text-6xl">
                DEVELOPED BY TANVIR
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Master Anti-Money Laundering compliance with AI-powered tutoring, 
              deep-thinking scenario analysis, and real-time regulatory intelligence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <button
              onClick={onEnter}
              className="group relative px-8 py-4 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-2xl shadow-blue-500/40 hover:bg-blue-500 transition-all flex items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">GO TO DASHBOARD</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
            
            <button className="px-8 py-4 bg-slate-800 text-white rounded-2xl font-bold text-lg border border-slate-700 hover:bg-slate-700 transition-all">
              LEARN MORE
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-slate-800 pt-12"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-slate-800 rounded-xl text-blue-400">
                <GraduationCap size={24} />
              </div>
              <p className="text-white font-bold">Expert Led</p>
              <p className="text-xs text-slate-500">Developed by Tanvir</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-slate-800 rounded-xl text-purple-400">
                <Sparkles size={24} />
              </div>
              <p className="text-white font-bold">AI Powered</p>
              <p className="text-xs text-slate-500">Gemini 3.1 Pro</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-slate-800 rounded-xl text-green-400">
                <ShieldCheck size={24} />
              </div>
              <p className="text-white font-bold">Compliance</p>
              <p className="text-xs text-slate-500">FATF Standards</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-slate-800 rounded-xl text-red-400">
                <ShieldAlert size={24} />
              </div>
              <p className="text-white font-bold">Real-time</p>
              <p className="text-xs text-slate-500">News Grounding</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-slate-500 font-bold tracking-widest text-[10px] uppercase">
        <ShieldCheck size={14} className="text-blue-500" />
        Mastering AML Compliance Since 2026
      </div>
    </div>
  );
};

export default CoverPage;
