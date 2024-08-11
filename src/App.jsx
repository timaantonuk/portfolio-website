import './app.scss'
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import Services from "./components/services/Services.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import Technologies from "./components/technologies/Technologies.jsx";
import { ReactLenis, useLenis } from 'lenis/react'

const App = () => {

  return (
      <ReactLenis options={{
        lerp: 0.14
      }} root>
        <div>
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
        </div>
      </ReactLenis>

  )
};

export default App;
