/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff0099',
        'primary-light': '#ff33cc',
        'primary-dark': '#cc0066',
        accent: '#00ffff',
        'accent-2': '#ffff00',
        'accent-3': '#00ff88',
        'accent-4': '#ff00ff',
        'bg-dark': '#0a0015',
        'bg-darker': '#000000',
        'bg-card': '#1a0033',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(135deg, #000000 0%, #0a0015 50%, #0f0005 100%)',
        'gradient-accent': 'linear-gradient(135deg, #ff0099, #00ffff)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'blob-move': 'blbmove 8s ease-in-out infinite',
        'slide-down': 'slideDown 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.8s ease-out',
        'fade-in-right': 'fadeInRight 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'spin-3d': 'spin3d 6s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'rotate-3d': 'rotate3d 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blbmove: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(30px, 30px)' },
        },
        slideDown: {
          from: { transform: 'translateY(-100%)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInLeft: {
          from: { opacity: '0', transform: 'translateX(-50px) rotateY(20deg)' },
          to: { opacity: '1', transform: 'translateX(0) rotateY(0deg)' },
        },
        fadeInRight: {
          from: { opacity: '0', transform: 'translateX(50px) rotateY(-20deg)' },
          to: { opacity: '1', transform: 'translateX(0) rotateY(0deg)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(40px) rotateX(10deg)' },
          to: { opacity: '1', transform: 'translateY(0) rotateX(0deg)' },
        },
        spin3d: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
          '33%': { transform: 'rotateX(10deg) rotateY(45deg) rotateZ(0deg)' },
          '66%': { transform: 'rotateX(-10deg) rotateY(-45deg) rotateZ(0deg)' },
          '100%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        rotate3d: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '50%': { transform: 'rotateX(20deg) rotateY(45deg)' },
          '100%': { transform: 'rotateX(0deg) rotateY(0deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glow: '0 0 30px rgba(0, 255, 255, 0.3), 0 0 60px rgba(255, 0, 153, 0.2)',
        'glow-purple': '0 0 30px rgba(255, 0, 153, 0.4)',
        'glow-bright': '0 0 50px rgba(0, 255, 255, 0.6), 0 0 100px rgba(255, 0, 153, 0.4)',
      },
    },
  },
  plugins: [],
};
