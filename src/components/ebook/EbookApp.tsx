import React from 'react';
import { useAuth } from '../../AuthContext';
import EbookLogin from './EbookLogin';
import EbookDashboard from './EbookDashboard';
import EbookReader from './EbookReader';

const EbookApp: React.FC = () => {
  const { user, loading } = useAuth();
  const [selectedBook, setSelectedBook] = React.useState<any | null>(null);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return <EbookLogin />;
  }

  if (selectedBook) {
    return (
      <EbookReader 
        book={selectedBook} 
        onBack={() => setSelectedBook(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <EbookDashboard onSelectBook={setSelectedBook} />
    </div>
  );
};

export default EbookApp;
