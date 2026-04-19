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
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-6 gradient-text">
            What We Do Best
          </h2>
          <p className="text-lg text-gray-400">
            Comprehensive solutions designed to elevate your brand and business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="card-service group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-2xl text-white" />
                </div>

                <h3 className="text-xl font-poppins font-bold mb-4 text-white">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-accent"></span>
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
