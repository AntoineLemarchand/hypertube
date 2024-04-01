'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
    } catch (error) {
    }
  };

  return (
    <main className="bg-gradient-to-br from-gray-950 to-emerald-900 h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-white italic underline decoration-emerald-700 py-6">Hypertube</h1>
      <form className="w-fit p-3 flex flex-col items-center justify-center" onSubmit={handleSubmit}>
        <input
          className="w-80 h-12 mt-4 px-4 border border-gray-500 active:border-gray-50 bg-transparent rounded-lg text-white"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          className="w-80 h-12 mt-4 px-4 border border-gray-500 active:border-gray-50 bg-transparent rounded-lg text-white"
          placeholder="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className="w-80 h-12 mt-4 bg-emerald-700 rounded-lg text-gray-200 hover:bg-emerald-500 hover:text-gray-700 transition-colors">
          Login
        </button>
        <a href="#" className="text-white text-sm underline mt-2">Forgot password?</a>
        <div className="relative flex py-5 items-center w-full text-white border-white">
            <div className="flex-grow border-t"></div>
            <span className="flex-shrink mx-4">Or</span>
            <div className="flex-grow border-t"></div>
        </div>
        <button type="button" className="w-80 h-12 mt-4 bg-blue-700 rounded-lg text-gray-200 hover:bg-blue-500 hover:text-gray-700 transition-colors">
          Sign up
        </button>
        <button type="button" className="w-80 h-12 mt-4 bg-blue-800 rounded-lg text-gray-200 hover:bg-blue-600 transition-colors">
          Facebook
        </button>
        <button type="button" className="w-80 h-12 mt-4 ml-2 bg-red-700 rounded-lg text-gray-200 hover:bg-red-500 transition-colors">
          Google
        </button>
        <button type="button" className="w-80 h-12 mt-4 ml-2 bg-gray-700 rounded-lg text-gray-200 hover:bg-gray-500 transition-colors">
          42 school
        </button>
      </form>
    </main>
  );
}
