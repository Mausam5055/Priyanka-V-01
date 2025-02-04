import React from 'react';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section className="py-16 bg-yellow-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <User className="w-12 h-12 mx-auto text-yellow-500 dark:text-blue-400 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I am a passionate professional with a deep interest in technology and innovation.
              My journey in this field has been driven by curiosity and a constant desire to learn
              and grow.
            </p>
            <div className="flex justify-center mb-4">
  <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
    My name is Priyanka Nath, born in 2004 in Lala, Assam, India. I began my educational journey at Primrose English Medium School, where I studied from KG 1 to Class 10. I then pursued my higher secondary education in the science stream at Ramanuj Gupta Senior Secondary School. Currently, I am pursuing a BSc in Biotechnology from Assam down town University.

    Beyond academics, I have a passion for painting, which allows me to express my creativity. I also have a deep love for pets and animals, finding joy in their companionship. My personality leans toward being a little extroverted—I enjoy talking and connecting with others.

    I am equally passionate about technology and coding. With a curiosity-driven mindset, I explored computer science concepts and taught myself to become a front-end and back-end developer. Through self-learning from online resources, I developed a strong foundation in coding, which I continue to build upon.

    Always eager to explore new opportunities and challenges, I strive to grow both academically and professionally.
  </p>
</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img
                src="/assets/about1.jpg"
                alt="About Me 1"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300 mt-8">
              <img
                src="/assets/about2.jpg"
                alt="About Me 2"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}