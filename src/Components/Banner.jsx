import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
  return (
    <section
      aria-label="Food sharing banner"
      className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background image with zoom animation */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center transform scale-105 animate-zoomIn"
        style={{
          backgroundImage: 'url(https://i.ibb.co/sd5dk7Kf/pexels-pixabay-262978.jpg)',
        }}
      />

      {/* Blur & gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 backdrop-blur-xs"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl text-center px-6 text-white pt-20">
        <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl mb-4 leading-tight drop-shadow-xl animate-fadeInUp">
          Share Meals, <br />
          <span className="relative inline-block">
            Spread Happiness
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-white rounded opacity-70 animate-underlineExpand"></span>
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-light max-w-3xl mx-auto mb-12 drop-shadow-md animate-fadeInUp delay-150">
          Help reduce food waste and bring joy to someone’s plate. <br />
          Your contribution matters — every meal counts.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 flex-wrap">
          <Link to="/available-foods">
            <button className="px-12 py-4 bg-white hover:bg-gray-100 text-black font-semibold rounded-full shadow-lg transition">
              Explore Available Foods
            </button>
          </Link>
          <Link to="/add-food">
            <button className="px-12 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition">
              Donate Food Now
            </button>
          </Link>
        </div>
      </div>

      {/* Floating icons */}
      <div className="absolute top-10 left-10 opacity-30 animate-floatSlow">
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>
      <div className="absolute bottom-12 right-12 opacity-20 animate-floatSlow delay-500">
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="10" />
        </svg>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
        @keyframes zoomIn {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        .animate-zoomIn {
          animation: zoomIn 20s ease-in-out infinite alternate;
        }
        @keyframes underlineExpand {
          0% { width: 0; }
          100% { width: 100%; }
        }
        .animate-underlineExpand {
          animation: underlineExpand 1s ease forwards;
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-floatSlow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
};

export default Banner;
