import React from 'react';

export default function Profile() {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 mb-8">
            <div className="absolute inset-0 rounded-full bg-yellow-200 dark:bg-blue-500 animate-pulse"></div>
            <img
              src="/assets/profile.jpg"
              alt="Priyanka Nath Mazumdar"
              className="relative w-full h-full object-cover rounded-full border-4 border-yellow-400 dark:border-blue-400"
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
  Welcome to My Portfolio
</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl">
            Hello! I'm Priyanka Nath Mazumdar, a passionate professional dedicated to excellence
            and innovation. Through this portfolio, I invite you to explore my journey,
            achievements, and the path that has shaped my career.
          </p>
        </div>
      </div>
    </section>
  );
}