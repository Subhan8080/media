'use client';

import { useState } from 'react';
import { FaMagic, FaCode, FaChartLine } from 'react-icons/fa';
import EmailForm from './EmailForm';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-[70px] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-24 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-blob-move"></div>
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-blob-move" style={{ animationDelay: '2s', animationDirection: 'reverse' }}></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-left">
            <h1 className="text-5xl lg:text-7xl font-poppins font-bold mb-6 leading-tight">
              <span className="gradient-text">Buzzcraft</span>
              <br />
              <span className="gradient-text">Studios</span>
            </h1>

            <p className="text-2xl font-semibold text-accent mb-6">
              Elevate Your Brand. Transform Your Business.
            </p>

            <p className="text-lg text-gray-400 mb-8 max-w-md leading-relaxed">
              We craft digital experiences that buzz. From bold marketing strategies to cutting-edge software—we're your all-in-one creative and tech powerhouse.
            </p>

            <EmailForm />
          </div>

          {/* Visual Side */}
          <div className="relative h-96 lg:h-full hidden lg:flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Floating Cards */}
              <div className="absolute top-10 left-10 w-28 h-28 glass flex flex-col items-center justify-center gap-3 hover:bg-purple-600/30 hover:border-accent transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-float">
                <FaMagic className="text-4xl gradient-text" />
                <p className="text-xs font-bold">Design</p>
              </div>

              <div className="absolute top-1/2 right-10 w-28 h-28 glass flex flex-col items-center justify-center gap-3 hover:bg-purple-600/30 hover:border-accent transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-float" style={{ animationDelay: '1s' }}>
                <FaCode className="text-4xl gradient-text" />
                <p className="text-xs font-bold">Development</p>
              </div>

              <div className="absolute bottom-10 left-10 w-28 h-28 glass flex flex-col items-center justify-center gap-3 hover:bg-purple-600/30 hover:border-accent transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-float" style={{ animationDelay: '2s' }}>
                <FaChartLine className="text-4xl gradient-text" />
                <p className="text-xs font-bold">Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
