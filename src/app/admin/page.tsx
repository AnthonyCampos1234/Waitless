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

interface Submission {
  id: string;
  name: string;
  email: string;
  university: string;
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
          <div className="bg-white/80 backdrop-blur-xl border border-sky-100 rounded-2xl p-8 max-w-md mx-auto">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
              {authLoading ? "Checking authentication..." : "Loading submissions..."}
            </h1>
            <div className="animate-pulse flex justify-center">
              <div className="h-2 w-24 bg-sky-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen relative">
        <GlassyBackground />
        <div className="container mx-auto py-20 text-center">
          <div className="bg-white/80 backdrop-blur-xl border border-red-100 rounded-2xl p-8 max-w-md mx-auto">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Error</h1>
            <p className="text-red-500 mb-6">{error}</p>
            <Button 
              onClick={handleLogout}
              className="bg-sky-500 hover:bg-sky-600 text-white"
            >
              Logout and Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen relative">
      <GlassyBackground />
      <div className="container mx-auto py-10 px-4">
        <div className="bg-white/80 backdrop-blur-xl border border-sky-100 rounded-2xl p-8 mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">Interest Submissions</h1>
            <Button 
              onClick={handleLogout}
              className="bg-sky-500 hover:bg-sky-600 text-white"
            >
              Logout
            </Button>
          </div>
        </div>

        {submissions.length === 0 ? (
          <div className="bg-white/80 backdrop-blur-xl border border-sky-100 rounded-2xl p-8 text-center">
            <p className="text-gray-600">No submissions yet.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {submissions.map((submission) => (
              <Card key={submission.id} className="bg-white/80 backdrop-blur-xl border border-sky-100 hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-gray-800">{submission.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-medium">Email:</span> {submission.email}</p>
                    <p><span className="font-medium">University:</span> {submission.university}</p>
                    <p><span className="font-medium">Role:</span> {submission.role}</p>
                    <p><span className="font-medium">Submitted:</span> {new Date(submission.submitted_at).toLocaleString()}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  );
} 