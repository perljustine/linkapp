import React from "react";
import { Link } from "react-router-dom"; // Import du Link

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-gray-800 bg-opacity-50 shadow-md rounded-lg px-8 py-6 max-w-md backdrop-blur-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-white">Hi there!</h1>
        <form action="#">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-500 bg-neutral-700 text-white placeholder-slate-200 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-500 bg-neutral-700 text-white placeholder-slate-200 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              placeholder="Enter your password"
              required
            />
            <a
              href="#"
              className="text-xs text-gray-300 hover:text-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Forgot Password?
            </a>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-gray-300 text-pink-500 focus:ring-pink-500 focus:outline-none"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-xs text-pink-400 hover:text-pink-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Create Account
            </a>
          </div>

          {/* 🚀 Ajout du Link vers la Home Page */}
          <Link to="/home">
            <button
              type="button"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Login
            </button>
          </Link>

        </form>
      </div>
    </div>
  );
};

export default LoginPage;
