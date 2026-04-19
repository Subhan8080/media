'use client';

export default function About() {
  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '30+', label: 'Happy Clients' },
    { number: '15+', label: 'Team Members' },
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Text Content */}
          <div className="lg:col-span-3 animate-fade-in-left">
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-8 text-white">
              About Buzzcraft Studios
            </h2>

            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              Buzzcraft Studios is where marketing expertise meets software innovation. We're a team of strategists, designers, and developers united by one mission: to help brands thrive in the digital age. Whether you need a comprehensive marketing strategy, a stunning brand identity, or a custom software solution, we deliver excellence at every turn.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              With years of experience across industries, we understand that every business is unique. That's why we combine creative boldness with technical precision to create solutions that truly matter.
            </p>
          </div>

          {/* Stats */}
          <div className="lg:col-span-2 space-y-4 animate-fade-in-right">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card-service text-center p-6 hover:p-8"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-5xl font-poppins font-bold gradient-text mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-400 font-semibold">
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
