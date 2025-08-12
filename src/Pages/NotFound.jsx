import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6">
      <h1 className="text-9xl font-extrabold mb-6 select-none tracking-wide text-gray-800 dark:text-gray-200">
        404
      </h1>
      <p className="text-xl text-center max-w-lg mb-8 text-gray-700 dark:text-gray-300">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block px-8 py-3 bg-black text-white rounded-md text-lg font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
