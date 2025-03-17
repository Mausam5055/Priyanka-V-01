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
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-yellow-100 dark:bg-gray-800 rounded-full mb-4 animate-bounce">
            <Mail className="w-12 h-12 text-yellow-500 dark:text-blue-400" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-10 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-yellow-100 dark:bg-gray-700 rounded-full group-hover:bg-yellow-200 dark:group-hover:bg-gray-600 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-yellow-500 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <a href="mailto:priyankanath5050@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-blue-400 transition-colors duration-300">
                    priyankanath5050@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-yellow-100 dark:bg-gray-700 rounded-full group-hover:bg-yellow-200 dark:group-hover:bg-gray-600 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-yellow-500 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <a href="tel:+919395604326" className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-blue-400 transition-colors duration-300">
                    +91 9395604326
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-yellow-100 dark:bg-gray-700 rounded-full group-hover:bg-yellow-200 dark:group-hover:bg-gray-600 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-yellow-500 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <span className="text-gray-700 dark:text-gray-300">
                    Lala, Assam, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send a Message</h3>
            
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full bg-yellow-500 dark:bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 dark:hover:bg-blue-600 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>Message Sent!</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}