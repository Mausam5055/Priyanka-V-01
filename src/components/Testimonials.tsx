import React, { useState, useEffect } from 'react';
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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Quote className="w-12 h-12 mx-auto text-yellow-500 dark:text-blue-400 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Testimonials</h2>
        </div>
        <div className="relative h-96 overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute w-full transform transition-all duration-500 ${
                index === currentIndex
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-full'
              }`}
              aria-live="polite"
            >
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-6 object-cover"
                />
                <blockquote className="text-xl italic text-gray-600 dark:text-gray-300 text-center max-w-2xl mb-4">
                  "{testimonial.content}"
                </blockquote>
                <cite className="text-lg font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </cite>
                <p className="text-yellow-600 dark:text-blue-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex
                  ? 'bg-yellow-500 dark:bg-blue-500'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}