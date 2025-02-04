import React, { useState } from 'react';
import { Image } from 'lucide-react';
import GalleryCard from './GalleryCard';
import { galleryData } from './galleryData';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(galleryData.map(img => img.category))];
  
  const filteredImages = selectedCategory === 'all' 
    ? galleryData 
    : galleryData.filter(img => img.category === selectedCategory);

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Image className="w-12 h-12 mx-auto text-yellow-500 dark:text-blue-400 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Gallery</h2>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${selectedCategory === category
                    ? 'bg-yellow-500 dark:bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-blue-900'
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="opacity-0 animate-slide-up"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <GalleryCard image={image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}