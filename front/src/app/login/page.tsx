'use client';

import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="h-12 mt-1 px-4 border border-gray-500 active:border-gray-50 bg-transparent rounded-lg text-white w-80"
            id="username"
            type="text"
            placeholder="Username"
            value={formData.username}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="h-12 mt-1 px-4 border border-gray-500 active:border-gray-50 bg-transparent rounded-lg text-white w-80"
            id="password"
            type="password"
            placeholder="Password"
            value={formData.password}
          />
        </div>
        <button type="submit" className="w-80 h-12 mt-4 bg-emerald-700 rounded-lg text-gray-200 hover:bg-emerald-500 hover:text-gray-700 transition-colors">
          Login
        </button>
        <a href="#" className="text-white text-sm underline mt-2">Forgot password?</a>
        <div className="relative flex py-5 items-center w-full text-white border-white">
            <div className="flex-grow border-t"></div>
            <span className="flex-shrink mx-4">Or</span>
            <div className="flex-grow border-t"></div>
        </div>
        <Link href="/signup" className="flex justify-center items-center w-80 h-12 mt-4 bg-blue-700 rounded-lg text-gray-200 hover:bg-blue-500 hover:text-gray-700 transition-colors">
          Sign up
        </Link>
        <div className="w-full flex justify-evenly">
            <button type="button" className="w-12 h-12 mt-4 bg-blue-800 rounded-lg text-gray-200 hover:bg-blue-600 transition-colors">
                <FontAwesomeIcon icon={faFacebookF}/>
            </button>
            <button type="button" className="w-12 h-12 mt-4 ml-2 bg-red-700 rounded-lg text-gray-200 hover:bg-red-500 transition-colors">
                <FontAwesomeIcon icon={faGoogle}/>
            </button>
            <button type="button" className="w-12 h-12 mt-4 ml-2 bg-gray-700 rounded-lg text-gray-200 hover:bg-gray-500 transition-colors flex justify-center items-center">
                <Image src="/42_Logo.svg" alt="42 logo" width={24} height={24} />
            </button>
        </div>
      </form>
    </main>
  );
}
