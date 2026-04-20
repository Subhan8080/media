'use client';

import { useEffect, useState } from 'react';

export default function CountdownTimer() {
  const [time, setTime] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 60);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance < 0) {
        setTime({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 text-center bg-gradient-to-b from-pink-900/15 via-cyan-900/10 to-transparent border-y-2 border-cyan-400/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl"></div>
      </div>
      <div className="container relative z-10">
        <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-12 text-white animate-fade-in-up">
          Launch In
        </h2>

        <div className="flex justify-center items-center gap-2 lg:gap-6 flex-wrap">
          <div className="text-center w-24 lg:w-32 animate-fade-in-up">
            <div className="text-5xl lg:text-6xl font-poppins font-bold gradient-text animate-gradient-shift bg-clip-text" style={{backgroundImage: 'linear-gradient(135deg, #ff0099, #00ffff, #ffff00)', backgroundSize: '300% 300%'}}>
              {time.days}
            </div>
            <div className="text-xs lg:text-sm font-bold text-cyan-300 uppercase tracking-widest mt-2">
              Days
            </div>
          </div>

          <div className="text-4xl lg:text-5xl text-pink-500 font-light drop-shadow-lg">:</div>

          <div className="text-center w-24 lg:w-32 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-5xl lg:text-6xl font-poppins font-bold gradient-text animate-gradient-shift bg-clip-text" style={{backgroundImage: 'linear-gradient(135deg, #ff0099, #00ffff, #ffff00)', backgroundSize: '300% 300%'}}>
              {time.hours}
            </div>
            <div className="text-xs lg:text-sm font-bold text-cyan-300 uppercase tracking-widest mt-2">
              Hours
            </div>
          </div>

          <div className="text-4xl lg:text-5xl text-pink-500 font-light drop-shadow-lg">:</div>

          <div className="text-center w-24 lg:w-32 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-5xl lg:text-6xl font-poppins font-bold gradient-text animate-gradient-shift bg-clip-text" style={{backgroundImage: 'linear-gradient(135deg, #ff0099, #00ffff, #ffff00)', backgroundSize: '300% 300%'}}>
              {time.minutes}
            </div>
            <div className="text-xs lg:text-sm font-bold text-cyan-300 uppercase tracking-widest mt-2">
              Minutes
            </div>
          </div>

          <div className="text-4xl lg:text-5xl text-pink-500 font-light drop-shadow-lg">:</div>

          <div className="text-center w-24 lg:w-32 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-5xl lg:text-6xl font-poppins font-bold gradient-text animate-gradient-shift bg-clip-text" style={{backgroundImage: 'linear-gradient(135deg, #ff0099, #00ffff, #ffff00)', backgroundSize: '300% 300%'}}>
              {time.seconds}
            </div>
            <div className="text-xs lg:text-sm font-bold text-cyan-300 uppercase tracking-widest mt-2">
              Seconds
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
