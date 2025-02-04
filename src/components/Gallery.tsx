import React from 'react';
import { Image } from 'lucide-react';

const galleryImages = [
  { src: "/assets/gallery1.jpg", alt: "Gallery Image 1" },
  { src: "/assets/gallery2.jpg", alt: "Gallery Image 2" },
  { src: "/assets/gallery3.jpg", alt: "Gallery Image 3" },
  { src: "/assets/gallery4.jpg", alt: "Gallery Image 4" },
  { src: "/assets/gallery5.jpg", alt: "Gallery Image 5" },
  { src: "/assets/gallery6.jpg", alt: "Gallery Image 6" }
];

export default function Gallery() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Image className="w-12 h-12 mx-auto text-yellow-500 dark:text-blue-400 mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Gallery</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}