import React from 'react';
import './hero.scss'

import {color, motion} from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
}

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-700%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 40,
    },
  },
}

const Hero = () => {
  return (
      <div className='hero'>

        <div className="wrapper">
          <motion.div
              className="textContainer"
              variants={textVariants}
              initial='initial'
              animate='animate'
          >
            <motion.h2 variants={textVariants}>TYMOFII ANTONIUK</motion.h2>
            <motion.h1 initial={{skewX: -2}} animate={{skewX: 2}}
                       transition={{duration: 2, repeat: Infinity, repeatType: "mirror"}}
                       variants={textVariants}>Front-End <br/> &nbsp; &nbsp; &nbsp; &nbsp;
              <motion.span className="rainbow-text"
                           initial={{ color: '#000000' }}>Developer</motion.span>
            </motion.h1>
            <motion.div variants={textVariants} className="buttons">
              <motion.a href='#Portfolio' variants={textVariants}>See my Latest Works</motion.a>
              <motion.a href='#Contact' variants={textVariants}>Contact Me</motion.a>
            </motion.div>
            <motion.img variants={textVariants} animate='scrollButton' src="/scroll.png" alt="scroll image"/>
          </motion.div>
        </div>

        <motion.div className="slidingTextContainer" variants={sliderVariants} initial='initial' animate='animate'>
          Software Engineer Front-End Web Developer
        </motion.div>

        <div className="imageContainer">
          <img src="/hero-tima-4.png" className='heroPerson' alt="Tymofii Antoniuk photo"/>
          <img src="/hero-tima-overlay.png" className='heroOverlay' alt="Tymofii Antoniuk photo"/>
        </div>

      </div>
  );
};

export default Hero;