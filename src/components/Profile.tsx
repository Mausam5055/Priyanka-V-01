import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

export default function Profile() {
  return (
    <section className="relative pt-28 pb-20 bg-gradient-to-br from-primary-50/90 via-white to-white dark:from-gray-900 dark:via-gray-900/95 dark:to-gray-800 overflow-hidden">
      {/* Minimal Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-100/5 to-transparent dark:from-secondary-500/5 dark:to-transparent"></div>
        
        {/* Large soft circles */}
        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-gradient-to-b from-primary-100/20 to-transparent dark:from-secondary-400/10 dark:to-transparent animate-float-slow blur-lg"></div>
        <div className="absolute -left-24 top-1/3 w-80 h-80 rounded-full bg-gradient-to-tr from-primary-200/10 to-transparent dark:from-secondary-300/5 dark:to-transparent animate-float-reverse blur-lg"></div>
        
        {/* Minimal decorative elements */}
        <div className="absolute right-1/4 top-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-primary-100/10 to-transparent dark:from-secondary-400/5 dark:to-transparent animate-float blur-xl"></div>
        <div className="absolute left-1/3 bottom-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-primary-50/20 to-transparent dark:from-secondary-300/10 dark:to-transparent animate-float-reverse blur-xl"></div>
        
        {/* Subtle light beams */}
        <div className="absolute left-1/4 top-1/2 w-48 h-0.5 bg-gradient-to-r from-primary-200/20 to-transparent dark:from-secondary-300/10 rotate-45 animate-pulse"></div>
        <div className="absolute right-1/4 bottom-1/3 w-48 h-0.5 bg-gradient-to-l from-primary-200/20 to-transparent dark:from-secondary-300/10 -rotate-45 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center animate-fade-in-up">
          {/* Profile Image with Animation */}
          <div className="relative w-56 h-56 mb-10 group">
            <div className="absolute inset-0 rounded-full bg-primary-200 dark:bg-secondary-500 animate-pulse"></div>
            <img
              src="/assets/profile.webp"
              alt="Priyanka Nath Mazumdar"
              className="relative w-full h-full object-cover rounded-full border-4 border-primary-400 dark:border-secondary-400 shadow-large transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 dark:from-secondary-400 dark:to-secondary-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl font-playfair font-bold text-gray-900 dark:text-white text-center mb-4 relative text-shadow-lg animate-fade-in-down">
            Priyanka Nath Mazumdar
          </h1>
          <h2 className="text-2xl font-poppins font-medium text-primary-600 dark:text-secondary-400 text-center mb-8 animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
            B.Sc. Biotechnology Student
          </h2>

          {/* Bio */}
          <p className="text-lg font-inter text-gray-600 dark:text-gray-300 text-center max-w-3xl mb-12 relative z-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            B.Sc. Biotechnology student with expertise in molecular biology, lab research, and microbial techniques. 
            Skilled in PCR, DNA extraction, and gel electrophoresis. Passionate about research with interests in 
            painting and literature that enhance creativity and critical thinking.
          </p>

          {/* Social Links */}
          <div className="flex space-x-8 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://github.com/YourGithub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-secondary-400 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 shadow-soft hover:shadow-medium"
            >
              <FaGithub className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/priyanka-nath-mazumdar-977b93223/?trk=people-guest_people_search-card&originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-secondary-400 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 shadow-soft hover:shadow-medium"
            >
              <FaLinkedin className="w-7 h-7" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-secondary-400 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 shadow-soft hover:shadow-medium"
            >
              <FaEnvelope className="w-7 h-7" />
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center backdrop-blur-md bg-white/40 dark:bg-gray-800/40 p-6 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105 border border-white/20 dark:border-gray-700/20">
              <div className="text-3xl font-bold font-poppins text-primary-600 dark:text-secondary-400 mb-2">3+</div>
              <div className="text-sm font-inter font-medium text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>
            <div className="text-center backdrop-blur-md bg-white/40 dark:bg-gray-800/40 p-6 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105 border border-white/20 dark:border-gray-700/20">
              <div className="text-3xl font-bold font-poppins text-primary-600 dark:text-secondary-400 mb-2">20+</div>
              <div className="text-sm font-inter font-medium text-gray-600 dark:text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center backdrop-blur-md bg-white/40 dark:bg-gray-800/40 p-6 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105 border border-white/20 dark:border-gray-700/20">
              <div className="text-3xl font-bold font-poppins text-primary-600 dark:text-secondary-400 mb-2">15+</div>
              <div className="text-sm font-inter font-medium text-gray-600 dark:text-gray-300">Lab Techniques</div>
            </div>
            <div className="text-center backdrop-blur-md bg-white/40 dark:bg-gray-800/40 p-6 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105 border border-white/20 dark:border-gray-700/20">
              <div className="text-3xl font-bold font-poppins text-primary-600 dark:text-secondary-400 mb-2">100%</div>
              <div className="text-sm font-inter font-medium text-gray-600 dark:text-gray-300">Dedication</div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-secondary-600 dark:to-secondary-700 text-white font-poppins font-semibold rounded-2xl hover:from-primary-600 hover:to-primary-700 dark:hover:from-secondary-700 dark:hover:to-secondary-800 transition-all duration-300 shadow-large hover:shadow-xl hover:scale-105 relative z-10 animate-scale-in" style={{ animationDelay: '1s' }}>
            <FaDownload className="mr-3 text-lg" />
            <span className="text-lg">Download Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
}
