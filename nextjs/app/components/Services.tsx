'use client';

import { FaBullhorn, FaPalette, FaCode, FaCogs } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: FaBullhorn,
      title: 'Digital Marketing',
      description: 'Strategic SEO, engaging social media campaigns, and targeted advertising to amplify your brand\'s voice and drive real results.',
      features: ['SEO Optimization', 'Social Media Management', 'Paid Advertising'],
    },
    {
      icon: FaPalette,
      title: 'Branding & Design',
      description: 'From logo design to complete brand identity systems, we create visual languages that resonate and inspire.',
      features: ['Logo & Branding', 'Visual Identity', 'Brand Strategy'],
    },
    {
      icon: FaCode,
      title: 'Web & App Development',
      description: 'Custom-built web and mobile applications that combine stunning design with powerful functionality and performance.',
      features: ['Web Development', 'Mobile Apps', 'E-Commerce Solutions'],
    },
    {
      icon: FaCogs,
      title: 'Custom Software',
      description: 'Tailored software solutions that automate processes, streamline operations, and drive business growth at scale.',
      features: ['Enterprise Solutions', 'API Development', 'System Integration'],
    },
  ];

  return (
    <section id="services" className="py-16 md:py-20 lg:py-32 bg-gradient-to-b from-transparent via-pink-900/5 to-transparent relative">
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl opacity-50"></div>
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-4 md:mb-6 gradient-text animate-gradient-shift bg-clip-text" style={{backgroundImage: 'linear-gradient(135deg, #ff0099, #00ffff, #ffff00)', backgroundSize: '300% 300%'}}>
            What We Do Best
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-cyan-100">
            Comprehensive solutions designed to elevate your brand and business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="card-service group animate-fade-in-up border-2 border-cyan-400/30 hover:border-yellow-300 hover:shadow-glow-bright bg-pink-600/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-4 hover:scale-105 transform perspective"
                style={{ animationDelay: `${index * 0.1}s`, boxShadow: '0 0 30px rgba(0, 255, 255, 0.2)' }}
              >
                <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-300 shadow-glow-purple" style={{boxShadow: '0 0 30px rgba(255, 0, 153, 0.4)'}}>
                  <Icon className="text-2xl text-black font-bold" />
                </div>

                <h3 className="text-xl font-poppins font-bold mb-4 text-white">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 shadow-glow"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
