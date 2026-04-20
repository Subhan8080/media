'use client';

import { useState } from 'react';
import Modal from './Modal';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setModalMessage('Please enter your email address');
      alert('Please enter your email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setModalMessage('You have been added to your waiting list!');
        setShowModal(true);
        setEmail('');
      } else {
        const data = await response.json();
        alert(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 bg-white/5 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:bg-white/10 transition-all duration-300 focus:shadow-glow"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="btn-primary whitespace-nowrap disabled:opacity-50"
          >
            {loading ? 'Subscribing...' : 'Notify Me'}
          </button>
        </div>
        <p className="text-xs text-gray-500">We'll notify you when we launch</p>
      </form>

      <Modal
        isOpen={showModal}
        title="Welcome!"
        message={modalMessage}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}

