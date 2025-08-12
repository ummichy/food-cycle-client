import React, { useState } from "react";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";

const SupportSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-12">
          We're Here to Help
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-10 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              Our dedicated support team is ready to assist you with any inquiries or issues. Reach out anytime using the details below or the contact form.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <HiPhone className="w-8 h-8 text-black dark:text-green-400" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Phone
                  </h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <HiMail className="w-8 h-8 text-black dark:text-green-400" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Email
                  </h4>
                  <a
                    href="mailto:support@thefoodcycle.com"
                    className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 transition"
                  >
                    foodcycle@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <HiLocationMarker className="w-8 h-8 text-black dark:text-green-400" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Address
                  </h4>
                  <p>123 Food St, Cityville, Country</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Quick Links
              </h4>
              <ul className="space-y-2 text-blue-600 dark:text-blue-400">
                <li>
                  <a href="/faq" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Support Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col space-y-6"
          >
            {submitted && (
              <div className="text-green-700 dark:text-green-400 font-semibold bg-green-100 dark:bg-green-900 p-3 rounded-md">
                Thank you! Your message has been sent.
              </div>
            )}

            <div>
              <label
                htmlFor="name"
                className="block mb-2 font-semibold text-gray-900 dark:text-gray-100"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-black transition"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-semibold text-gray-900 dark:text-gray-100"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-black transition"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 font-semibold text-gray-900 dark:text-gray-100"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-black resize-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-700 text-white font-semibold py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-black transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
