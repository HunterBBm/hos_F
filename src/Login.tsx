import React, { useState } from 'react';
import './index.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Just console log for now — here you can add login logic
    console.log('Login:', { email, password });
  };

  return (
    <div className="min-h-screen bg-red-500 text-white text-3xl p-10">
  TAILWIND TEST
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <label className="block mb-2 font-semibold" htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="you@example.com"
        />

        <label className="block mb-2 font-semibold" htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="••••••••"
        />

        <button
  className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
>
  Sign In
</button>

      </form>
    </div>
  );
}

