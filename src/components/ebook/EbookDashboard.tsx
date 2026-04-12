import React from 'react';
import { Book, Search, Lock, Unlock, PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { db } from '../../firebase';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { sampleBooks } from '../../data/mockData';

interface BookData {
  id: string;
  title: string;
  author?: string;
  description?: string;
  coverUrl?: string;
  fileURL: string;
  isFree: boolean;
  price?: number;
  category?: string;
}

interface EbookDashboardProps {
  onSelectBook: (book: BookData) => void;
}

const EbookDashboard: React.FC<EbookDashboardProps> = ({ onSelectBook }) => {
  const [books, setBooks] = React.useState<BookData[]>(sampleBooks);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const q = query(collection(db, 'books'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const booksData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as BookData[];
        setBooks(booksData);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Digital Library
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Access your collection of AML/CFT ebooks and resources.
          </p>
        </div>

        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search books or authors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredBooks.map((book) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[3/4] relative overflow-hidden bg-slate-100 dark:bg-slate-900">
              {book.coverUrl ? (
                <img 
                  src={book.coverUrl} 
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Book size={64} className="text-slate-300 dark:text-slate-700" />
                </div>
              )}
              
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button 
                  onClick={() => onSelectBook(book)}
                  className="p-4 bg-blue-600 text-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform"
                >
                  <PlayCircle size={32} />
                </button>
              </div>

              <div className="absolute top-4 right-4">
                {book.isFree ? (
                  <span className="px-3 py-1 bg-green-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    Free
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg flex items-center gap-1">
                    <Lock size={10} /> Premium
                  </span>
                )}
              </div>
            </div>

            <div className="p-6">
              <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
                {book.category || 'General'}
              </p>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-1 mb-1">
                {book.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                {book.author || 'Unknown Author'}
              </p>
              
              <button 
                onClick={() => onSelectBook(book)}
                className="w-full py-3 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl text-sm font-bold hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                Read Now
                <Unlock size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="text-center py-20">
          <Book className="mx-auto text-slate-200 dark:text-slate-700 mb-4" size={64} />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">No books found</h3>
          <p className="text-slate-500 dark:text-slate-400">Try a different search term.</p>
        </div>
      )}
    </div>
  );
};

export default EbookDashboard;
