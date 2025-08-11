import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="newsletter-section py-16 px-6 sm:px-12 text-black  bg-gradient-to-t from-[#c2bcb7] via-[#ddd9d6] to-[#f4f2f0]"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2
          id="newsletter-heading"
          className="text-4xl font-extrabold mb-4 drop-shadow-lg"
        >
          Stay Connected — Join Our Newsletter
        </h2>
        <p className="mb-8 text-lg drop-shadow-md">
          Receive updates, food waste tips, and upcoming campaigns.
        </p>

        <AnimatePresence>
          {submitted ? (
            <motion.p
              key="thank-you"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-semibold bg-white bg-opacity-20 rounded p-4"
            >
              Thank you for subscribing!
            </motion.p>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row justify-center gap-4"
              noValidate
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-md px-4 py-3 border-2 flex-grow text-black placeholder-black focus:outline-none focus:ring focus:ring-black"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black hover:bg-black text-white font-semibold rounded-md px-6 py-3 shadow-lg transition"
              >
                Subscribe
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
