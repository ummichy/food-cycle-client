import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider'; // adjust path as needed

const headlineImages = [
  'https://i.ibb.co/sdK8f13J/unnamed.png',
  'https://i.ibb.co/5W6HffK2/unnamed-6.png',
  'https://i.ibb.co/0p1GBStY/unnamed-7.png',
  'https://i.ibb.co/jkmB40XW/unnamed-8.png',
  'https://i.ibb.co/rGQdv7GP/unnamed-9.png',
  'https://i.ibb.co/RTHy9kjv/unnamed-1.png',
  'https://i.ibb.co/23nzsqpP/unnamed-2.png',
  'https://i.ibb.co/yMJZzbF/unnamed-3.png',
  'https://i.ibb.co/pjJyZYK9/unnamed-4.png',
  'https://i.ibb.co/wN1MDTT2/unnamed-5.png',
];

const Supporters = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlePartnerClick = () => {
    if (!user) {
      // Not logged in → redirect to login
      navigate('/login');
    } else {
      // Logged in → show SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Thank you!',
        text: 'Your partnership has been successfully registered.',
        confirmButtonColor: '#3B1F2B'
      });
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#ddd9d6] to-[#f4f2f0]  py-24 px-4 text-center">
      <h2 className="text-5xl sm:text-6xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3B1F2B] via-[#5C3A4D] to-[#9E8C95] mb-4">
        Supported By Our Partners
      </h2>

      <p className="text-[#9E8C95] font-medium max-w-3xl mx-auto mb-12">
        These amazing organizations stand with us in our mission to reduce food waste, support sustainability, and uplift communities around the world.
      </p>

      <div className="overflow-hidden w-full py-8">
        <div className="flex animate-marquee gap-48 items-center">
          {headlineImages.concat(headlineImages).map((img, index) => (
            <img
              key={index}
              src={img}
              alt="partner"
              className="h-40 sm:h-44 md:h-48 object-contain hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <button
          onClick={handlePartnerClick}
          className="bg-[#3B1F2B] text-white hover:bg-white hover:text-black border border-black font-semibold px-8 py-4 rounded-full text-lg transition duration-300 shadow-md hover:shadow-xl"
        >
          Become a Partner
        </button>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Supporters;
