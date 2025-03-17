import React, { useState } from 'react';
import { Image, X } from 'lucide-react';

const galleryImages = [
  { src: "/assets/gallery1.jpg", alt: "Gallery Image 1", category: "Nature" },
  { src: "/assets/gallery2.jpg", alt: "Gallery Image 2", category: "Architecture" },
  { src: "/assets/gallery3.jpg", alt: "Gallery Image 3", category: "Nature" },
  { src: "/assets/gallery4.jpg", alt: "Gallery Image 4", category: "Architecture" },
  { src: "/assets/gallery5.jpg", alt: "Gallery Image 5", category: "Nature" },
  { src: "/assets/gallery6.jpg", alt: "Gallery Image 6", category: "Architecture" }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryImages[0]>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Image className="w-16 h-16 mx-auto text-yellow-500 dark:text-blue-400 mb-6 animate-pulse" />
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our collection of stunning photographs that capture moments of beauty and inspiration
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl shadow-xl 
                ${index % 3 === 0 ? 'row-span-2' : ''} 
                transform hover:scale-[1.02] transition-all duration-500 ease-out`}
              onClick={() => setSelectedImage(image)}
            >
              {isLoading && (
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
              )}
              <img
                src={image.src}
                alt={image.alt}
                onLoad={handleImageLoad}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm font-medium text-yellow-400 dark:text-blue-400 mb-2">
                    {image.category}
                  </p>
                  <h3 className="text-xl font-bold">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
               onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-7xl mx-auto p-4">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-yellow-400 dark:hover:text-blue-400 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[90vh] max-w-full object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-white text-xl font-bold">{selectedImage.alt}</p>
                <p className="text-yellow-400 dark:text-blue-400 mt-2">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}