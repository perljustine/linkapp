import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DiscordMessageCard = ({ channelName, senderName, message, timestamp, onMessageClick, index }) => {
  return (
    <div
      className="relative w-full bg-orange-200 p-4 rounded-lg shadow-lg m-2 transform transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:bg-orange-300 cursor-pointer"
      onClick={() => onMessageClick(channelName, senderName, message, timestamp, index)}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="text-lg font-semibold text-orange-600">{channelName}</div>
        <div className="text-sm text-gray-600">{new Date(timestamp).toLocaleString()}</div>
      </div>
      <div className="text-sm text-gray-800">
        <span className="font-semibold text-orange-500">{senderName}:</span> {message}
      </div>
    </div>
  );
};

const Discord = () => {
  const [replyMessage, setReplyMessage] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyingIndex, setReplyingIndex] = useState(null);

  const messages = [
    { channelName: 'general', senderName: 'Alice', message: 'Does anyone have the link to the new update?', timestamp: 1676292000000 },
    { channelName: 'music', senderName: 'Bob', message: 'Who is up for a music battle tonight?', timestamp: 1676295600000 },
    { channelName: 'support', senderName: 'Charlie', message: 'Can someone help me with a server issue?', timestamp: 1676299200000 },
    { channelName: 'general', senderName: 'David', message: 'I found the update link! Check it out here: link.com', timestamp: 1676302800000 },
    { channelName: 'gaming', senderName: 'Eve', message: 'Anyone up for a game of Valorant?', timestamp: 1676306400000 },
    { channelName: 'music', senderName: 'Frank', message: 'Let’s have a music session after the game!', timestamp: 1676310000000 },
    { channelName: 'movies', senderName: 'Grace', message: 'Has anyone watched the new sci-fi movie?', timestamp: 1676313600000 },
    { channelName: 'tech', senderName: 'Henry', message: 'What’s the best laptop for coding?', timestamp: 1676317200000 }
  ];

  const handleMessageClick = (channel, sender, message, timestamp, index) => {
    setReplyingTo({ channel, sender, message, timestamp });
    setReplyingIndex(index);
    setReplyMessage('');
  };

  const handleReplyChange = (e) => {
    setReplyMessage(e.target.value);
  };

  const handleReplySubmit = () => {
    if (replyMessage.trim()) {
      setReplyMessage('');
      setReplyingTo(null);
      setReplyingIndex(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleReplySubmit();
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-orange-200 to-yellow-300 py-8 flex flex-col items-center">
      <div className="w-full flex justify-between px-6">
        <Link to="/backhome">
          <button className="bg-rose-500 px-6 py-3 rounded-lg text-white shadow-lg hover:shadow-inner transition duration-500 transform hover:scale-105">
            Go Back Home
          </button>
        </Link>
      </div>
      
      <h1 className="text-4xl font-bold text-orange-600 my-6">Discord Messages</h1>
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-5xl">
        {messages.map((msg, index) => (
          <DiscordMessageCard
            key={index}
            channelName={msg.channelName}
            senderName={msg.senderName}
            message={msg.message}
            timestamp={msg.timestamp}
            onMessageClick={handleMessageClick}
            index={index}
          />
        ))}
      </div>

      {replyingTo && replyingIndex !== null && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-orange-100 p-4 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-lg font-semibold text-orange-600 mb-2">Replying to {replyingTo.sender}:</h2>
          <div className="text-sm text-gray-800">
            <span className="font-semibold text-orange-500">{replyingTo.sender}:</span> {replyingTo.message}
          </div>
          <textarea
            value={replyMessage}
            onChange={handleReplyChange}
            onKeyDown={handleKeyDown}
            placeholder="Type your reply..."
            className="w-full p-3 mt-4 bg-orange-50 border border-orange-300 rounded-lg text-gray-900"
          />
          <button
            onClick={handleReplySubmit}
            className="mt-2 text-white bg-orange-500 hover:bg-orange-600 font-medium rounded-lg text-lg px-6 py-2 shadow-lg"
          >
            Send Reply
          </button>
        </div>
      )}
    </div>
  );
};

export default Discord;
