'use client';

import { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';

interface ModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onClose: () => void;
  autoClose?: boolean;
}

export default function Modal({ isOpen, title, message, onClose, autoClose = true }: ModalProps) {
  useEffect(() => {
    if (isOpen && autoClose) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, autoClose, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] animate-fade-in">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-cyan-400/50 rounded-2xl p-8 max-w-sm mx-4 shadow-2xl animate-scale-in" style={{boxShadow: '0 0 40px rgba(0, 255, 255, 0.3), 0 0 80px rgba(255, 0, 153, 0.2)'}}>
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
            <FaCheck className="text-2xl text-white" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-3 gradient-text bg-clip-text" style={{backgroundImage: 'linear-gradient(135deg, #00ffff, #ff0099)'}}>
          {title}
        </h2>

        <p className="text-center text-cyan-100 mb-6">
          {message}
        </p>

        <button
          onClick={onClose}
          className="w-full px-4 py-3 bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-glow-bright"
        >
          Close
        </button>
      </div>
    </div>
  );
}
