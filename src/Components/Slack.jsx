import React from "react";
import { Link } from "react-router-dom";

const Slack = ({ platform, bgColor, apiConnect }) => {
  return (
    <div className="font-sans w-screen">
      <div className={`relative min-h-screen flex flex-col sm:justify-center items-center bg-gradient-to-r from-purple-600 to-orange-600 via-pink-600 via-orange-800 via-yellow-600`}>
        <div className="relative sm:max-w-lg w-full">
          <div className="card bg-orange-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"></div>
          <div className="card bg-pink-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"></div>
          <div className="relative w-full rounded-3xl px-6 py-6 bg-gray-100 shadow-md">
            <h2 className="text-center text-3xl font-bold text-gray-700 mb-6">Connect to {platform}</h2>
            
            <div className="flex flex-col items-center space-y-5">
              <button
                onClick={apiConnect}
                className="py-3 px-6 text-white bg-blue-600 rounded-xl shadow-xl hover:bg-blue-800 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
              >
                Connect {platform} API
              </button>
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/backhome" className="text-white bg-yellow-500 py-3 px-6 rounded-xl shadow-xl hover:bg-yellow-600 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                Go Back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slack;
