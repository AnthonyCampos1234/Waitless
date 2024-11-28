import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    const docRef = await addDoc(collection(db, 'interest_submissions'), {
      name: data.name,
      email: data.email,
      university: data.university,
      role: data.role,
      submitted_at: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, id: docRef.id });
  } catch (error) {
    console.error('Error saving interest:', error);
    return NextResponse.json({ error: 'Failed to save interest' }, { status: 500 });
  }
} 