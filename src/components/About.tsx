import React from 'react';
import { User, Book, Palette, Code, Heart, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section className="py-16 bg-yellow-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <User className="w-12 h-12 mx-auto text-yellow-500 dark:text-blue-400 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I am a passionate professional with a deep interest in technology and innovation.
            My journey in this field has been driven by curiosity and a constant desire to learn
            and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {/* Bio Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-yellow-500 dark:text-blue-400" />
                Education & Background
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Born in 2004 in Lala, Assam, India, I started my educational journey at Primrose English Medium School.
                After completing Class 10, I pursued science at Ramanuj Gupta Senior Secondary School.
                Currently, I'm pursuing a BSc in Biotechnology from Assam down town University.
              </p>
            </div>

            {/* Interests Section */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Palette className="w-5 h-5 mr-2 text-yellow-500 dark:text-blue-400" />
                  Creative Side
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Passionate about painting and artistic expression
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-yellow-500 dark:text-blue-400" />
                  Animal Lover
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Deep love for pets and animals
                </p>
              </div>
            </div>

            {/* Tech Journey */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Code className="w-6 h-6 mr-2 text-yellow-500 dark:text-blue-400" />
                Biotechnology Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Passionate about biotechnology with hands-on experience in molecular biology and lab research. 
                My dedication to learning has helped me master essential techniques like DNA extraction and 
                gel electrophoresis, preparing me for future contributions to the field.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="transform hover:scale-105 transition-transform duration-300 group">
              <img
                src="/assets/priyanka1.webp"
                alt="About Me 1"
                className="rounded-xl shadow-lg group-hover:shadow-xl"
              />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300 mt-8 group">
              <img
                src="/assets/priyanka2.webp"
                alt="About Me 2"
                className="rounded-xl shadow-lg group-hover:shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}