import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Education from './components/Education';
import Journey from './components/Journey';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Gallery from './components/Gallery/Gallery';
import SocialMedia from './components/SocialMedia';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Profile />
          <Education />
          <Journey />
          <Testimonials />
          <About />
          <Gallery />
          <Contact />
          <SocialMedia />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;