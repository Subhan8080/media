'use client';

export default function About() {
  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '30+', label: 'Happy Clients' },
    { number: '15+', label: 'Team Members' },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Text Content */}
          <div className="lg:col-span-3 animate-fade-in-left">
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-8 gradient-text animate-gradient-shift bg-clip-text" style={{backgroundImage: 'linear-gradient(135deg, #ff0099, #00ffff)', backgroundSize: '300% 300%'}}>
              About Buzzcraft Studios
            </h2>

            <p className="text-lg text-cyan-100 mb-6 leading-relaxed drop-shadow-sm">
              Buzzcraft Studios is where marketing expertise meets software innovation. We're a team of strategists, designers, and developers united by one mission: to help brands thrive in the digital age. Whether you need a comprehensive marketing strategy, a stunning brand identity, or a custom software solution, we deliver excellence at every turn.
            </p>

            <p className="text-lg text-cyan-100 leading-relaxed drop-shadow-sm">
              With years of experience across industries, we understand that every business is unique. That's why we combine creative boldness with technical precision to create solutions that truly matter.
            </p>
          </div>

          {/* Stats */}
          <div className="lg:col-span-2 space-y-4 animate-fade-in-right">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card-service text-center p-6 hover:p-8 border-2 border-cyan-400/40 hover:border-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-glow-bright"
                style={{ animationDelay: `${index * 0.1}s`, boxShadow: '0 0 20px rgba(0, 255, 255, 0.15)' }}
              >
                <h3 className="text-5xl font-poppins font-bold gradient-text mb-2 animate-gradient-shift bg-clip-text" style={{backgroundImage: 'linear-gradient(135deg, #ffff00, #ff0099)', backgroundSize: '300% 300%'}}>
                  {stat.number}
                </h3>
                <p className="text-cyan-200 font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
