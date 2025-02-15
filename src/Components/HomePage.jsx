import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const SAMPLE_MESSAGES = [
  { id: "1", content: "We are organizing a barbecue on Sunday at Grandma's house?", app: "WhatsApp", subject: "Family Dinner for Mom", from: "Mom", reply: "" },
  { id: "2", content: "The hackathon starts at 9am, be on time!", app: "Slack", subject: "Hackathon", from: "Organizer", reply: "" },
  { id: "3", content: "Who’s up for a hike in Scotland?", app: "Messenger", subject: "Scotland Trip 2025", from: "Camille", reply: "" },
  { id: "4", content: "Are we doing a family meeting next Saturday?", app: "Messenger", subject: "Family Dinner for Mom", from: "Uncle Jean", reply: "" },
  { id: "5", content: "Don’t forget to submit your project before midnight!", app: "Discord", subject: "Hackathon", from: "Tech Mentor", reply: "" },
  { id: "6", content: "Would you prefer to visit Edinburgh or the Highlands first?", app: "WhatsApp", subject: "Scotland Trip 2025", from: "Sarah", reply: "" },
  { id: "7", content: "I found a great castle to visit in Scotland!", app: "Slack", subject: "Scotland Trip 2025", from: "Alexandre", reply: "" },
  { id: "8", content: "Let’s have a call tonight to discuss hackathon stages?", app: "Discord", subject: "Hackathon", from: "Lucas", reply: "" },
  { id: "9", content: "We are going to the beach this weekend, who’s in?", app: "WhatsApp", subject: "Family Dinner for Mom", from: "Mom", reply: "" },
  { id: "10", content: "I’ve booked a dinner for us on Saturday evening, get ready!", app: "Messenger", subject: "Family Dinner for Mom", from: "Uncle Jean", reply: "" },
  { id: "11", content: "We should definitely have a movie night at home!", app: "WhatsApp", subject: "Family Dinner for Mom", from: "Sarah", reply: "" },
  { id: "12", content: "Who’s available for a family brunch this Sunday?", app: "WhatsApp", subject: "Family Dinner for Mom", from: "Mom", reply: "" }
];

const CATEGORY_LIMITS = { sm: 2, md: 3, lg: 4 };

const HomePage = () => {
  const [expanded, setExpanded] = useState({});
  const [replyMessage, setReplyMessage] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [messages, setMessages] = useState(SAMPLE_MESSAGES);

  const toggleExpand = (category) => {
    setExpanded((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const handleMessageClick = (category, message, index) => {
    setReplyingTo(message);
  };

  const handleReplyChange = (e) => {
    setReplyMessage(e.target.value);
  };

  const handleReplySubmit = () => {
    if (replyMessage.trim() && replyingTo) {
      // Update the specific message reply
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === replyingTo.id ? { ...msg, reply: replyMessage } : msg
        )
      );
      setReplyMessage('');
      setReplyingTo(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleReplySubmit();
    }
  };

  const handlePopupToggle = () => {
    // Toggle popup visibility
  };

  return (
    <div className="w-screen min-h-screen flex font-roboto flex-col items-center bg-no-repeat bg-gradient-to-r from-pink-200 to-orange-200 p-4 pb-24">
      <h2 className="mt-3 text-white text-center bg-rose-300 p-4 rounded-3xl font-bold text-3xl">Home Page</h2>
      
      <div className="w-full max-w-7xl mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Hackathon", "Family Dinner for Mom", "Scotland Trip 2025"].map((category) => {
          const filteredMessages = messages.filter((m) => m.subject === category);
          const visibleMessages = expanded[category] ? filteredMessages : filteredMessages.slice(0, CATEGORY_LIMITS.lg);

          return (
            <div key={category} className="bg-orange-200 rounded-lg shadow-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg text-gray-800">{category}</h3>
                <button className="p-1 hover:bg-orange-300 rounded-full" onClick={handlePopupToggle}>
                  <Plus className="w-5 h-5 text-orange-600" />
                </button>
              </div>
              <div className="space-y-3">
                {visibleMessages.map((message) => (
                  <div
                    key={message.id}
                    className="relative p-3 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors"
                    onClick={() => handleMessageClick(category, message)}
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-sm font-medium text-gray-600">{message.app}</span>
                      <span className="text-xs text-gray-500">{message.from}</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-700">{message.content}</p>

                    {/* Add the reply bubble positioned near the message */}
                    {replyingTo && replyingTo.id === message.id && (
                      <div className="absolute left-0 top-8 ml-8 w-3/4 bg-blue-300 text-white p-3 rounded-lg max-w-xs z-10">
                        <div className="flex justify-between items-center">
                          <span>Replying to: {message.from}</span>
                          <button className="text-xs text-white" onClick={() => setReplyingTo(null)}>Cancel</button>
                        </div>
                        <textarea
                          value={replyMessage}
                          onChange={handleReplyChange}
                          onKeyDown={handleKeyDown}
                          className="w-full mt-2 p-2 bg-blue-200 rounded-lg text-sm"
                          placeholder="Type your reply..."
                        />
                        <button
                          onClick={handleReplySubmit}
                          className="mt-2 p-2 bg-blue-500 text-white rounded-lg"
                        >
                          Reply
                        </button>
                      </div>
                    )}
                  </div>
                ))}
                {filteredMessages.length > CATEGORY_LIMITS.lg && (
                  <button
                    onClick={() => toggleExpand(category)}
                    className="mt-3 text-yellow-500 text-sm hover:text-yellow-600"
                  >
                    {expanded[category] ? "Show Less" : "Show More..."}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-no-repeat bg-gradient-to-r from-pink-200 to-orange-200 p-4 shadow-lg">
        <div className="max-w-lg mx-auto flex justify-center gap-4">
          <Link to="/home/google-calendar">
            <button className="bg-yellow-400 px-4 py-2 rounded-lg text-white shadow-lg hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              Google Calendar
            </button>
          </Link>
          <Link to="/home/settings">
            <button className="bg-pink-300 px-4 py-2 rounded-lg text-white shadow-lg hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              Settings
            </button>
          </Link>
          <Link to="/home/messages">
            <button className="bg-orange-400 px-4 py-2 rounded-lg text-white shadow-lg hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              Messages
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
