'use client';

import { useState } from 'react';
import { FaMagic, FaCode, FaChartLine } from 'react-icons/fa';
import EmailForm from './EmailForm';

export default function Hero() {
  return (
    <section className="min-h-screen md:min-h-screen flex items-center pt-[56px] md:pt-[70px] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-24 -left-40 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-rotate-3d shadow-2xl hidden md:block" style={{boxShadow: '0 0 100px rgba(255, 0, 153, 0.3)'}}></div>
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-cyan-400/25 rounded-full blur-3xl animate-rotate-3d hidden md:block" style={{ animationDelay: '2s', animationDirection: 'reverse', boxShadow: '0 0 100px rgba(0, 255, 255, 0.2)' }}></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg">
              <span className="gradient-text animate-gradient-shift bg-clip-text" style={{backgroundImage: 'linear-gradient(135deg, #ff0099, #00ffff, #ffff00, #ff0099)', backgroundSize: '300% 300%'}}>Buzzcraft</span>
              <br />
              <span className="gradient-text animate-gradient-shift bg-clip-text" style={{backgroundImage: 'linear-gradient(135deg, #ff0099, #00ffff, #ffff00, #ff0099)', backgroundSize: '300% 300%'}}>Studios</span>
            </h1>

            <p className="text-xl md:text-2xl font-semibold text-accent mb-4 md:mb-6">
              Elevate Your Brand. Transform Your Business.
            </p>

            <p className="text-base md:text-lg text-cyan-100 mb-6 md:mb-8 max-w-md leading-relaxed">
              We craft digital experiences that buzz. From bold marketing strategies to cutting-edge software—we're your all-in-one creative and tech powerhouse.
            </p>

            <EmailForm />
          </div>

          {/* Visual Side */}
          <div className="relative h-64 md:h-96 lg:h-full hidden lg:flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Floating Cards */}
              <div className="absolute top-10 left-10 w-32 h-32 glass flex flex-col items-center justify-center gap-3 hover:bg-pink-600/40 hover:border-yellow-300 transition-all duration-300 hover:scale-110 hover:shadow-glow-bright cursor-pointer animate-spin-3d border-2 border-cyan-400" style={{boxShadow: '0 0 30px rgba(0, 255, 255, 0.3), 0 0 60px rgba(255, 0, 153, 0.2)'}}>
                <FaMagic className="text-4xl gradient-text animate-gradient-shift" />
                <p className="text-xs font-bold">Design</p>
              </div>

              <div className="absolute top-1/2 right-10 w-32 h-32 glass flex flex-col items-center justify-center gap-3 hover:bg-pink-600/40 hover:border-yellow-300 transition-all duration-300 hover:scale-110 hover:shadow-glow-bright cursor-pointer animate-spin-3d border-2 border-cyan-400" style={{ animationDelay: '1s', boxShadow: '0 0 30px rgba(0, 255, 255, 0.3), 0 0 60px rgba(255, 0, 153, 0.2)' }}>
                <FaCode className="text-4xl gradient-text animate-gradient-shift" />
                <p className="text-xs font-bold">Development</p>
              </div>

              <div className="absolute bottom-10 left-10 w-32 h-32 glass flex flex-col items-center justify-center gap-3 hover:bg-pink-600/40 hover:border-yellow-300 transition-all duration-300 hover:scale-110 hover:shadow-glow-bright cursor-pointer animate-spin-3d border-2 border-cyan-400" style={{ animationDelay: '2s', boxShadow: '0 0 30px rgba(0, 255, 255, 0.3), 0 0 60px rgba(255, 0, 153, 0.2)' }}>
                <FaChartLine className="text-4xl gradient-text animate-gradient-shift" />
                <p className="text-xs font-bold">Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
