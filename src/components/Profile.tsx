import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

export default function Profile() {
  return (
    <section className="relative pt-24 pb-12 bg-gradient-to-br from-yellow-50/90 via-white to-white dark:from-gray-900 dark:via-gray-900/95 dark:to-gray-800 overflow-hidden">
      {/* Minimal Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/5 to-transparent dark:from-blue-500/5 dark:to-transparent"></div>
        
        {/* Large soft circles */}
        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-gradient-to-b from-yellow-100/20 to-transparent dark:from-blue-400/10 dark:to-transparent animate-float-slow blur-lg"></div>
        <div className="absolute -left-24 top-1/3 w-80 h-80 rounded-full bg-gradient-to-tr from-yellow-200/10 to-transparent dark:from-blue-300/5 dark:to-transparent animate-float-reverse blur-lg"></div>
        
        {/* Minimal decorative elements */}
        <div className="absolute right-1/4 top-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-yellow-100/10 to-transparent dark:from-blue-400/5 dark:to-transparent animate-float blur-xl"></div>
        <div className="absolute left-1/3 bottom-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-yellow-50/20 to-transparent dark:from-blue-300/10 dark:to-transparent animate-float-reverse blur-xl"></div>
        
        {/* Subtle light beams */}
        <div className="absolute left-1/4 top-1/2 w-48 h-0.5 bg-gradient-to-r from-yellow-200/20 to-transparent dark:from-blue-300/10 rotate-45 animate-pulse"></div>
        <div className="absolute right-1/4 bottom-1/3 w-48 h-0.5 bg-gradient-to-l from-yellow-200/20 to-transparent dark:from-blue-300/10 -rotate-45 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center">
          {/* Profile Image with Animation */}
          <div className="relative w-48 h-48 mb-8 group">
            <div className="absolute inset-0 rounded-full bg-yellow-200 dark:bg-blue-500 animate-pulse"></div>
            <img
              src="/assets/profile.webp"
              alt="Priyanka Nath Mazumdar"
              className="relative w-full h-full object-cover rounded-full border-4 border-yellow-400 dark:border-blue-400 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-blue-400 dark:to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-2 relative">
            Priyanka Nath Mazumdar
          </h1>
          <h2 className="text-xl font-medium text-yellow-600 dark:text-blue-400 text-center mb-6">
            B.Sc. Biotechnology Student
          </h2>

          {/* Bio */}
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mb-8 relative z-10">
            Enthusiastic B.Sc. Biotechnology student with a solid foundation in lab
            research, molecular biology, and microbial techniques. Skilled in using lab
            equipment like PCR machines, centrifuges, and spectrophotometers, with
            expertise in DNA extraction and gel electrophoresis. Strong communicator
            and team player, with a passion for painting and reading novels that enhance
            creativity and critical thinking. Eager to contribute to research and grow in
            the biotechnology field.
          </p>

          {/* Social Links */}
          <div className="flex space-x-6 mb-8">
            <a
              href="https://github.com/YourGithub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/YourLinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-yellow-600 dark:text-blue-400">3+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-yellow-600 dark:text-blue-400">20+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-yellow-600 dark:text-blue-400">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Technologies</div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-yellow-600 dark:text-blue-400">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Client Satisfaction</div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="flex items-center px-6 py-3 bg-yellow-500 dark:bg-blue-600 text-white rounded-full hover:bg-yellow-600 dark:hover:bg-blue-700 transition-colors duration-300 shadow-lg relative z-10">
            <FaDownload className="mr-2" />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}