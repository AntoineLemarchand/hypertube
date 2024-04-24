import React from 'react';

export default function Header() {
  return (
    <header className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-700 m-1">
      <h1 className="text-2xl font-bold text-white italic underline decoration-emerald-700">Hypertube</h1>
      <nav className="flex items-center space-x-4">
        <a href="#" className="text-white">Home</a>
        <a href="#" className="text-white">Library</a>
        <a href="#" className="text-white">Profile</a>
        <a href="#" className="text-white">Logout</a>
      </nav>
    </header>
  );
}
