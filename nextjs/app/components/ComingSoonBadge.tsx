'use client';

export default function ComingSoonBadge() {
  return (
    <section className="py-20 text-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-1/3 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container animate-fade-in-up relative z-10">
        <span className="inline-block px-6 py-3 bg-gradient-to-r from-pink-600/40 to-cyan-600/30 border-2 border-cyan-400 rounded-full text-sm font-bold text-cyan-300 mb-6 shadow-glow" style={{boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)'}}>
          🚀 Coming Soon
        </span>

        <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-6 gradient-text animate-gradient-shift bg-clip-text" style={{backgroundImage: 'linear-gradient(135deg, #ff0099, #00ffff, #ffff00)', backgroundSize: '300% 300%'}}>
          Something Amazing is Brewing
        </h2>

        <p className="text-lg text-cyan-200 max-w-2xl mx-auto">
          Our platform will revolutionize how agencies and businesses collaborate on creative and technical projects.
        </p>
      </div>
    </section>
  );
}
