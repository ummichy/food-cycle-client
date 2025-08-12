import React, { useState } from "react";

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
    // Here, you’d normally send data to backend or email service
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 text-center mb-8">
          Need Help? Contact Support
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <p>
              Our support team is here to assist you. Reach out anytime via
              phone, email, or use the form.
            </p>
            <div>
              <h3 className="font-semibold text-lg mb-2">Contact Details</h3>
              <p>
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:support@thefoodcycle.com"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  support@thefoodcycle.com
                </a>
              </p>
              <p>
                <strong>Address:</strong> 123 Food St, Cityville, Country
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="/faq"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Support Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-6"
          >
            {submitted && (
              <div className="text-green-600 dark:text-green-400 font-semibold mb-4">
                Thank you! Your message has been sent.
              </div>
            )}

            <div>
              <label
                htmlFor="name"
                className="block mb-1 text-gray-700 dark:text-gray-300 font-medium"
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
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-gray-700 dark:text-gray-300 font-medium"
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
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-1 text-gray-700 dark:text-gray-300 font-medium"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white resize-none transition"
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white rounded-md py-3 font-semibold hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black transition"
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
