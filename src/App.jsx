import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import MessagesPage from './Components/MessagesPage';
import SettingsPage from './Components/SettingsPage';
import GoogleCalendar from './Components/GoogleCalendar';
import Discord from './Components/Discord';
import Slack from './Components/Slack';
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

          {/* Sous-pages de MessagesPage */}
          <Route path="/home/discord" element={<Discord />} />
          <Route path="/home/slack" element={<Slack />} />
          <Route path="/backhome" element={<HomePage />} />

           {/* Settings */}
           <Route path="/login" element={<LoginPage />} />
           <Route path="/backhome" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
