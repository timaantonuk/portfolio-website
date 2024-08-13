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
import { useState } from 'react';

const App = () => {

  const [scrollingActive, changeScrollingActive] = useState(false)
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
            <Technologies />
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
          <section id='Contact'>
            <Contact />
          </section>
        </ScrollContext.Provider>
      </div>
    </ReactLenis>

  )
};

export default App;
