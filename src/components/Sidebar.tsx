import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  BookOpen, 
  GraduationCap, 
  MessageSquare, 
  Newspaper, 
  Settings,
  ShieldCheck,
  Menu,
  X,
  LogOut,
  LogIn
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useAuth } from '../AuthContext';
import { loginWithGoogle, logout } from '../firebase';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const { user, profile } = useAuth();
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSharedLink = typeof window !== 'undefined' && window.location.hostname.includes('-pre-');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'study', label: 'Study Guide', icon: BookOpen },
    { id: 'ebooks', label: 'Ebooks', icon: ShieldCheck },
    { id: 'quiz', label: 'Practice Quiz', icon: GraduationCap },
    { id: 'tutor', label: 'AI Tutor', icon: MessageSquare },
    { id: 'news', label: 'AML News', icon: Newspaper },
  ].filter(item => !(item.id === 'tutor' && isSharedLink));

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setActiveTab('dashboard')}
        >
          <div className="p-1.5 bg-blue-600 rounded-lg">
            <LayoutDashboard className="text-white" size={18} />
          </div>
          <span className="font-bold text-slate-900 dark:text-white">Dashboard</span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 bg-slate-900 text-white transition-transform duration-300 ease-in-out lg:translate-x-0",
        !isOpen && "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          <div className="p-8 flex items-center gap-3">
            <div className="p-2.5 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/20">
              <ShieldCheck className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tighter">AML</h1>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Developed by Tanvir</p>
            </div>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (window.innerWidth < 1024) setIsOpen(false);
                }}
                className={cn(
                  "flex items-center gap-3.5 w-full px-4 py-3.5 rounded-xl transition-all duration-200 group",
                  activeTab === item.id 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                )}
              >
                <item.icon size={20} className={cn(
                  "transition-transform duration-200",
                  activeTab === item.id ? "scale-110" : "group-hover:scale-110 text-slate-400"
                )} />
                <span className="font-bold text-sm tracking-tight">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="p-6 border-t border-slate-800/50 space-y-2">
            <button 
              onClick={() => {
                setActiveTab('settings');
                if (window.innerWidth < 1024) setIsOpen(false);
              }}
              className={cn(
                "flex items-center gap-3.5 w-full px-4 py-3.5 rounded-xl transition-all duration-200 group",
                activeTab === 'settings' 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              )}
            >
              <Settings size={20} className={cn(
                "transition-transform duration-200",
                activeTab === 'settings' ? "scale-110" : "group-hover:scale-110 text-slate-400"
              )} />
              <span className="font-bold text-sm tracking-tight">Settings</span>
            </button>

            {user ? (
              <button 
                onClick={() => logout()}
                className="flex items-center gap-3.5 w-full px-4 py-3.5 rounded-xl text-red-400 hover:bg-red-500/10 transition-all duration-200 group"
              >
                <LogOut size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-bold text-sm tracking-tight">Logout</span>
              </button>
            ) : (
              <button 
                onClick={() => loginWithGoogle()}
                className="flex items-center gap-3.5 w-full px-4 py-3.5 rounded-xl text-blue-400 hover:bg-blue-500/10 transition-all duration-200 group"
              >
                <LogIn size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-bold text-sm tracking-tight">Sign In</span>
              </button>
            )}

            {user && (
              <div className="flex items-center gap-3 px-4 py-2 mt-2">
                <img 
                  src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}`} 
                  alt="Profile" 
                  className="w-8 h-8 rounded-full border border-slate-700"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-white truncate">{user.displayName}</p>
                  <p className="text-[10px] text-slate-500 truncate">{user.email}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
