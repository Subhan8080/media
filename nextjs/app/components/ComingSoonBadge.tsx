'use client';

export default function ComingSoonBadge() {
  return (
    <section className="py-20 text-center relative">
      <div className="container animate-fade-in-up">
        <span className="inline-block px-5 py-2 bg-purple-900/30 border border-purple-600/50 rounded-full text-sm font-semibold text-purple-300 mb-6">
          🚀 Coming Soon
        </span>

        <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-6 gradient-text">
          Something Amazing is Brewing
        </h2>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Our platform will revolutionize how agencies and businesses collaborate on creative and technical projects.
        </p>
      </div>
    </section>
  );
}
