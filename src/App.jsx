import './app.scss'
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import Services from "./components/services/Services.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import Technologies from "./components/technologies/Technologies.jsx";
import { ReactLenis } from 'lenis/react'
import ScrollContext from './components/ScrollContext/ScrollContext.jsx';
import { useState, useEffect } from 'react';
import TechnologiesMobile from "./components/technologies/Technologies-mobile.jsx";

const App = () => {

  const [scrollingActive, changeScrollingActive] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ReactLenis options={{
      lerp: 0.14,
    }} root>
      <div>
        <ScrollContext.Provider value={{scrollingActive, changeScrollingActive}}>
          <section id='Homepage'>
            <Navbar />
            <Hero />
          </section>
          <section className='technologies' id='Tech Stack'>
            {isMobile ? <TechnologiesMobile/> : <Technologies/>}
          </section>
          <section id='Services'>
            <Parallax type='services' />
          </section>
          <section className='workExperience'>
            <Services />
          </section>
          <section id='Portfolio'>
            <Parallax type='portfolio' />
          </section>
            <Portfolio />
          <section style={{marginBottom: '80px'}} id='Contact'>
            <Contact />
          </section>
        </ScrollContext.Provider>
      </div>
    </ReactLenis>

  )
};

export default App;
