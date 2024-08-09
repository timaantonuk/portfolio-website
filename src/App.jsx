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
      lerp: 0.09
    }} root>
      <div>
        <section id='Homepage'>
          <Navbar />
          <Hero />
        </section>
        <section className='technologies' id='Tech Stack'>
          {/* <h1 className='titleOverlay'>My tech stack</h1> */}
          <Technologies />
        </section>
        <section id='Services'>
          <Parallax type='services' />
        </section>
        <section>
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
