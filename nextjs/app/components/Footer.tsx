'use client';

import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-black/40 border-t-2 border-cyan-400/30 backdrop-blur-sm">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-poppins font-bold mb-4 gradient-text bg-clip-text" style={{backgroundImage: 'linear-gradient(135deg, #ff0099, #00ffff)'}}>
              Buzzcraft Studios
            </h3>
            <p className="text-cyan-100 mb-6">
              Elevate your brand. Transform your business.
            </p>
            <div className="flex gap-3 md:gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 md:w-10 md:h-10 relative flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-125 hover:shadow-glow-bright" style={{border: '2px solid rgba(0, 255, 255, 0.4)', boxShadow: '0 0 15px rgba(0, 255, 255, 0.2)'}}>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/0 to-cyan-400/0 rounded-lg group-hover:from-pink-600/20 group-hover:to-cyan-400/20 transition-all duration-300"></div>
                <FaLinkedin className="text-lg md:text-base relative z-10 text-cyan-400 group-hover:text-pink-500 transition-colors duration-300" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 md:w-10 md:h-10 relative flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-125 hover:shadow-glow-bright" style={{border: '2px solid rgba(255, 0, 153, 0.4)', boxShadow: '0 0 15px rgba(255, 0, 153, 0.2)'}}>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 to-pink-600/0 rounded-lg group-hover:from-cyan-400/20 group-hover:to-pink-600/20 transition-all duration-300"></div>
                <FaGithub className="text-lg md:text-base relative z-10 text-pink-500 group-hover:text-cyan-400 transition-colors duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 md:w-10 md:h-10 relative flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-125 hover:shadow-glow-bright" style={{border: '2px solid rgba(255, 255, 0, 0.4)', boxShadow: '0 0 15px rgba(255, 255, 0, 0.2)'}}>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/0 to-yellow-400/0 rounded-lg group-hover:from-pink-600/20 group-hover:to-yellow-400/20 transition-all duration-300"></div>
                <FaInstagram className="text-lg md:text-base relative z-10 text-yellow-400 group-hover:text-pink-500 transition-colors duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 md:w-10 md:h-10 relative flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-125 hover:shadow-glow-bright" style={{border: '2px solid rgba(0, 255, 255, 0.4)', boxShadow: '0 0 15px rgba(0, 255, 255, 0.2)'}}>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-cyan-400/0 rounded-lg group-hover:from-yellow-400/20 group-hover:to-cyan-400/20 transition-all duration-300"></div>
                <FaTwitter className="text-lg md:text-base relative z-10 text-cyan-400 group-hover:text-yellow-400 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-poppins font-bold text-cyan-300 mb-4">
              Quick Links
            </h5>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-cyan-100 hover:text-pink-500 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-cyan-100 hover:text-pink-500 transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-cyan-100 hover:text-pink-500 transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-poppins font-bold text-cyan-300 mb-4">
              Services
            </h5>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-cyan-100 hover:text-pink-500 transition-colors duration-300">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-cyan-100 hover:text-pink-500 transition-colors duration-300">
                  Branding
                </a>
              </li>
              <li>
                <a href="#" className="text-cyan-100 hover:text-pink-500 transition-colors duration-300">
                  Development
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-poppins font-bold text-cyan-300 mb-4">
              Contact
            </h5>
            <p className="text-cyan-100 mb-3">
              Email: <a href="mailto:hello@buzzcraft.com" className="text-pink-500 hover:underline hover:text-pink-400">hello@buzzcraft.com</a>
            </p>
            <p className="text-cyan-100">
              Phone: <a href="tel:+15551234567" className="text-pink-500 hover:underline hover:text-pink-400">+1 (555) 123-4567</a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-cyan-400/20 pt-8 text-center text-cyan-400/60 text-sm">
          <p>&copy; {currentYear} Buzzcraft Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
