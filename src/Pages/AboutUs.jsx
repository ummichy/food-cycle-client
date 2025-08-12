import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="relative overflow-hidden">
    
      <svg
        className="absolute top-0 left-0 w-full -translate-y-24 md:-translate-y-32"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fill="#4B5563"
          fillOpacity="0.15"
          d="M0,64L60,96C120,128,240,192,360,197.3C480,203,600,149,720,122.7C840,96,960,96,1080,106.7C1200,117,1320,139,1380,149.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-32 grid md:grid-cols-12 gap-12 items-center">
        
        <div className="md:col-span-7 space-y-8" data-aos="fade-right">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900 animate-gradient-x">
            About <span className="text-gray-900">TheFoodCycle</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
            TheFoodCycle is a bold initiative dedicated to reducing food waste
            and feeding communities. We connect generous donors and those in
            need, creating a sustainable impact one meal at a time.
          </p>

          <ul className="space-y-4 text-gray-600">
            {[
              "Community-driven platform built on trust and compassion.",
              "Cutting-edge technology for easy food sharing and requests.",
              "Commitment to sustainability, reducing hunger and waste.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start space-x-3"
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <span className="inline-block mt-1 text-gray-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>

          {/* <Link
            to="/login"
            className="inline-block mt-8 px-8 py-3 rounded-full bg-black text-white font-semibold shadow-lg hover:bg-gray-700 transition duration-300 text-center"
          >
            Join Our Mission
          </Link> */}
        </div>

       
        <div className="md:col-span-5 relative" data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1350&q=80"
            alt="Sharing food"
            className="rounded-3xl shadow-2xl"
          />
          <div
            className="absolute -top-12 -right-12 bg-white rounded-3xl shadow-xl p-6 w-72"
            style={{ backdropFilter: "blur(12px)" }}
            data-aos="zoom-in"
            data-aos-delay={300}
          >
            <h3 className="font-semibold text-gray-700 mb-2">Our Impact</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Since launching, TheFoodCycle has connected over 10,000 donors
              with thousands of recipients, preventing tons of food waste.
            </p>
          </div>
        </div>
      </div>

    
      <svg
        className="absolute bottom-0 left-0 w-full translate-y-24 md:translate-y-32"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fill="#4B5563"
          fillOpacity="0.15"
          d="M0,288L60,272C120,256,240,224,360,197.3C480,171,600,149,720,144C840,139,960,149,1080,138.7C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>

     
      <style>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
