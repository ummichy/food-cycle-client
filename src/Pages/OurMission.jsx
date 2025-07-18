// OurMission.jsx
import React from 'react';

const OurMission = () => {
   const steps = [
    {
      id: 1,
      title: '1. Donate Surplus Food',
      desc: 'Sign in and share extra meals you have. Add food details like quantity, location, and expiry.',
      icon: '🍱',
    },
    {
      id: 2,
      title: '2. Get Matched Instantly',
      desc: 'Your food is instantly shown to those who need it. They can request and arrange pickup.',
      icon: '🔄',
    },
    {
      id: 3,
      title: '3. Spread Joy',
      desc: 'You help reduce food waste and bring happiness to someone’s day. Every meal matters.',
      icon: '🎉',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map(step => (
            <div
              key={step.id}
              className="bg-white rounded-xl shadow-md border border-purple-100 p-6 hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
