import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 md:px-16"
    >
      {/* Contact Header */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-bold text-center mb-6"
      >
        Get in Touch
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="w-full max-w-lg space-y-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          Send Message
        </button>
      </motion.form>

      {/* Copyright Section */}
      <div className="mt-12 w-full text-center border-t border-gray-700 pt-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Ritish Kumar. All Rights Reserved.
      </div>
    </section>
  );
};

export default Contact;
