import React from "react";
import { Link } from "react-router-dom"; // Import du Link

const MessagesPage = () => {
 
    return (
        <div className="font-sans w-screen">
          <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 bg-cover bg-no-repeat bg-gradient-to-r from-purple-600 to-orange-600 via-pink-600 via-orange-800 via-yellow-600">
            <div className="relative sm:max-w-sm w-full">
              <div className="card bg-orange-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"></div>
              <div className="card bg-pink-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"></div>
              <div className="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
                <label className="block mt-3 text-sm text-gray-700 text-center font-semibold text-3xl">
                  Who do you want to chat with ? 
                </label>
                <form onSubmit={(e) => e.preventDefault()} className="mt-10">
                  
                  {/* 🔗 Bouton vers Google Calendar */}
                  <div className="mt-7">
                    <Link to="/home/discord">
                      <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                        Discord
                      </button>
                    </Link>
                  </div>
    
                  {/* 🔗 Bouton vers Settings */}
                  <div className="mt-7">
                    <Link to="/home/slack">
                      <button className="bg-purple-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                        Slack
                      </button>
                    </Link>
                  </div>
    
                  {/* 🔗 Bouton vers Messages */}
                  <div className="mt-7">
                    <Link to="/backhome">
                      <button className="bg-yellow-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                        Go Back Home
                      </button>
                    </Link>
                  </div>
    
                </form>
              </div>
            </div>
          </div>
        </div>
      );
  
};

export default MessagesPage;
