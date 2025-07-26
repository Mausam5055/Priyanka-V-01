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
    <section className="py-32 bg-gradient-to-b from-primary-50/30 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-secondary-800 dark:to-secondary-900 rounded-3xl mb-8 shadow-large">
            <Milestone className="w-12 h-12 text-primary-600 dark:text-secondary-400" />
          </div>
          <h2 className="text-5xl font-playfair font-bold text-gray-900 dark:text-white mb-6 text-shadow">My Journey</h2>
          <p className="text-xl font-inter text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Exploring the path that has shaped who I am today
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-300 to-primary-500 dark:from-secondary-500 dark:to-secondary-700 rounded-full shadow-soft"></div>
          
          {journeyData.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={index}
              className={`relative mb-16 flex ${
                index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
              } px-4 md:px-0`}
            >
              <div className={`w-full md:w-[calc(50%-2rem)] group bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-large hover:shadow-xl transition-all duration-500 border border-primary-100 dark:border-gray-700 relative hover:scale-105`}>
                <div className={`absolute top-8 ${
                  index % 2 === 0 ? '-left-4 md:-left-12' : '-right-4 md:-right-12'
                } w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 dark:from-secondary-400 dark:to-secondary-600 rounded-full flex items-center justify-center text-3xl shadow-large transform group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                
                <span className="inline-block px-6 py-3 rounded-full bg-primary-100 dark:bg-secondary-900 text-primary-700 dark:text-secondary-300 font-poppins font-bold text-base mb-6 shadow-soft">
                  {item.year}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-secondary-400 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl font-inter leading-relaxed">
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