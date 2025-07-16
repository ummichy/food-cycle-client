import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = () => {
  const eventImages = [
    "https://i.ibb.co/PGx7wB86/pexels-photo-3777017.webp",
    "https://i.ibb.co/s9B2TQqr/pexels-photo-6925361.webp",
    "https://i.ibb.co/wrrGnzgz/pexels-photo-8199659.webp",
    "https://i.ibb.co/BVBJ5zdm/pexels-photo-1076081.webp",
    "https://i.ibb.co/Y7WVwKpq/free-photo-of-people-working-in-poly-tunnel.jpg",
    "https://i.ibb.co/QvhmTztY/istockphoto-1407169114-1024x1024.jpg",
   
  ];

  return (
    <div className="container mx-auto px-4 pb-10 lg:pb-24">
        <div className='md:px-8 px-4 md:pb-6 md:pt-5'>
<h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mt-8 lg:mt-20 mb-4 text-gray-800">
       Find Your Tribe, Follow Your Passion
      </h1>
      <p className='text-center mb-8 text-xl text-gray-600'>HobbyHub connects you with local groups that match your interests — from painting to hiking and everything in between.</p>
        </div>
      

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          navigation={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {eventImages.map((url, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl overflow-hidden shadow-lg h-52 hover:shadow-xl transition duration-300">
                <img
                  src={url}
                  alt={`Event ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;

