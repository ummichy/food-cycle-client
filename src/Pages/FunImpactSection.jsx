import React from 'react';

const FunImpactSection = () => {
  return (
    <section
      aria-label="Fun food impact section"
      className="relative bg-gradient-to-tr from-pink-100 via-purple-100 to-indigo-100 py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-6 animate-fadeDown">
          Together, We Make a Difference 💜
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto animate-fadeDown delay-150">
          Your food donations turn into shared meals and smiles. Let’s celebrate how small actions make a big impact.
        </p>

        <div className="flex justify-center flex-wrap gap-10 mt-10">
          {/* Icon 1 */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white text-4xl font-bold flex items-center justify-center shadow-xl hover:scale-110 hover:rotate-[10deg] transition-transform duration-700 animate-float1 cursor-pointer">
            🎉
          </div>

          {/* Icon 2 */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 text-white text-4xl font-bold flex items-center justify-center shadow-xl hover:scale-110 hover:-rotate-[12deg] transition-transform duration-700 animate-float2 cursor-pointer">
            🍱
          </div>

          {/* Icon 3 */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-700 text-white text-4xl font-bold flex items-center justify-center shadow-xl hover:scale-110 hover:rotate-[12deg] transition-transform duration-700 animate-float3 cursor-pointer">
            🤝
          </div>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style>
        {`
        @keyframes fadeDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes float1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes float2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }

        @keyframes float3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .animate-fadeDown {
          animation: fadeDown 1s ease-out forwards;
        }

        .animate-float1 {
          animation: float1 3s ease-in-out infinite;
        }

        .animate-float2 {
          animation: float2 3.2s ease-in-out infinite;
        }

        .animate-float3 {
          animation: float3 3.5s ease-in-out infinite;
        }

        .delay-150 {
          animation-delay: 0.15s;
        }
        `}
      </style>
    </section>
  );
};

export default FunImpactSection;
