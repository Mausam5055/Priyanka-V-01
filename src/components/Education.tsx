import React from 'react';
import { GraduationCap, Calendar, School, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const educationData = [
  {
    institute: "Primerose English Medium High School, Lala",
    description: "Primary Education (class kg-1 to class 10)",
    year: "2006-2020",
    image: "/assets/education1.jpg",
    achievements: ["Academic Excellence Award", "Perfect Attendance"]
  },
  {
    institute: "Ramanuj Gupta Senior Secondary School, Silchar",
    description: "Higher Secondary Education ",
    year: "2020-2022",
    image: "/assets/education2.jpg",
    achievements: ["Science Club President", "Mathematics Olympiad Participant"]
  },
  {
    institute: "Assam Down Town University, Guahati",
    description: "Bsc In Biotechnology",
    year: "2022-2026",
    image: "/assets/education3.jpg",
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
    <section className="py-20 bg-gradient-to-b from-white to-yellow-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <GraduationCap className="w-16 h-16 mx-auto text-yellow-500 dark:text-blue-400 mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Educational Journey</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Exploring the path of knowledge and growth through academic excellence
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src={edu.image}
                  alt={edu.institute}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {edu.institute}
                </h3>
                <div className="flex items-center text-yellow-600 dark:text-blue-400 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <p className="text-sm">{edu.year}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{edu.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900 dark:text-white flex items-center">
                    <Award className="w-4 h-4 mr-2 text-yellow-500 dark:text-blue-400" />
                    Achievements
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
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