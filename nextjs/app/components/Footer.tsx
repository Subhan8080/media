'use client';

import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-zinc-950/50 border-t border-zinc-800">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-poppins font-bold mb-4 text-white">
              Buzzcraft Studios
            </h3>
            <p className="text-gray-400 mb-6">
              Elevate your brand. Transform your business.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass flex items-center justify-center hover:border-accent hover:bg-purple-600/30 transition-all duration-300">
                <FaLinkedin className="text-lg" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass flex items-center justify-center hover:border-accent hover:bg-purple-600/30 transition-all duration-300">
                <FaInstagram className="text-lg" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass flex items-center justify-center hover:border-accent hover:bg-purple-600/30 transition-all duration-300">
                <FaFacebook className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-poppins font-bold text-white mb-4">
              Quick Links
            </h5>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-poppins font-bold text-white mb-4">
              Services
            </h5>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  Branding
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  Development
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-poppins font-bold text-white mb-4">
              Contact
            </h5>
            <p className="text-gray-400 mb-3">
              Email: <a href="mailto:hello@buzzcraft.com" className="text-accent hover:underline">hello@buzzcraft.com</a>
            </p>
            <p className="text-gray-400">
              Phone: <a href="tel:+15551234567" className="text-accent hover:underline">+1 (555) 123-4567</a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-zinc-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Buzzcraft Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
