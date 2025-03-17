import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Mausam Kar",
    role: "Friend",
    content: "Working with Priyanka was an absolute pleasure. Her dedication and expertise are truly remarkable.",
    image: "/assets/testimonial1.jpg"
  },
  {
    name: "Papiya Nath Mazumdar",
    role: "Sister",
    content: "Priyanka's attention to detail and problem-solving skills make her an invaluable team member.",
    image: "/assets/testimonial2.jpg"
  },
  {
    name: "Mangal Singh",
    role: "Friend",
    content: "Her technical skills and ability to learn quickly are impressive. A great professional to work with.",
    image: "/assets/testimonial3.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Decorative Elements - Left Side */}
      <div className="absolute left-0 top-0 h-full w-64 opacity-10 dark:opacity-5">
        <div className="absolute top-1/4 left-8 w-16 h-16 rounded-full bg-yellow-500 dark:bg-blue-500 blur-xl" />
        <div className="absolute top-1/2 left-12 w-24 h-24 rounded-full bg-yellow-400 dark:bg-blue-400 blur-xl" />
        <div className="absolute bottom-1/4 left-6 w-20 h-20 rounded-full bg-yellow-600 dark:bg-blue-600 blur-xl" />
      </div>

      {/* Decorative Elements - Right Side */}
      <div className="absolute right-0 top-0 h-full w-64 opacity-10 dark:opacity-5">
        <div className="absolute top-1/3 right-12 w-20 h-20 rounded-full bg-yellow-500 dark:bg-blue-500 blur-xl" />
        <div className="absolute top-2/3 right-8 w-16 h-16 rounded-full bg-yellow-400 dark:bg-blue-400 blur-xl" />
        <div className="absolute bottom-1/4 right-16 w-24 h-24 rounded-full bg-yellow-600 dark:bg-blue-600 blur-xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10">
          <div className="relative inline-block">
            <Quote className="w-10 h-10 mx-auto text-yellow-500 dark:text-blue-400 mb-3 transform -scale-x-100" />
            <Quote className="w-10 h-10 mx-auto text-yellow-500/30 dark:text-blue-400/30 mb-3 absolute top-0 left-0 transform translate-x-0.5 translate-y-0.5" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            What People Say
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Testimonials from colleagues and friends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden ring-3 ring-yellow-500/20 dark:ring-blue-500/20">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-yellow-500 dark:bg-blue-500 rounded-full p-1.5 shadow-md">
                    <Quote className="w-3 h-3 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <blockquote className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-4">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <cite className="text-base font-bold text-gray-900 dark:text-white not-italic block">
                      {testimonial.name}
                    </cite>
                    <span className="inline-block mt-1.5 px-3 py-0.5 rounded-full bg-yellow-100 dark:bg-blue-900 text-yellow-800 dark:text-blue-200 text-xs font-medium">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}