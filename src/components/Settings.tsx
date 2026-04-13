import React from 'react';
import { motion } from 'motion/react';
import { 
  Moon, 
  Sun, 
  Bell, 
  Shield, 
  Globe, 
  Database,
  CheckCircle2
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useAuth } from '../AuthContext';

const Settings: React.FC = () => {
  const { user, profile } = useAuth();
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  const isSharedLink = typeof window !== 'undefined' && window.location.hostname.includes('-pre-');

  const [notifications, setNotifications] = React.useState({
    examReminders: true,
    studyTips: true,
    newsUpdates: false,
    aiTutorAlerts: true
  });

  const [saveStatus, setSaveStatus] = React.useState<'idle' | 'saving' | 'saved'>('idle');

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const handleToggleNotification = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    setSaveStatus('saving');
    setTimeout(() => {
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Settings</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2">Manage your account preferences and application settings.</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saveStatus !== 'idle'}
          className={cn(
            "px-6 py-2.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2",
            saveStatus === 'saved' 
              ? "bg-green-100 text-green-700 border border-green-200"
              : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20 disabled:opacity-50"
          )}
        >
          {saveStatus === 'saving' && <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />}
          {saveStatus === 'saved' && <CheckCircle2 size={18} />}
          {saveStatus === 'idle' ? 'Save Changes' : saveStatus === 'saving' ? 'Saving...' : 'Changes Saved'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar Navigation for Settings */}
        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-hide">
          {[
            { id: 'general', label: 'General', icon: Globe },
            { id: 'notifications', label: 'Notifications', icon: Bell },
            { id: 'security', label: 'Security', icon: Shield },
            { id: 'data', label: 'Data & Privacy', icon: Database },
          ].map((item) => (
            <button
              key={item.id}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-bold whitespace-nowrap",
                item.id === 'general' 
                  ? "bg-white dark:bg-slate-800 text-blue-600 shadow-sm border border-slate-100 dark:border-slate-700" 
                  : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50"
              )}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="md:col-span-2 space-y-6">
          {/* Appearance Section */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-50 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sun size={18} className="text-amber-500" />
                Appearance
              </h3>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Dark Mode</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Switch between light and dark themes.</p>
                </div>
                <button
                  onClick={toggleDarkMode}
                  className={cn(
                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none",
                    isDarkMode ? "bg-blue-600" : "bg-slate-200"
                  )}
                >
                  <span
                    className={cn(
                      "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                      isDarkMode ? "translate-x-6" : "translate-x-1"
                    )}
                  />
                </button>
              </div>
            </div>
          </section>

          {/* Notifications Section */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-50 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Bell size={18} className="text-blue-500" />
                Notifications
              </h3>
            </div>
            <div className="p-6 space-y-6">
              {[
                { id: 'examReminders', label: 'Exam Reminders', desc: 'Get notified about your upcoming CAMS exam date.' },
                { id: 'studyTips', label: 'Daily Study Tips', desc: 'Receive daily AML compliance tips and study advice.' },
                { id: 'newsUpdates', label: 'AML News Alerts', desc: 'Stay updated with the latest regulatory news.' },
                { id: 'aiTutorAlerts', label: 'AI Tutor Responses', desc: 'Get notified when the AI Tutor completes deep analysis.' },
              ].filter(item => !(item.id === 'aiTutorAlerts' && isSharedLink)).map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{item.label}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                  <button
                    onClick={() => handleToggleNotification(item.id as keyof typeof notifications)}
                    className={cn(
                      "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none",
                      notifications[item.id as keyof typeof notifications] ? "bg-blue-600" : "bg-slate-200"
                    )}
                  >
                    <span
                      className={cn(
                        "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                        notifications[item.id as keyof typeof notifications] ? "translate-x-6" : "translate-x-1"
                      )}
                    />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Language Section */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-50 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Globe size={18} className="text-green-500" />
                Language & Region
              </h3>
            </div>
            <div className="p-6">
              <select className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                <option value="en">English (United States)</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
              </select>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;
