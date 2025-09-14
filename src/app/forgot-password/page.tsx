'use client';

import { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Forgot password form submitted:', { email });
    alert('Password reset email sent! Check console for details.');
  };

  return (
    <div className="max-w-md mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Forgot Password</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button 
          type="submit"
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
        >
          Reset Password
        </button>
      </form>
      
      <p className="text-center mt-6">
        <a href="/login" className="text-blue-500 hover:underline">Back to Login</a>
      </p>
    </div>
  );
}
