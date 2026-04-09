import React from 'react';
import { motion } from 'motion/react';
import Markdown from 'react-markdown';
import { 
  Newspaper, 
  RefreshCcw, 
  ExternalLink,
  Search,
  Loader2,
  Globe,
  Bookmark,
  BookmarkCheck,
  CheckCircle2
} from 'lucide-react';
import { getAMLNews, getBFIUCirculars } from '../services/geminiService';
import { SavedItem } from '../types';

import { cn } from '../lib/utils';

const NewsFeed: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'global' | 'bfiu'>('global');
  const [news, setNews] = React.useState<string>('');
  const [bfiuCirculars, setBfiuCirculars] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [savedItems, setSavedItems] = React.useState<SavedItem[]>(() => {
    const saved = localStorage.getItem('cams_news_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  const fetchContent = async (tab: 'global' | 'bfiu') => {
    setIsLoading(true);
    try {
      if (tab === 'global') {
        const response = await getAMLNews();
        setNews(response);
      } else {
        const response = await getBFIUCirculars();
        setBfiuCirculars(response);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      if (tab === 'global') setNews("Failed to load latest news. Please try again.");
      else setBfiuCirculars("Failed to load BFIU circulars. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (activeTab === 'global' && !news) fetchContent('global');
    if (activeTab === 'bfiu' && !bfiuCirculars) fetchContent('bfiu');
  }, [activeTab]);

  React.useEffect(() => {
    localStorage.setItem('cams_news_bookmarks', JSON.stringify(savedItems));
  }, [savedItems]);

  const toggleBookmark = (title: string, content: string) => {
    const id = btoa(title).substring(0, 10); // Simple ID generation
    const isSaved = savedItems.some(item => item.title === title);
    
    if (isSaved) {
      setSavedItems(prev => prev.filter(item => item.title !== title));
    } else {
      const newItem: SavedItem = {
        id,
        title,
        content,
        type: activeTab === 'global' ? 'news' : 'bfiu',
        date: new Date().toISOString()
      };
      setSavedItems(prev => [...prev, newItem]);
    }
  };

  const parseItems = (markdown: string) => {
    if (!markdown) return [];
    return markdown.split('---').filter(item => item.trim().length > 10).map(item => {
      const lines = item.trim().split('\n');
      let title = lines[0].replace(/^#+\s*/, '').trim();
      let content = lines.slice(1).join('\n').trim();
      
      // Fallback if formatting is weird
      if (!title && content) {
        title = content.split('\n')[0].substring(0, 50) + '...';
      }
      
      return { title, content };
    });
  };

  const currentMarkdown = activeTab === 'global' ? news : bfiuCirculars;
  const items = parseItems(currentMarkdown);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Regulatory Updates</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Real-time intelligence grounded in Google Search data.</p>
        </div>
        <button 
          onClick={() => fetchContent(activeTab)}
          disabled={isLoading}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all disabled:opacity-50"
        >
          <RefreshCcw className={cn(isLoading && "animate-spin")} size={18} />
          Refresh
        </button>
      </div>

      <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl w-fit">
        <button
          onClick={() => setActiveTab('global')}
          className={cn(
            "px-6 py-2 text-sm font-bold rounded-lg transition-all",
            activeTab === 'global' ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
          )}
        >
          Global AML News
        </button>
        <button
          onClick={() => setActiveTab('bfiu')}
          className={cn(
            "px-6 py-2 text-sm font-bold rounded-lg transition-all",
            activeTab === 'bfiu' ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
          )}
        >
          BFIU Circulars
        </button>
      </div>

      <div className="space-y-6">
        {isLoading ? (
          <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 p-20 flex flex-col items-center justify-center text-slate-400">
            <Loader2 className="animate-spin mb-4" size={40} />
            <p className="font-medium">Searching for latest {activeTab === 'global' ? 'AML updates' : 'BFIU circulars'}...</p>
          </div>
        ) : items.length > 0 ? (
          items.map((item, index) => {
            const isSaved = savedItems.some(s => s.title === item.title);
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden"
              >
                <div className="p-4 border-b border-slate-100 dark:border-slate-700 bg-blue-50/50 dark:bg-blue-900/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-600 rounded-lg">
                      <Globe className="text-white" size={18} />
                    </div>
                    <span className="text-xs font-bold text-blue-900 dark:text-blue-200 uppercase tracking-wider">
                      {activeTab === 'global' ? 'Global AML Update' : 'BFIU Circular'}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleBookmark(item.title, item.content)}
                    className={cn(
                      "p-2 rounded-lg transition-all",
                      isSaved 
                        ? "text-blue-600 bg-blue-100 dark:bg-blue-900/40" 
                        : "text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    )}
                  >
                    {isSaved ? <BookmarkCheck size={20} fill="currentColor" /> : <Bookmark size={20} />}
                  </button>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
                  <div className="prose prose-slate dark:prose-invert max-w-none prose-p:text-slate-600 dark:prose-p:text-slate-300">
                    <Markdown>{item.content}</Markdown>
                  </div>
                </div>
              </motion.div>
            );
          })
        ) : (
          <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 p-20 flex flex-col items-center justify-center text-slate-400">
            <Newspaper size={40} className="mb-4" />
            <p className="font-medium">No updates found. Try refreshing.</p>
          </div>
        )}
      </div>

      <div className="bg-slate-900 text-white p-8 rounded-3xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-slate-800 rounded-2xl">
            <Search className="text-blue-400" size={24} />
          </div>
          <h3 className="text-xl font-bold">Why this news matters?</h3>
        </div>
        <p className="text-slate-400 leading-relaxed">
          The CAMS exam frequently tests your knowledge of the latest regulatory changes and international standards. 
          Staying updated with FATF, FinCEN, and regional AML directives is crucial for both the exam and your professional career.
        </p>
      </div>
    </div>
  );
};

export default NewsFeed;
