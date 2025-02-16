import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SlackMessageCard = ({ channelName, senderName, message, timestamp, onMessageClick, index }) => {
  return (
    <div
      className="relative w-full bg-teal-200 p-4 rounded-lg shadow-lg m-2 transform transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:bg-teal-300 cursor-pointer"
      onClick={() => onMessageClick(channelName, senderName, message, timestamp, index)}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="text-lg font-semibold text-teal-600">{channelName}</div>
        <div className="text-sm text-gray-600">{new Date(timestamp).toLocaleString()}</div>
      </div>
      <div className="text-sm text-gray-800">
        <span className="font-semibold text-teal-500">{senderName}:</span> {message}
      </div>
    </div>
  );
};

const Slack = () => {
  const [replyMessage, setReplyMessage] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyingIndex, setReplyingIndex] = useState(null);

  const messages = [
    { channelName: 'general', senderName: 'John', message: 'Does anyone know when the next team meeting is?', timestamp: 1676292000000 },
    { channelName: 'marketing', senderName: 'Sara', message: 'Can I get some feedback on the new campaign?', timestamp: 1676295600000 },
    { channelName: 'development', senderName: 'Mike', message: 'Anyone want to pair program today?', timestamp: 1676299200000 },
    { channelName: 'design', senderName: 'Anna', message: 'I finished the new wireframes. Check them out!', timestamp: 1676302800000 },
    { channelName: 'random', senderName: 'Tom', message: 'Any good movie recommendations for the weekend?', timestamp: 1676306400000 },
    { channelName: 'devops', senderName: 'Chris', message: 'I pushed the latest build to production.', timestamp: 1676310000000 },
    { channelName: 'support', senderName: 'Elena', message: 'Need help with a bug in production.', timestamp: 1676313600000 },
    { channelName: 'product', senderName: 'David', message: 'New feature rollout next week.', timestamp: 1676317200000 },
    { channelName: 'HR', senderName: 'Lisa', message: 'Don’t forget to submit your timesheets!', timestamp: 1676320800000 },
    { channelName: 'sales', senderName: 'Paul', message: 'We closed a big deal today!', timestamp: 1676324400000 },
    { channelName: 'finance', senderName: 'Emma', message: 'Quarterly budget review is scheduled.', timestamp: 1676328000000 },
    { channelName: 'engineering', senderName: 'Jake', message: 'Refactoring the backend service.', timestamp: 1676331600000 },
    { channelName: 'legal', senderName: 'Sophia', message: 'We need to review the new contracts.', timestamp: 1676335200000 }
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
    <div className="min-h-screen w-screen bg-gradient-to-r from-teal-200 to-green-300 py-8 flex flex-col items-center">
      <div className="w-full flex justify-between px-6">
        <Link to="/backhome">
          <button className="bg-emerald-300 px-6 py-3 rounded-lg text-white shadow-lg hover:shadow-inner transition duration-500 transform hover:scale-95">
            Go Back Home
          </button>
        </Link>
      </div>
      
      <h1 className="text-4xl font-bold text-teal-600 my-6">Slack Messages</h1>
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-5xl">
        {messages.map((msg, index) => (
          <SlackMessageCard
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
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-teal-100 p-4 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-lg font-semibold text-teal-600 mb-2">Replying to {replyingTo.sender}:</h2>
          <div className="text-sm text-gray-800">
            <span className="font-semibold text-teal-500">{replyingTo.sender}:</span> {replyingTo.message}
          </div>
          <textarea
            value={replyMessage}
            onChange={handleReplyChange}
            onKeyDown={handleKeyDown}
            placeholder="Type your reply..."
            className="w-full p-3 mt-4 bg-teal-50 border border-teal-300 rounded-lg text-gray-900"
          />
          <button
            onClick={handleReplySubmit}
            className="mt-2 text-white bg-teal-500 hover:bg-teal-600 font-medium rounded-lg text-lg px-6 py-2 shadow-lg"
          >
            Send Reply
          </button>
        </div>
      )}
    </div>
  );
};

export default Slack;
