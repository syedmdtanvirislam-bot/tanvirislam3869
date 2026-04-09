export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'AML Regulations' | 'Financial Crimes' | 'Compliance Programs' | 'International Standards';
}

export interface StudyTopic {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  isThinking?: boolean;
  isSearchGrounded?: boolean;
}

export interface UserProgress {
  overallCompletion: number;
  topicsCompleted: number;
  quizzesTaken: number;
  averageScore: number;
  lastStudyDate: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  scenario: string;
  risks: string[];
  recommendedActions: string[];
}

export interface QuizSet {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

export interface NewsArticle {
  title: string;
  snippet: string;
  url: string;
  source: string;
  date: string;
}

export interface SavedItem {
  id: string;
  title: string;
  content: string;
  type: 'news' | 'bfiu';
  date: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  imageDescription?: string;
  topicId?: string;
  nextReview: number; // timestamp
  interval: number; // in days
  easeFactor: number;
  repetitions: number;
}
