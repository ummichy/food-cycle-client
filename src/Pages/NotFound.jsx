import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 px-6">
      <h1 className="text-9xl font-extrabold mb-4 select-none tracking-wide text-gray-800 dark:text-gray-200 animate-bounce">
        404
      </h1>
      <p className="text-lg text-center max-w-lg mb-8 text-gray-600 dark:text-gray-300 leading-relaxed">
        Oops! The page you are looking for isn’t here.  
        It might have been moved or never existed in the first place.
      </p>
      <Link
        to="/"
        className="inline-block px-8 py-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 text-white dark:text-gray-900 rounded-full text-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
