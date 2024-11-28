'use client';

import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GlassyBackground } from '@/components/ui/glassy-background';
import { useAuth } from '@/lib/auth-context';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      console.log('User already logged in, redirecting to admin...');
      router.push('/admin');
      router.refresh();
    }
  }, [user, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful:', userCredential.user.email);
      router.push('/admin');
    } catch (error: any) {
      console.error('Login error:', error);
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative">
      <GlassyBackground />
      <Card className="w-[90%] max-w-[400px] bg-white/80 backdrop-blur-xl border border-sky-100 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-gray-800 text-center">Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-700 font-medium">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/50 border-sky-100 text-gray-800 placeholder:text-gray-400 focus:border-sky-200 focus:ring-sky-200/50"
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-700 font-medium">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/50 border-sky-100 text-gray-800 placeholder:text-gray-400 focus:border-sky-200 focus:ring-sky-200/50"
                required
                disabled={loading}
              />
            </div>
            {error && (
              <div className="bg-red-50 text-red-500 text-sm p-3 rounded-lg border border-red-100">
                {error}
              </div>
            )}
            <Button 
              type="submit" 
              className="w-full bg-sky-500 hover:bg-sky-600 text-white transition-all duration-300"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
} 