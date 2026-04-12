import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { auth, db, OperationType, handleFirestoreError } from './firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  profile: any | null;
  progress: any | null;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  profile: null,
  progress: null,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<any | null>(null);
  const [progress, setProgress] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (!user) {
        setProfile(null);
        setProgress(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    // Listen to profile
    const profileUnsubscribe = onSnapshot(
      doc(db, 'users', user.uid),
      async (snapshot) => {
        if (snapshot.exists()) {
          setProfile(snapshot.data());
        } else {
          // Initialize profile if it doesn't exist
          const newProfile = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            role: 'user',
            lastActive: new Date().toISOString(),
          };
          try {
            await setDoc(doc(db, 'users', user.uid), newProfile);
          } catch (error) {
            handleFirestoreError(error, OperationType.WRITE, `users/${user.uid}`);
          }
        }
      },
      (error) => handleFirestoreError(error, OperationType.GET, `users/${user.uid}`)
    );

    // Listen to progress
    const progressUnsubscribe = onSnapshot(
      doc(db, 'progress', user.uid),
      async (snapshot) => {
        if (snapshot.exists()) {
          setProgress(snapshot.data());
        } else {
          // Initialize progress
          const newProgress = {
            uid: user.uid,
            completedChapters: [],
            quizScores: {},
            totalPoints: 0,
          };
          try {
            await setDoc(doc(db, 'progress', user.uid), newProgress);
          } catch (error) {
            handleFirestoreError(error, OperationType.WRITE, `progress/${user.uid}`);
          }
        }
        setLoading(false);
      },
      (error) => handleFirestoreError(error, OperationType.GET, `progress/${user.uid}`)
    );

    return () => {
      profileUnsubscribe();
      progressUnsubscribe();
    };
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, loading, profile, progress }}>
      {children}
    </AuthContext.Provider>
  );
};
