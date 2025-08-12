import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="mt-20 mb-10 max-w-3xl mx-auto px-6 py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <h1 className="text-3xl font-bold mb-8 text-center">Terms &amp; Conditions</h1>

      <p className="mb-6">
        By using The Food Cycle, you agree to our terms and commit to responsible and lawful use of the platform.
      </p>

      <p className="mb-6">
        Provide accurate information and protect your account credentials to ensure security.
      </p>

      <p className="mb-6">
        We respect your privacy—please review our Privacy Policy to learn how your data is handled.
      </p>

      <p className="mb-6">
        Prohibited content includes anything illegal or harmful. Violations may lead to account suspension.
      </p>

      <p className="mb-6">
        The Food Cycle isn’t liable for damages from use of the platform or donated items. Use at your own risk.
      </p>

      <p className="mb-6">
        We may update these terms anytime; continued use means you accept any changes.
      </p>

      <p>
        Questions? Contact us at{" "}
        <a
          href="mailto:support@thefoodcycle.com"
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
        >
          foodcycle@gmail.com
        </a>
        .
      </p>
    </section>
  );
};

export default TermsAndConditions;
