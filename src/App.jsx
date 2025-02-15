import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import MessagesPage from './Components/MessagesPage';
import SettingsPage from './Components/SettingsPage';
import GoogleCalendar from './Components/GoogleCalendar';
function App() {

  return (
    <Router>
      <div className="container">
        <Routes>
          {/* Page principale */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />

          {/* Sous-pages de HomePage */}
          <Route path="/home/messages" element={<MessagesPage />} />
          <Route path="/home/settings" element={<SettingsPage />} />
          <Route path="/home/google-calendar" element={<GoogleCalendar />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
