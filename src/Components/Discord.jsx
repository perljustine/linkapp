import React, { useState } from 'react';

const DiscordMessageCard = ({ channelName, senderName, message, timestamp, onMessageClick, index }) => {
  return (
    <div
      className="relative max-w-lg w-full bg-orange-200 p-4 rounded-lg shadow-lg mb-4 transform transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:bg-orange-300 cursor-pointer"
      onClick={() => onMessageClick(channelName, senderName, message, timestamp, index)}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="text-lg font-semibold text-pink-600">{channelName}</div>
        <div className="text-sm text-gray-600">{new Date(timestamp).toLocaleString()}</div>
      </div>
      <div className="text-sm text-gray-800">
        <span className="font-semibold text-pink-500">{senderName}:</span> {message}
      </div>
    </div>
  );
};

const Discord = () => {
  const [replyMessage, setReplyMessage] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyingIndex, setReplyingIndex] = useState(null);

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
    {
      channelName: 'general',
      senderName: 'David',
      message: 'I found the update link! Check it out here: link.com',
      timestamp: 1676302800000,
    },
    {
      channelName: 'gaming',
      senderName: 'Eve',
      message: 'Anyone up for a game of Valorant?',
      timestamp: 1676306400000,
    },
    {
      channelName: 'music',
      senderName: 'Frank',
      message: 'Let’s have a music session after the game!',
      timestamp: 1676310000000,
    },
  ];

  const handleMessageClick = (channel, sender, message, timestamp, index) => {
    setReplyingTo({ channel, sender, message, timestamp });
    setReplyingIndex(index); // Save the index of the message being replied to
    setReplyMessage('');
  };

  const handleReplyChange = (e) => {
    setReplyMessage(e.target.value);
  };

  const handleReplySubmit = () => {
    if (replyMessage.trim()) {
      // Reset the state to close the reply bubble
      setReplyMessage('');
      setReplyingTo(null);
      setReplyingIndex(null);
    }
  };

  // Handle Enter key press to submit the reply
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent new line on Enter key press
      handleReplySubmit();
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-pink-200 to-orange-300 py-8 flex items-center justify-center">
      <div className="max-w-2xl w-full relative">
        <h1 className="text-4xl font-bold text-center text-orange-600 mb-6">Discord Messages</h1>
        <div className="space-y-4">
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

        {/* Reply Section: Appears as a bubble */}
        {replyingTo && replyingIndex !== null && (
          <div
            className="absolute z-10 w-full flex justify-center mt-4"
            style={{
              top: `${replyingIndex * 120 + 60}px`, // Adjust this to position bubble correctly based on message
            }}
          >
            <div className="bg-orange-100 p-4 rounded-lg shadow-lg w-full max-w-lg">
              <h2 className="text-lg font-semibold text-orange-600 mb-2">Replying to {replyingTo.sender}:</h2>
              <div className="text-sm text-gray-800">
                <span className="font-semibold text-orange-500">{replyingTo.sender}:</span> {replyingTo.message}
              </div>
              <textarea
                value={replyMessage}
                onChange={handleReplyChange}
                onKeyDown={handleKeyDown} // Listen for Enter key press
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Discord;
