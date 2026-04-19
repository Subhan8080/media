'use client';

import EmailForm from './EmailForm';

export default function CTA() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-purple-900/20 to-transparent border-t border-zinc-800">
      <div className="container text-center">
        <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-6 text-white animate-fade-in-up">
          Interested? Join Our Community
        </h2>

        <p className="text-lg text-gray-400 mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Be among the first to experience Buzzcraft Studios
        </p>

        <div className="max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <EmailForm />
        </div>
      </div>
    </section>
  );
}
