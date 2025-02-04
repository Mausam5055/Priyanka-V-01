import React from 'react';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    institute: "Primerose English Medium High School, Lala",
    description: "Primary Education (class kg-1 to class 10)",
    year: "2006-2020",
    image: "/assets/education1.jpg"
  },
  {
    institute: "Ramanuj Gupta Senior Secondary School, Silchar",
    description: "Higher Secondary Education ",
    year: "2020-2022",
    image: "/assets/education2.jpg"
  },
  {
    institute: "Assam Down Town University, Guahati",
    description: "Bsc In Biotechnology",
    year: "2022-2026",
    image: "/assets/education3.jpg"
  }
];

export default function Education() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <GraduationCap className="w-12 h-12 mx-auto text-yellow-500 dark:text-blue-400 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-yellow-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={edu.image}
                  alt={edu.institute}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {edu.institute}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.description}</p>
                <p className="text-sm text-yellow-600 dark:text-blue-400">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}