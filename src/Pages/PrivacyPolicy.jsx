import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 mt-28 mb-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>

      <p className="mb-6">
        At The Food Cycle, your privacy matters. We collect only necessary data like your name and email to provide our services.
      </p>
      <p className="mb-6">
        We do not sell your data. Your information is used to improve the platform and communicate with you.
      </p>

      <p className="mb-6">
        Cookies help us enhance your experience. You can control them through your browser settings.
      </p>

      <p className="mb-6">
        We protect your data with industry-standard security measures.
      </p>

      <p className="mb-6">
        You can contact us anytime to access, update, or delete your data.
      </p>

      {/* <p>
        Questions? Email us at{" "}
        <a
          href="mailto:support@thefoodcycle.com"
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
        >
          support@thefoodcycle.com
        </a>
        .
      </p> */}
    </section>
  );
};

export default PrivacyPolicy;
