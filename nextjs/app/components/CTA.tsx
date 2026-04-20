'use client';

import EmailForm from './EmailForm';

export default function CTA() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-pink-900/20 via-purple-900/10 to-transparent border-t-2 border-cyan-400/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-6 text-white animate-fade-in-up gradient-text animate-gradient-shift bg-clip-text" style={{backgroundImage: 'linear-gradient(135deg, #ff0099, #00ffff, #ffff00)', backgroundSize: '300% 300%'}}>
          Interested? Join Our Community
        </h2>

        <p className="text-lg text-cyan-300 mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Be among the first to experience Buzzcraft Studios
        </p>

        <div className="max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <EmailForm />
        </div>
      </div>
    </section>
  );
}
