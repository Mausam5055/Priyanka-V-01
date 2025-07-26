import React from 'react';
import { GraduationCap, Calendar, School, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const educationData = [
  {
    institute: "Primerose English Medium High School, Lala",
    description: "Primary Education (class kg-1 to class 10)",
    year: "2006-2020",
    image: "/assets/education1.webp",
    achievements: ["Academic Excellence Award", "Perfect Attendance"]
  },
  {
    institute: "Ramanuj Gupta Senior Secondary School, Silchar",
    description: "Higher Secondary Education ",
    year: "2020-2022",
    image: "/assets/education2.webp",
    achievements: ["Science Club President", "Mathematics Olympiad Participant"]
  },
  {
    institute: "Assam Down Town University, Guahati",
    description: "Bsc In Biotechnology",
    year: "2022-2026",
    image: "/assets/education3.webp",
    achievements: ["Dean's List", "Research Assistant"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Education() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-primary-50/30 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-secondary-800 dark:to-secondary-900 rounded-3xl mb-8 shadow-large">
            <GraduationCap className="w-12 h-12 text-primary-600 dark:text-secondary-400" />
          </div>
          <h2 className="text-5xl font-playfair font-bold text-gray-900 dark:text-white mb-6 text-shadow">Educational Journey</h2>
          <p className="text-xl font-inter text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Exploring the path of knowledge and growth through academic excellence
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-large hover:shadow-xl transform hover:scale-105 transition-all duration-500 border border-gray-100 dark:border-gray-700"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src={edu.image}
                  alt={edu.institute}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-playfair font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  {edu.institute}
                </h3>
                <div className="flex items-center text-primary-600 dark:text-secondary-400 mb-4">
                  <div className="w-8 h-8 bg-primary-100 dark:bg-secondary-900 rounded-lg flex items-center justify-center mr-3">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <p className="font-poppins font-medium">{edu.year}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 font-inter leading-relaxed">{edu.description}</p>
                <div className="space-y-3">
                  <p className="font-poppins font-semibold text-gray-900 dark:text-white flex items-center">
                    <div className="w-8 h-8 bg-primary-100 dark:bg-secondary-900 rounded-lg flex items-center justify-center mr-3">
                      <Award className="w-4 h-4 text-primary-600 dark:text-secondary-400" />
                    </div>
                    Achievements
                  </p>
                  <ul className="space-y-2 ml-11">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 font-inter flex items-center">
                        <div className="w-2 h-2 bg-primary-400 dark:bg-secondary-400 rounded-full mr-3 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}