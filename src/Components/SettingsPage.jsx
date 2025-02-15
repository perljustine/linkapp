import React from "react";
import { Link } from "react-router-dom"; // Import du Link

const SettingsPage = () => {
  return (
    <div className="font-sans w-screen">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gradient-to-r from-pink-200 to-orange-200">
        <div className="relative sm:max-w-lg w-full">
          <div className="card bg-orange-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"></div>
          <div className="card bg-pink-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"></div>
          <div className="relative w-full rounded-3xl px-6 py-6 bg-gray-100 shadow-md">
            <h2 className="text-center text-3xl font-bold text-gray-700 mb-6">Your Profile</h2>

            <div className="flex flex-col items-center space-y-5">
              <img
                className="object-cover w-32 h-32 p-1 rounded-full ring-4 ring-indigo-300"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="Avatar"
              />
              <div className="flex space-x-4">
                <button className="py-2 px-4 text-white bg-orange-300 hover:bg-pink-500 rounded-lg shadow-lg">
                  Change Picture
                </button>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 bg-indigo-50 border border-indigo-300 rounded-lg text-gray-900"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 bg-indigo-50 border border-indigo-300 rounded-lg text-gray-900"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-indigo-50 border border-indigo-300 rounded-lg text-gray-900"
              />
            </div>

            <div className="mt-6 space-x-2">
              <Link to="/backhome">
                <button className="text-white bg-orange-300 hover:bg-pink-500 font-small rounded-lg text-lg px-4 py-3 shadow-lg">
                  Save Changes
                </button>
              </Link>
              <Link to="/login">
                <button className="text-white bg-orange-300 hover:bg-pink-500 font-small rounded-lg text-lg px-4 py-3 shadow-lg">
                  Logout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
