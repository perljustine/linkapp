import React from 'react';

const DiscordMessageCard = ({ channelName, senderName, message, timestamp }) => {
  return (
    <div className="max-w-lg w-full bg-blue-50 p-4 rounded-lg shadow-lg mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="text-lg font-semibold text-blue-700">{channelName}</div>
        <div className="text-sm text-gray-600">{new Date(timestamp).toLocaleString()}</div>
      </div>
      <div className="text-sm text-gray-800">
        <span className="font-semibold text-blue-600">{senderName}:</span> {message}
      </div>
    </div>
  );
};

const Discord = () => {
  const messages = [
    {
      channelName: 'general',
      senderName: 'Alice',
      message: 'Does anyone have the link to the new update?',
      timestamp: 1676292000000,
    },
    {
      channelName: 'music',
      senderName: 'Bob',
      message: 'Who is up for a music battle tonight?',
      timestamp: 1676295600000,
    },
    {
      channelName: 'support',
      senderName: 'Charlie',
      message: 'Can someone help me with a server issue?',
      timestamp: 1676299200000,
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-blue-200 to-teal-300 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">Discord Messages</h1>
        {messages.map((msg, index) => (
          <DiscordMessageCard
            key={index}
            channelName={msg.channelName}
            senderName={msg.senderName}
            message={msg.message}
            timestamp={msg.timestamp}
          />
        ))}
      </div>
    </div>
  );
};

export default Discord;
