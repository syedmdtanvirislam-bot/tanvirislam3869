/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import StudyGuide from './components/StudyGuide';
import Quiz from './components/Quiz';
import AITutor from './components/AITutor';
import NewsFeed from './components/NewsFeed';
import DocumentAnalyzer from './components/DocumentAnalyzer';
import CoverPage from './components/CoverPage';
import Settings from './components/Settings';

export default function App() {
  const [showCover, setShowCover] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState('dashboard');

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const isSharedLink = typeof window !== 'undefined' && window.location.hostname.includes('-pre-');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'study':
        return <StudyGuide />;
      case 'quiz':
        return <Quiz />;
      case 'tutor':
        return isSharedLink ? <Dashboard /> : <AITutor />;
      case 'analyzer':
        return <DocumentAnalyzer />;
      case 'news':
        return <NewsFeed />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  if (showCover) {
    return <CoverPage onEnter={() => setShowCover(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex transition-colors duration-300">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 lg:ml-64 p-4 lg:p-8 pt-20 lg:pt-8 overflow-y-auto h-screen">
        <div className="max-w-7xl mx-auto pb-20 lg:pb-0">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

