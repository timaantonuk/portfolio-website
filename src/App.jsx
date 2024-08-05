import './app.scss'
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import Services from "./components/services/Services.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";

const App = () => {
  return <div>
    <section id='Homepage'>
      <Navbar/>
      <Hero/>
    </section>
    <section id='Services'>
      <Parallax type='services'/>
    </section>
    <section>
      <Services/>
    </section>
    <section id='Portfolio'>
      <Parallax type='portfolio'/>
    </section>
    <Portfolio/>
    <section id='Contact'>
      <Contact/>
    </section>
  </div>;
};

export default App;
