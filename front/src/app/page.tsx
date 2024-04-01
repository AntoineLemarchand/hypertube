'use client';
import { redirect } from 'next/navigation';

export default function Home() {
  // redirect to login page if not logged in
  const isLoggedIn = false;
  if (!isLoggedIn) {
    redirect('/login')
  }
  return (
    <h1>:)</h1>
  );
}
