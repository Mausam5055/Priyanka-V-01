import React from 'react';
import { Milestone } from 'lucide-react';

const journeyData = [
  {
    year: "Presnt",
    title: "Career Milestone ",
    description: "Pursuing Bsc In Biotechnology From ADTU."
  },
  {
    year: "2022",
    title: "Graduation",
    description: "Went to Assm Down Town University."
  },
  {
    year: "2020",
    title: "Secondary education",
    description: "Went To Ramanuj Gupta Senio Secondary School."
  },
  {
    year: "2006",
    title: "Primary Education",
    description: "Went to Primerose English Medium School."
  },
  {
    year: "2004",
    title: "Beginning Of My Life",
    description: " Born on 5th December 2005 at lala, Assam, India."
  }
];

export default function Journey() {
  return (
    <section className="py-16 bg-yellow-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Milestone className="w-12 h-12 mx-auto text-yellow-500 dark:text-blue-400 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Journey</h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-300 dark:bg-blue-500"></div>
          {journeyData.map((item, index) => (
            <div
              key={index}
              className={`relative mb-8 ${
                index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
              } md:w-1/2`}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <div className="absolute top-6 -left-3 md:left-auto md:right-full md:mr-6 w-6 h-6 bg-yellow-500 dark:bg-blue-500 rounded-full"></div>
                <span className="text-yellow-600 dark:text-blue-400 font-bold">{item.year}</span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}