import React from 'react';

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>© {new Date().getFullYear()} Priyanka Nath Mazumdar. All rights reserved.</p>
      </div>
    </footer>
  );
}