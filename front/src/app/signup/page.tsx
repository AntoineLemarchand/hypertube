'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
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
          <label className="block text-white text-sm font-bold mb-2" htmlFor="firstname">
            First name
          </label>
          <input
            className="h-12 mt-1 px-4 border border-gray-500 active:border-gray-50 bg-transparent rounded-lg text-white w-80"
            id="firstname"
            type="text"
            placeholder="First name"
            value={formData.firstName}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="lastname">
            Last name
          </label>
          <input
            className="h-12 mt-1 px-4 border border-gray-500 active:border-gray-50 bg-transparent rounded-lg text-white w-80"
            id="lastname"
            type="text"
            placeholder="Last name"
            value={formData.lastName}
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
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="confirm-password">
            Confirm password
          </label>
          <input
            className="h-12 mt-1 px-4 border border-gray-500 active:border-gray-50 bg-transparent rounded-lg text-white w-80"
            id="confirm-password"
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
          />
        </div>
        <button type="submit" className="w-80 h-12 mt-4 bg-emerald-700 rounded-lg text-gray-200 hover:bg-emerald-500 hover:text-gray-700 transition-colors">
          Sign up
        </button>
      </form>
    </main>
  );
}
