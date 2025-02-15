import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-screen bg-gradient-to-r from-orange-100 to-pink-200">
      <div className="bg-orange-300 bg-opacity-50 shadow-lg rounded-lg px-8 py-8 max-w-md backdrop-blur-md">
        {/* 🎨 Amélioration du titre */}
        <h1 className="text-2xl font-extrabold text-center mb-6 text-white drop-shadow-md">
          Welcome Back! 
        </h1>

        <form action="#">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-400 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-400 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              placeholder="Enter your password"
              required
            />
            <div className="flex justify-between text-xs mt-2">
              <a
                href="#"
                className="text-gray-200 hover:text-pink-400 transition duration-300"
              >
                Forgot Password?
              </a>
              <a
                href="#"
                className="text-pink-400 hover:text-pink-300 transition duration-300"
              >
                Create Account
              </a>
            </div>
          </div>

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-300">
              Remember me
            </label>
          </div>

          {/* 🚀 Bouton amélioré */}
          <Link to="/home">
            <button
              type="button"
              className="w-full flex justify-center py-3 px-4 rounded-md shadow-md text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Login 🚀
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
