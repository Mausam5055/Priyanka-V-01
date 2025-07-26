import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-100/20 dark:border-gray-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-dancing-script font-bold text-primary-600 dark:text-secondary-400 text-shadow">
              Priyanka Nath Mazumdar
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-secondary-400" />
              ) : (
                <Moon className="w-5 h-5 text-primary-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}