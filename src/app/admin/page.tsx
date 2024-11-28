'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { db, auth } from '@/lib/firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { signOut } from 'firebase/auth';
import { useAuth } from '@/lib/auth-context';
import { GlassyBackground } from '@/components/ui/glassy-background';
import { motion } from "framer-motion";
import { LogOut, Users, Clock } from 'lucide-react';

interface Submission {
  id: string;
  name: string;
  email: string;
  role: string;
  submitted_at: string;
}

export default function AdminPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();

  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      console.log('No user found, redirecting to login...');
      router.push('/login');
      return;
    }

    console.log('User authenticated, fetching submissions...');
    setLoading(true);
    setError(null);

    try {
      const q = query(
        collection(db, 'interest_submissions'),
        orderBy('submitted_at', 'desc')
      );

      const unsubscribe = onSnapshot(
        q, 
        (querySnapshot) => {
          const submissionsData: Submission[] = [];
          querySnapshot.forEach((doc) => {
            submissionsData.push({
              id: doc.id,
              ...doc.data() as Omit<Submission, 'id'>
            });
          });
          setSubmissions(submissionsData);
          setLoading(false);
        },
        (error) => {
          console.error('Detailed error:', error);
          setError('Failed to load submissions. Please try again later.');
          setLoading(false);
        }
      );

      return () => unsubscribe();
    } catch (error) {
      console.error('Error setting up listener:', error);
      setError('Failed to initialize. Please try again later.');
      setLoading(false);
    }
  }, [user, router, authLoading]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen relative">
        <GlassyBackground />
        <div className="container mx-auto py-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-xl border border-sky-100 rounded-2xl p-8 max-w-md mx-auto"
          >
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
              {authLoading ? "Checking authentication..." : "Loading submissions..."}
            </h1>
            <div className="animate-pulse flex justify-center">
              <div className="h-2 w-24 bg-sky-200 rounded"></div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen relative">
        <GlassyBackground />
        <div className="container mx-auto py-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-xl border border-red-100 rounded-2xl p-8 max-w-md mx-auto"
          >
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Error</h1>
            <p className="text-red-500 mb-6">{error}</p>
            <Button 
              onClick={handleLogout}
              className="bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white"
            >
              Logout and Try Again
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen relative">
      <GlassyBackground />
      <div className="container mx-auto py-10 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-xl border border-sky-100 rounded-2xl p-8 mb-8 shadow-lg"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-sky-50 rounded-xl">
                <Users className="w-6 h-6 text-sky-500" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-800">Interest Submissions</h1>
                <p className="text-gray-600">Manage your waitlist submissions</p>
              </div>
            </div>
            <Button 
              onClick={handleLogout}
              className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </motion.div>

        <div className="grid gap-4">
          {submissions.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/80 backdrop-blur-xl border border-sky-100 rounded-2xl p-8 text-center"
            >
              <p className="text-gray-600">No submissions yet.</p>
            </motion.div>
          ) : (
            submissions.map((submission, index) => (
              <motion.div
                key={submission.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/80 backdrop-blur-xl border border-sky-100 hover:shadow-lg transition-all group">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-2 bg-sky-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-5 h-5 text-sky-500" />
                    </div>
                    <div>
                      <CardTitle className="text-gray-800">{submission.name}</CardTitle>
                      <p className="text-sm text-gray-500">
                        Submitted {new Date(submission.submitted_at).toLocaleString()}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-gray-600">
                      <p><span className="font-medium">Email:</span> {submission.email}</p>
                      <p><span className="font-medium">Role:</span> {submission.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </main>
  );
} 