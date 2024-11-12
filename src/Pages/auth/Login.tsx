import React, { useState } from 'react';
import { Mail, Lock, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../../components/auth/AuthLayout';
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Add your login logic here
    setTimeout(() => setLoading(false), 1500); // Simulated delay
  };

  return (
    <AuthLayout 
      title="Welcome Back" 
      subtitle="Sign in to continue planning your perfect day"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
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
              placeholder="Enter your password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <Link 
            to="/forgot-password"
            className="text-sm text-pink-600 hover:text-pink-700 mt-1 inline-block"
          >
            Forgot password?
          </Link>
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
              <span>Signing in...</span>
            </>
          ) : (
            <span>Sign In</span>
          )}
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-gray-600">
          Don't have an account?{' '}
          <Link 
            to="/signup"
            className="text-pink-600 hover:text-pink-700 font-medium"
          >
            Create one
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;