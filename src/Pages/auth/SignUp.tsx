import React, { useState } from 'react';
import { Mail, Lock, User, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../../components/auth/AuthLayout';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Add your signup logic here
    setTimeout(() => setLoading(false), 1500); // Simulated delay
  };

  return (
    <AuthLayout 
      title="Begin Your Journey" 
      subtitle="Create an account to start planning your special day"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div className="relative">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Full Name
          </label>
          <div className="relative">
            <User 
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
              size={20} 
            />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
              placeholder="Enter your full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="relative">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Email Address
          </label>
          <div className="relative">
            <Mail 
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
              size={20} 
            />
            <input
              type="email"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="relative">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Password
          </label>
          <div className="relative">
            <Lock 
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
              size={20} 
            />
            <input
              type="password"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
              placeholder="Create a password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Confirm Password
          </label>
          <div className="relative">
            <Lock 
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
              size={20} 
            />
            <input
              type="password"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
              placeholder="Confirm your password"
              value={form.confirmPassword}
              onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center space-x-2"
        >
          {loading ? (
            <>
              <Loader className="animate-spin" size={20} />
              <span>Creating account...</span>
            </>
          ) : (
            <span>Create Account</span>
          )}
        </button>

        {/* Sign In Link */}
        <p className="text-center text-gray-600">
          Already have an account?{' '}
          <Link 
            to="/login"
            className="text-pink-600 hover:text-pink-700 font-medium"
          >
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default SignUp;