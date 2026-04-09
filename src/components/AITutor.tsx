import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Markdown from 'react-markdown';
import { 
  Send, 
  Sparkles, 
  BrainCircuit, 
  User, 
  Bot,
  Loader2,
  Info
} from 'lucide-react';
import { getGeneralResponse, explainComplianceScenario } from '../services/geminiService';
import { ChatMessage } from '../types';
import { cn } from '../lib/utils';

const AITutor: React.FC = () => {
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "Hello! I'm your CAMS AI Tutor. I can help you understand complex AML regulations, explain FATF recommendations, or analyze compliance scenarios. How can I assist you today?",
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isThinkingMode, setIsThinkingMode] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      let responseContent = '';
      if (isThinkingMode) {
        responseContent = await explainComplianceScenario(input);
      } else {
        responseContent = await getGeneralResponse(input);
      }

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: responseContent,
        timestamp: Date.now(),
        isThinking: isThinkingMode
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("AI Tutor Error:", error);
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: "I'm sorry, I encountered an error. Please try again later.",
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] max-w-4xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-xl">
            <Sparkles className="text-white" size={20} />
          </div>
          <div>
            <h3 className="font-bold text-slate-900">CAMS AI Tutor</h3>
            <p className="text-xs text-slate-500">Powered by Gemini AI</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsThinkingMode(!isThinkingMode)}
            className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all",
              isThinkingMode 
                ? "bg-purple-100 text-purple-700 border border-purple-200" 
                : "bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200"
            )}
          >
            <BrainCircuit size={14} />
            {isThinkingMode ? "Thinking Mode: ON" : "Thinking Mode: OFF"}
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "flex gap-4 max-w-[85%]",
              msg.role === 'user' ? "ml-auto flex-row-reverse" : ""
            )}
          >
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
              msg.role === 'user' ? "bg-slate-200" : "bg-blue-100"
            )}>
              {msg.role === 'user' ? <User size={16} className="text-slate-600" /> : <Bot size={16} className="text-blue-600" />}
            </div>
            <div className={cn(
              "p-4 rounded-2xl text-sm leading-relaxed",
              msg.role === 'user' 
                ? "bg-blue-600 text-white rounded-tr-none" 
                : "bg-slate-50 text-slate-700 border border-slate-100 rounded-tl-none"
            )}>
              {msg.isThinking && (
                <div className="flex items-center gap-2 mb-2 text-[10px] font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2 py-0.5 rounded w-fit">
                  <BrainCircuit size={10} />
                  Deep Analysis
                </div>
              )}
              <div className="prose prose-sm max-w-none prose-p:leading-relaxed prose-headings:text-slate-900">
                <Markdown>{msg.content}</Markdown>
              </div>
            </div>
          </motion.div>
        ))}
        {isLoading && (
          <div className="flex gap-4 max-w-[85%]">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
              <Bot size={16} className="text-blue-600" />
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-none border border-slate-100">
              <Loader2 className="animate-spin text-blue-600" size={20} />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-slate-50/50 border-t border-slate-100">
        <div className="flex items-center gap-2 mb-3">
          <Info size={14} className="text-slate-400" />
          <p className="text-[10px] text-slate-500 font-medium">
            {isThinkingMode 
              ? "Thinking mode uses advanced reasoning for complex compliance scenarios." 
              : "General mode is best for quick definitions and study help."}
          </p>
        </div>
        <div className="relative">
          <textarea
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder={isThinkingMode ? "Describe a compliance scenario for deep analysis..." : "Ask a question about CAMS or AML..."}
            className="w-full pl-4 pr-12 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none bg-white"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AITutor;
