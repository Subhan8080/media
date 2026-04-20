'use client';

import Link from 'next/link';
import { FaRocket } from 'react-icons/fa';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md border-b border-zinc-800 z-50 animate-slide-down">
      <div className="container flex justify-between items-center h-[70px]">
        <Link href="/home" className="flex items-center gap-2 text-xl font-bold">
          <FaRocket className="text-accent text-2xl" />
          <span>Buzzcraft Studios</span>
        </Link>

        <div className="flex gap-10 animate-fade-in-right">
          <a href="#about" className="text-gray-400 text-sm font-medium hover:text-accent transition-all duration-300 relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-accent after:transition-all after:duration-300 hover:after:w-full">
            About
          </a>
          <a href="#services" className="text-gray-400 text-sm font-medium hover:text-accent transition-all duration-300 relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-accent after:transition-all after:duration-300 hover:after:w-full">
            Services
          </a>
          <a href="#footer" className="text-gray-400 text-sm font-medium hover:text-accent transition-all duration-300 relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-accent after:transition-all after:duration-300 hover:after:w-full">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
