import React from "react";
import Navbar from './components/navbar/nav'
import Hero from './components/hero/hero'
import About from './components/about/about'
import Services from "./components/services/services";
import Contact from './components/Contact/Contact';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      
    </div>
  )
}
export default App;