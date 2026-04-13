import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Calendar as CalendarIcon
} from 'lucide-react';

import { 
  ResponsiveContainer, 
  RadialBarChart, 
  RadialBar, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip,
  Cell
} from 'recharts';

import { quizSets, studyTopics } from '../data/mockData';
import { cn } from '../lib/utils';
import { useAuth } from '../AuthContext';

const Dashboard: React.FC = () => {
  const { user, progress } = useAuth();
  const [isDarkMode, setIsDarkMode] = React.useState(() => 
    document.documentElement.classList.contains('dark')
  );
  const [examDate, setExamDate] = React.useState<string>(() => 
    localStorage.getItem('examDate') || ''
  );
  const [showDatePicker, setShowDatePicker] = React.useState(false);

  const calculateDaysRemaining = () => {
    if (!examDate) return null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const exam = new Date(examDate);
    exam.setHours(0, 0, 0, 0);
    const diffTime = exam.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays < 0) return 0;
    return diffDays;
  };

  const daysRemaining = calculateDaysRemaining();

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setExamDate(newDate);
    localStorage.setItem('examDate', newDate);
    setShowDatePicker(false);
  };

  React.useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDarkMode(document.documentElement.classList.contains('dark'));
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const totalQuestions = quizSets.reduce((acc, set) => acc + set.questions.length, 0);
  
  const completionPercentage = progress?.completedChapters 
    ? Math.round((progress.completedChapters.length / studyTopics.length) * 100) 
    : 0;

  const progressData = [
    { name: 'Progress', value: completionPercentage || 1, fill: '#3b82f6' }
  ];

  const performanceData = [
    { day: 'Day 1', score: 40 },
    { day: 'Day 2', score: 70 },
    { day: 'Day 3', score: 55 },
    { day: 'Day 4', score: 90 },
    { day: 'Day 5', score: 65 },
    { day: 'Day 6', score: 85 },
    { day: 'Day 7', score: 75 },
  ];

  const stats = [
    { label: 'Course Progress', value: `${completionPercentage}%`, icon: TrendingUp, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Practice Questions', value: `${totalQuestions}`, icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Quiz Sets', value: `${quizSets.length}`, icon: GraduationCap, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Study Topics', value: `${studyTopics.length}`, icon: BookOpen, color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            AML Dashboard
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">Track your CAMS exam preparation progress and latest updates.</p>
        </div>
        <div className="relative group">
          <div 
            onClick={() => setShowDatePicker(!showDatePicker)}
            className="bg-blue-600 text-white px-6 py-4 rounded-2xl shadow-xl shadow-blue-500/20 flex items-center gap-4 self-start md:self-center cursor-pointer hover:bg-blue-700 transition-colors"
          >
            <div className="p-2 bg-white/20 rounded-lg">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-blue-100 tracking-widest">Exam Countdown</p>
              <p className="text-lg font-bold">
                {daysRemaining !== null 
                  ? `${daysRemaining} Days Remaining` 
                  : 'Set Exam Date'}
              </p>
            </div>
            <CalendarIcon size={18} className="text-blue-200 ml-2" />
          </div>

          {showDatePicker && (
            <div className="absolute top-full right-0 mt-2 z-50 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 w-64">
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Select Exam Date
              </label>
              <input 
                type="date" 
                value={examDate}
                onChange={handleDateChange}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                onClick={() => setShowDatePicker(false)}
                className="mt-3 w-full py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700"
            >
              <div className="flex items-center justify-between">
                <div className={cn(stat.bg, "dark:bg-slate-700/50 p-3 rounded-xl")}>
                  <stat.icon className={stat.color} size={24} />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">{stat.label}</p>
                <p className="text-3xl font-black text-slate-900 dark:text-white mt-1">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-6 left-6 lg:left-8">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Overall Mastery</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">CAMS Prep Status</p>
          </div>
          <div className="w-full h-48 mt-8">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart 
                cx="50%" 
                cy="50%" 
                innerRadius="60%" 
                outerRadius="100%" 
                barSize={10} 
                data={progressData}
                startAngle={180}
                endAngle={-180}
              >
                <RadialBar
                  background={{ fill: isDarkMode ? '#1e293b' : '#f1f5f9' }}
                  dataKey="value"
                  cornerRadius={30}
                />
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center mt-4">
              <p className="text-4xl font-black text-slate-900 dark:text-white">{completionPercentage}%</p>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Complete</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Featured Study Topics</h3>
            <BookOpen className="text-slate-400" size={20} />
          </div>
          <div className="space-y-4">
            {studyTopics.slice(0, 3).map((topic) => (
              <div key={topic.id} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer group border border-transparent hover:border-blue-100 dark:hover:border-blue-900">
                <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">{topic.title}</span>
                <ArrowRight className="text-slate-400 group-hover:text-blue-600 transition-colors" size={18} />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 lg:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Practice Performance</h3>
            <GraduationCap className="text-slate-400" size={20} />
          </div>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#94a3b8' }} 
                />
                <Tooltip 
                  cursor={{ fill: '#f1f5f9' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar 
                  dataKey="score" 
                  fill="#3b82f6" 
                  radius={[4, 4, 0, 0]}
                  barSize={30}
                >
                  {performanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.score > 80 ? '#10b981' : '#3b82f6'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
