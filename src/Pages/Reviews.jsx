import React from "react";

const reviews = [
  {
    id: 1,
    name: "Rahim",
    location: "Dhaka",
    rating: 5,
    comment:
      "The Food Cycle helped me donate surplus food easily and made a real difference in my community.",
  },
  {
    id: 2,
    name: "Shila",
    location: "Chittagong",
    rating: 4,
    comment:
      "I found fresh food donations nearby and saved money while reducing waste. Highly recommended!",
  },
  {
    id: 3,
    name: "Amina",
    location: "Sylhet",
    rating: 5,
    comment:
      "This platform is a game-changer for fighting food waste and helping those in need.",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div aria-label={`Rating: ${rating} out of 5 stars`} role="img" className="text-yellow-500 flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
};

const Reviews = () => {
  return (
    <section
      aria-labelledby="reviews-heading"
      className="max-w-5xl mx-auto px-6 py-16"
    >
      <h2
        id="reviews-heading"
        className="text-3xl font-semibold text-center mb-12"
      >
        Customer Reviews
      </h2>

      <div className="space-y-10">
        {reviews.map(({ id, name, location, rating, comment }) => (
          <article
            key={id}
            className="border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <StarRating rating={rating} />
            <p className="mt-4 text-gray-800 italic">“{comment}”</p>
            <p className="mt-6 font-semibold">{name}</p>
            <p className="text-gray-500 text-sm">{location}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
