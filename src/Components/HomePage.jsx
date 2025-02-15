import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const SAMPLE_MESSAGES = [
  { id: "1", content: "On organise un barbecue dimanche chez mamie ?", app: "WhatsApp", subject: "Famille", from: "Maman" },
  { id: "2", content: "Le hackathon commence à 9h, soyez à l'heure !", app: "Slack", subject: "Hackathon", from: "Organisateur" },
  { id: "3", content: "Qui est partant pour une rando en Écosse ?", app: "Messenger", subject: "Voyage Écosse 2025", from: "Camille" },
  { id: "4", content: "On fait une réunion de famille samedi prochain ?", app: "Messenger", subject: "Famille", from: "Tonton Jean" },
  { id: "5", content: "N'oubliez pas de soumettre votre projet avant minuit !", app: "Discord", subject: "Hackathon", from: "Mentor Tech" },
  { id: "6", content: "Vous préférez visiter Édimbourg ou les Highlands en premier ?", app: "WhatsApp", subject: "Voyage Écosse 2025", from: "Sarah" },
  { id: "7", content: "J'ai trouvé un super château à visiter en Écosse !", app: "Slack", subject: "Voyage Écosse 2025", from: "Alexandre" },
  { id: "8", content: "On se fait un appel ce soir pour discuter des étapes du hackathon ?", app: "Discord", subject: "Hackathon", from: "Lucas" },
  { id: "9", content: "On part à la plage ce weekend, qui est partant ?", app: "WhatsApp", subject: "Famille", from: "Maman" },
  { id: "10", content: "Je vous ai réservé un dîner pour samedi soir, préparez-vous !", app: "Messenger", subject: "Famille", from: "Tonton Jean" },
  { id: "11", content: "Il faut absolument qu'on fasse une soirée cinéma à la maison !", app: "WhatsApp", subject: "Famille", from: "Sarah" },
  { id: "12", content: "Qui est dispo pour un brunch familial ce dimanche ?", app: "WhatsApp", subject: "Famille", from: "Maman" }
];

const CATEGORY_LIMITS = { sm: 2, md: 3, lg: 4 };

const HomePage = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (category) => {
    setExpanded((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <div className="w-screen min-h-screen flex font-roboto flex-col items-center bg-orange-100 p-4 pb-24">
      <h2 className="mt-3 text-white text-center bg-orange-200 p-4 rounded-3xl font-bold text-3xl">Home Page</h2>
      
      <div className="w-full max-w-7xl mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Hackathon", "Famille", "Voyage Écosse 2025"].map((category) => {
          const messages = SAMPLE_MESSAGES.filter((m) => m.subject === category);
          const visibleMessages = expanded[category] ? messages : messages.slice(0, CATEGORY_LIMITS.lg);

          return (
            <div key={category} className="bg-orange-200 rounded-lg shadow-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg text-gray-800">{category}</h3>
                <button className="p-1 hover:bg-orange-300 rounded-full">
                  <Plus className="w-5 h-5 text-orange-600" />
                </button>
              </div>
              <div className="space-y-3">
                {visibleMessages.map((message) => (
                  <div key={message.id} className="p-3 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors">
                    <div className="flex justify-between items-start">
                      <span className="text-sm font-medium text-gray-600">{message.app}</span>
                      <span className="text-xs text-gray-500">{message.from}</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-700">{message.content}</p>
                  </div>
                ))}
                {messages.length > CATEGORY_LIMITS.lg && (
                  <button
                    onClick={() => toggleExpand(category)}
                    className="mt-3 text-yellow-500 text-sm hover:text-yellow-600"
                  >
                    {expanded[category] ? "Voir moins" : "Voir plus..."}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-orange-100 p-4 shadow-lg">
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