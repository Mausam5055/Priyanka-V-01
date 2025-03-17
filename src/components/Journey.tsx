import React from 'react';
import { Milestone } from 'lucide-react';
import { motion } from 'framer-motion';

const journeyData = [
  {
    year: "Present",
    title: "Career Milestone",
    description: "Pursuing BSc in Biotechnology from ADTU",
    icon: "🎓"
  },
  {
    year: "2022",
    title: "Graduation",
    description: "Went to Assam Down Town University",
    icon: "🏛️"
  },
  {
    year: "2020",
    title: "Secondary Education",
    description: "Went to Ramanuj Gupta Senior Secondary School",
    icon: "📚"
  },
  {
    year: "2006",
    title: "Primary Education",
    description: "Went to Primerose English Medium School",
    icon: "✏️"
  },
  {
    year: "2004",
    title: "Beginning Of My Life",
    description: "Born on 5th December 2005 at Lala, Assam, India",
    icon: "👶"
  }
];

export default function Journey() {
  return (
    <section className="py-24 bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Milestone className="w-16 h-16 mx-auto text-yellow-500 dark:text-blue-400 mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Journey</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Exploring the path that has shaped who I am today
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-300 to-yellow-500 dark:from-blue-500 dark:to-blue-700 rounded-full"></div>
          
          {journeyData.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={index}
              className={`relative mb-12 flex ${
                index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
              } px-4 md:px-0`}
            >
              <div className={`w-full md:w-[calc(50%-2rem)] group bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-yellow-100 dark:border-gray-700 relative`}>
                <div className={`absolute top-8 ${
                  index % 2 === 0 ? '-left-4 md:-left-12' : '-right-4 md:-right-12'
                } w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 dark:from-blue-400 dark:to-blue-600 rounded-full flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                
                <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 dark:bg-blue-900 text-yellow-600 dark:text-blue-300 font-bold text-sm mb-4">
                  {item.year}
                </span>
                
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-yellow-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}