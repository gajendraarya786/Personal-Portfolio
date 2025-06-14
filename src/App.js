import React from 'react';
import { ThemeProvider } from '../src/ThemeContext.js';
import Navbar from '../src/components/navbar/nav.jsx';
import Hero from '../src/components/hero/hero.jsx';
import About from '../src/components/about/about.jsx';
import Services from '../src/components/services/services.jsx';
import Contact from '../src/components/Contact/Contact.jsx';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
    </ThemeProvider>
  );
}

export default App; 