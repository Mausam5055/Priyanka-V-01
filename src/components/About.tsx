import React from 'react';
import { User, Book, Palette, Code, Heart, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-b from-primary-50/50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-secondary-800 dark:to-secondary-900 rounded-2xl mb-8 shadow-medium">
            <User className="w-10 h-10 text-primary-600 dark:text-secondary-400" />
          </div>
          <h2 className="text-5xl font-playfair font-bold text-gray-900 dark:text-white mb-6 text-shadow">About Me</h2>
          <p className="text-xl font-inter text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I am a passionate professional with a deep interest in technology and innovation.
            My journey in this field has been driven by curiosity and a constant desire to learn
            and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10 animate-slide-in-left">
            {/* Bio Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-large hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-poppins font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-secondary-800 dark:to-secondary-900 rounded-xl flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-primary-600 dark:text-secondary-400" />
                </div>
                Education & Background
              </h3>
              <p className="text-lg font-inter text-gray-600 dark:text-gray-300 leading-relaxed">
                Born in 2004 in Lala, Assam, India, I started my educational journey at Primrose English Medium School.
                After completing Class 10, I pursued science at Ramanuj Gupta Senior Secondary School.
                Currently, I'm pursuing a BSc in Biotechnology from Assam down town University.
              </p>
            </div>

            {/* Interests Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-medium hover:shadow-large transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:scale-105">
                <h3 className="text-xl font-poppins font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-secondary-800 dark:to-secondary-900 rounded-lg flex items-center justify-center mr-3">
                    <Palette className="w-5 h-5 text-primary-600 dark:text-secondary-400" />
                  </div>
                  Creative Side
                </h3>
                <p className="font-inter text-gray-600 dark:text-gray-300 leading-relaxed">
                  Passionate about painting and artistic expression
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-medium hover:shadow-large transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:scale-105">
                <h3 className="text-xl font-poppins font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-secondary-800 dark:to-secondary-900 rounded-lg flex items-center justify-center mr-3">
                    <Heart className="w-5 h-5 text-primary-600 dark:text-secondary-400" />
                  </div>
                  Animal Lover
                </h3>
                <p className="font-inter text-gray-600 dark:text-gray-300 leading-relaxed">
                  Deep love for pets and animals
                </p>
              </div>
            </div>

            {/* Tech Journey */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-large hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-poppins font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-secondary-800 dark:to-secondary-900 rounded-xl flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-primary-600 dark:text-secondary-400" />
                </div>
                Biotechnology Journey
              </h3>
              <p className="text-lg font-inter text-gray-600 dark:text-gray-300 leading-relaxed">
                Passionate about biotechnology with hands-on experience in molecular biology and lab research. 
                My dedication to learning has helped me master essential techniques like DNA extraction and 
                gel electrophoresis, preparing me for future contributions to the field.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 animate-slide-in-right">
            <div className="transform hover:scale-105 transition-all duration-500 group">
              <img
                src="/assets/priyanka1.webp"
                alt="About Me 1"
                className="rounded-2xl shadow-large group-hover:shadow-xl border border-gray-100 dark:border-gray-700"
              />
            </div>
            <div className="transform hover:scale-105 transition-all duration-500 mt-12 group">
              <img
                src="/assets/priyanka2.webp"
                alt="About Me 2"
                className="rounded-2xl shadow-large group-hover:shadow-xl border border-gray-100 dark:border-gray-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}