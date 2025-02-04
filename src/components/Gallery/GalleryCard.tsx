import React from 'react';

interface GalleryCardProps {
  image: {
    src: string;
    alt: string;
    description: string;
    category: string;
  };
}

export default function GalleryCard({ image }: GalleryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500 hover:shadow-xl">
      <div className="aspect-w-16 aspect-h-12">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white text-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {image.alt}
        </h3>
        <p className="text-white/90 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {image.description}
        </p>
        <span className="text-yellow-400 dark:text-blue-400 text-xs mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
          {image.category}
        </span>
      </div>
    </div>
  );
}