import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-32 bg-gradient-to-b from-primary-50/30 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-secondary-800 dark:to-secondary-900 rounded-3xl mb-8 shadow-large animate-bounce">
            <Mail className="w-12 h-12 text-primary-600 dark:text-secondary-400" />
          </div>
          <h2 className="text-5xl font-playfair font-bold text-gray-900 dark:text-white mb-6 text-shadow">Get in Touch</h2>
          <p className="text-xl font-inter text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10 p-10 bg-white dark:bg-gray-800 rounded-3xl shadow-large transform hover:scale-105 transition-all duration-500 border border-gray-100 dark:border-gray-700 animate-slide-in-left">
            <div className="space-y-8">
              <h3 className="text-3xl font-playfair font-semibold text-gray-900 dark:text-white mb-8">Contact Information</h3>
              
              <div className="flex items-center space-x-6 group cursor-pointer">
                <div className="p-4 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-secondary-800 dark:to-secondary-900 rounded-2xl group-hover:from-primary-200 group-hover:to-primary-300 dark:group-hover:from-secondary-700 dark:group-hover:to-secondary-800 transition-all duration-300 shadow-medium">
                  <Mail className="w-7 h-7 text-primary-600 dark:text-secondary-400" />
                </div>
                <div>
                  <p className="text-base font-poppins font-medium text-gray-500 dark:text-gray-400 mb-1">Email</p>
                  <a href="mailto:priyankanath5050@gmail.com" className="text-lg font-inter text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-secondary-400 transition-colors duration-300">
                    priyankanath5050@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group cursor-pointer">
                <div className="p-4 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-secondary-800 dark:to-secondary-900 rounded-2xl group-hover:from-primary-200 group-hover:to-primary-300 dark:group-hover:from-secondary-700 dark:group-hover:to-secondary-800 transition-all duration-300 shadow-medium">
                  <Phone className="w-7 h-7 text-primary-600 dark:text-secondary-400" />
                </div>
                <div>
                  <p className="text-base font-poppins font-medium text-gray-500 dark:text-gray-400 mb-1">Phone</p>
                  <a href="tel:+919395604326" className="text-lg font-inter text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-secondary-400 transition-colors duration-300">
                    +91 9395604326
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group cursor-pointer">
                <div className="p-4 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-secondary-800 dark:to-secondary-900 rounded-2xl group-hover:from-primary-200 group-hover:to-primary-300 dark:group-hover:from-secondary-700 dark:group-hover:to-secondary-800 transition-all duration-300 shadow-medium">
                  <MapPin className="w-7 h-7 text-primary-600 dark:text-secondary-400" />
                </div>
                <div>
                  <p className="text-base font-poppins font-medium text-gray-500 dark:text-gray-400 mb-1">Location</p>
                  <span className="text-lg font-inter text-gray-700 dark:text-gray-300">
                    Lala, Assam, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 p-10 bg-white dark:bg-gray-800 rounded-3xl shadow-large border border-gray-100 dark:border-gray-700 animate-slide-in-right">
            <h3 className="text-3xl font-playfair font-semibold text-gray-900 dark:text-white mb-8">Send a Message</h3>
            
            <div className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white font-inter focus:ring-2 focus:ring-primary-500 dark:focus:ring-secondary-400 focus:border-transparent transition-all duration-300 shadow-soft focus:shadow-medium"
                  required
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white font-inter focus:ring-2 focus:ring-primary-500 dark:focus:ring-secondary-400 focus:border-transparent transition-all duration-300 shadow-soft focus:shadow-medium"
                  required
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white font-inter focus:ring-2 focus:ring-primary-500 dark:focus:ring-secondary-400 focus:border-transparent transition-all duration-300 resize-none shadow-soft focus:shadow-medium"
                  required
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full bg-gradient-to-r from-primary-500 to-primary-600 dark:from-secondary-600 dark:to-secondary-700 text-white font-poppins font-semibold py-4 px-8 rounded-2xl hover:from-primary-600 hover:to-primary-700 dark:hover:from-secondary-700 dark:hover:to-secondary-800 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 shadow-large hover:shadow-xl hover:scale-105"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-6 h-6" />
                  <span className="text-lg">Message Sent!</span>
                </>
              ) : (
                <>
                  <Send className="w-6 h-6" />
                  <span className="text-lg">Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}