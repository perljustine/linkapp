import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GoogleCalendar = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const getDaysInMonth = () => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();

    let days = new Array(firstDayOfWeek).fill(null);
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    return days;
  };

  const isCurrentDate = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const handleDateClick = (day) => {
    if (day) {
      const selectedDate = new Date(currentYear, currentMonth, day);
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      setSelectedDate(selectedDate.toLocaleDateString(undefined, options));
      setShowModal(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-r from-orange-100 to-pink-200 p-6">
      <div className="w-full max-w-4xl p-6 bg-gradient-to-r from-orange-200 to-rose-200 shadow-lg rounded-lg">
        <div className="flex items-center justify-between bg-gray-700 px-6 py-4 rounded-t-lg">
          <button onClick={handlePrevMonth} className="text-white hover:text-gray-300">◀</button>
          <h2 className="text-white text-xl font-semibold">{`${monthNames[currentMonth]} ${currentYear}`}</h2>
          <button onClick={handleNextMonth} className="text-white hover:text-gray-300">▶</button>
        </div>

        <div className="grid grid-cols-7 gap-3 p-6 text-lg">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="text-center font-semibold">{day}</div>
          ))}

          {getDaysInMonth().map((day, index) => (
            <div
              key={index}
              onClick={() => handleDateClick(day)}
              className={`cursor-pointer border py-4 text-center rounded-lg
                ${day ? 'hover:bg-gray-200' : 'bg-transparent'}
                ${isCurrentDate(day) ? 'bg-blue-500 text-white' : ''}
              `}
            >
              {day}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7">
        <Link to="/backhome">
          <button className="bg-rose-300 w-full p-6 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
            Go Back Home
          </button>
        </Link>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-96">
            <div className="flex justify-between items-center pb-3">
              <p className="text-xl font-bold">Selected Date</p>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <div className="text-lg font-semibold">{selectedDate}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleCalendar;
