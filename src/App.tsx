import React, { useEffect, useState } from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import ConfettiAnimation from './components/ConfettiAnimation';
import BubbleAnimation from './components/BubbleAnimation';
import PartyPopper from './components/PartyPopper';
import GlassCard from './components/GlassCard';

function App() {
  const [showPoppers, setShowPoppers] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setShowPoppers(true);

    const targetDate = new Date('2025-01-11T18:00:00'); // Target event date and time

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setCountdown({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-blue-500">
      <div className="absolute inset-0 bg-[url('https://i.ibb.co/qnsyThy/Green-and-Yellow-Cute-Jungle-Birthday-Party-Invitation-Your-Story.jpg')] bg-cover bg-center bg-fixed opacity-100" />

      <ConfettiAnimation />
      <BubbleAnimation />
      {showPoppers && (
        <>
          <PartyPopper side="left" />
          <PartyPopper side="right" />
        </>
      )}

      <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 space-y-6">
        <div className="max-w-full mx-auto text-white mb-6 p-4" style={{
          backgroundImage: "url('https://i.ibb.co/bNfnbs6/Wooden-Board-Illustration-Wood-Board-Clipart-Wooden-Board-Cartoon-Wooden-Board-Hand-Drawn-PNG-Transp.png')",
          backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            minHeight: '20px', 
            padding: '10px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            transform: 'translateY(-30px)',
        }}>
          <h2 className="md:text-xl font-semibold mb-3">Countdown to the Celebration!</h2>
          <div className="flex flex-wrap justify-center space-x-2">
            {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
              <div key={index} className="flex flex-col items-center px-2 py-1">
                <span className="text-xl md:text-2xl font-bold">{countdown[unit]}</span>
                <span className="text-xs md:text-sm">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto p-4 relative" style={{
          backgroundImage: "url('https://i.ibb.co/bNfnbs6/Wooden-Board-Illustration-Wood-Board-Clipart-Wooden-Board-Cartoon-Wooden-Board-Hand-Drawn-PNG-Transp.png')",
          backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '5px',
            minHeight: '5px', 
            padding: '40px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            transform: 'translateY(-50px)',
        }}>
          <h1 className="text-xl md:text-3xl font-bold text-white mb-4 text-center">🌟 Dhiyash 🌟<br /> 🎉 Is Turning ONE! 🎉</h1>
        </div>
        <div className="max-w-md mx-auto p-3 space-y-3 relative" style={{
          backgroundImage: "url('https://i.ibb.co/bNfnbs6/Wooden-Board-Illustration-Wood-Board-Clipart-Wooden-Board-Cartoon-Wooden-Board-Hand-Drawn-PNG-Transp.png')",
          backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            minHeight: 'auto', 
            padding: 'auto',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            transform: 'translateY(-40px)',
        }}>
          <p className="text-xs md:text-base text-white mb-4 text-center">
          🙋🏻 Come celebrate the big ONE with us! 🎈<br />It's a day full of joy, laughter, and <br />🎂🍰 cake as we mark Dhiyash's very <br />🥳 first milestone 🎉<br />🎁 Join us for a fun-filled birthday bash 🎊 <br />🫶🏻 let's make it a memorable one 📸 <br />⏳ We can't wait to celebrate with you! 🤩
          </p>
        </div>
        <div className="max-w-md mx-auto p-3 space-y-3 relative" style={{
          backgroundImage: "url('https://i.ibb.co/bNfnbs6/Wooden-Board-Illustration-Wood-Board-Clipart-Wooden-Board-Cartoon-Wooden-Board-Hand-Drawn-PNG-Transp.png')",
          backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '70%',
            minHeight: 'auto', 
            padding: 'auto',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            transform: 'translateY(-40px)',
        }}>
          <div className="flex items-center space-x-2">
            <Calendar size={20} md:size={24} className="text-white" />
            <a
        href="https://calendar.app.google/cbS4p9r5QvuCk9dUA" // Replace with actual link to the location or details
        target="_blank"
        rel="noopener noreferrer"
        >
            <p className="text-xs md:text-sm font-bold text-white">Jan 11, Saturday</p>
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={20} md:size={24} className="text-white" />
            <a
        href="https://calendar.app.google/cbS4p9r5QvuCk9dUA" // Replace with actual link to the location or details
        target="_blank"
        rel="noopener noreferrer"
        >
            <p className="text-xs md:text-sm font-bold text-white">At 6:00 PM</p>
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={20} md:size={24} className="text-white" />
            <div className="text-center">
            <a
        href="https://bit.ly/dhiyash-1st-HBD" // Replace with actual link to the location or details
        target="_blank"
        rel="noopener noreferrer"
      >
              <h2 className="text-xs md:text-sm font-bold text-white">Shivjay Mini Hall</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
