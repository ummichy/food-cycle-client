import React from "react";

const OurApproach = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-[#3B1F2B] via-[#5C3A4D] to-[#9E8C95] text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-5xl font-extrabold leading-tight mb-6" style={{ color: '#E6C9C9' }}>
            Redefining <br className="hidden md:block" />
            <span style={{ color: '#D8A7A7' }}>Food Systems</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#C8B6B6' }}>
            Our platform empowers communities by connecting food donors with those in need. We focus on minimizing food waste, ensuring access to nutritious meals, and building a sustainable food-sharing ecosystem.
          </p>
          <p className="text-md md:text-lg mb-8" style={{ color: '#B3A0A0' }}>
            By encouraging responsible giving and facilitating timely pickups, we help address the root causes of hunger and uplift lives—one meal at a time.
          </p>
          <button className="bg-[#D8A7A7] hover:bg-[#C18C8C] text-[#3B1F2B] font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg">
            Learn More
          </button>
        </div>

        {/* Video Container */}
        <div className="lg:w-1/2 w-full rounded-xl shadow-2xl overflow-hidden bg-white">
          <div
            className="relative w-full"
            style={{ paddingTop: "56.25%" }} // 16:9 Aspect Ratio
          >
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="/video.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              aria-label="Video showing our approach to ending hunger"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurApproach;
