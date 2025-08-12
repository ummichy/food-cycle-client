import React, { useState } from "react";

const faqs = [
  {
    question: "What is The Food Cycle?",
    answer:
      "The Food Cycle is a platform that connects food donors with those in need, helping reduce food waste and fight hunger.",
  },
  {
    question: "How can I donate food?",
    answer:
      "You can create a donor account, list your surplus food, and choose a pickup or drop-off time that works for you.",
  },
  {
    question: "Is the service free?",
    answer:
      "Yes, our service is completely free for both donors and recipients.",
  },
  {
    question: "How do I know my food is safe?",
    answer:
      "We follow strict safety guidelines and encourage donors to only share fresh, properly stored food.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 transition-colors duration-500 mt-10">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
          Get answers to the most common questions about our platform.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="group border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-5 text-left text-gray-800 dark:text-gray-100 font-medium bg-white dark:bg-gray-800 rounded-xl focus:outline-none transition-colors duration-300 group-hover:bg-gray-50 dark:group-hover:bg-gray-700"
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-green-500" : "text-gray-400"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
