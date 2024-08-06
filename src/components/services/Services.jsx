import React, {useRef} from 'react';

import './services.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';

import {motion, useInView} from "framer-motion";

const variants = {
  initial: {x: 500, opacity: 0},
  animate: {x: 0, opacity: 1, transition: {duration: 1.2, staggerChildren: 0.3}},

}

const Services = () => {

  const ref = useRef()
  const isInView = useInView(ref, {margin: '-100px'})

  return (
      <motion.div
          className='services'
          variants={variants}
          initial='initial'
          // ref={ref}
          // animate={isInView && 'animate'}
          animate='animate'
      >
        <motion.div className="textContainer" variants={variants}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br/> Asperiores dolores, hic in laboriosam.</p>
          <hr/>
        </motion.div>

        <motion.div className="titleContainer" variants={variants}>

          <div className='title'>
            <img src="/people.webp" alt="people image"/>
            <h1><b>My work experience</b></h1>
          </div>

          <div className="title">
            <h1>My work experience</h1>
            <motion.a
                href='/TymofiiAntoniukCV.pdf'
                download='TymofiiAntoniukCV.pdf'
                whileHover={{backgroundColor: '#ffae5b', scale: 1.1}}
                transition={{duration: 0.4}}
            >
              Download My CV
            </motion.a>
          </div>

        </motion.div>

        <motion.div className="listContainer" variants={variants}>

          <div className="box">
            <div className='heading'>
              <h2>Company Name</h2>
              <h3>Sep 2019 - Aug 2020</h3>
              <h4>Front-End Developer</h4>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span>Alias beatae cumque deserunt dolore eius excepturi hic,</span> laboriosam
              minima numquam placeat quam quidem quis repellat ut vel. Aspernatur, assumenda exercitationem
              expedita, <span>itaque labore odit omnis optio placeat quam, quas quibusdam ratione reprehenderit</span> tempora?
              Accusamus accusantium aperiam doloribus, earum eum maxime nisi officia omnis quae quod! Accusantium
              blanditiis exercitationem <span>nobis numquam</span> quasi.</p>
          </div>

          <div className="box">
            <div className='heading'>
              <h2>Company Name</h2>
              <h3>Sep 2019 - Aug 2020</h3>
              <h4>Front-End Developer</h4>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span>Alias beatae cumque deserunt dolore eius excepturi hic,</span> laboriosam
              minima numquam placeat quam quidem quis repellat ut vel. Aspernatur, assumenda exercitationem
              expedita, <span>itaque labore odit omnis optio placeat quam, quas quibusdam ratione reprehenderit</span> tempora?
              Accusamus accusantium aperiam doloribus, earum eum maxime nisi officia omnis quae quod! Accusantium
              blanditiis exercitationem <span>nobis numquam</span> quasi.</p>
          </div>

          <div className="box">
            <div className='heading'>
              <h2>Company Name</h2>
              <h3>Sep 2019 - Aug 2020</h3>
              <h4>Front-End Developer</h4>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span>Alias beatae cumque deserunt dolore eius excepturi hic,</span> laboriosam
              minima numquam placeat quam quidem quis repellat ut vel. Aspernatur, assumenda exercitationem
              expedita, <span>itaque labore odit omnis optio placeat quam, quas quibusdam ratione reprehenderit</span> tempora?
              Accusamus accusantium aperiam doloribus, earum eum maxime nisi officia omnis quae quod! Accusantium
              blanditiis exercitationem <span>nobis numquam</span> quasi.</p>
          </div>

          <div className="box">
            <div className='heading'>
              <h2>Company Name</h2>
              <h3>Sep 2019 - Aug 2020</h3>
              <h4>Front-End Developer</h4>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span>Alias beatae cumque deserunt dolore eius excepturi hic,</span> laboriosam
              minima numquam placeat quam quidem quis repellat ut vel. Aspernatur, assumenda exercitationem
              expedita, <span>itaque labore odit omnis optio placeat quam, quas quibusdam ratione reprehenderit</span> tempora?
              Accusamus accusantium aperiam doloribus, earum eum maxime nisi officia omnis quae quod! Accusantium
              blanditiis exercitationem <span>nobis numquam</span> quasi.</p>
          </div>

        </motion.div>

        <div className="listContainerSm">
          <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>

      </motion.div>
  );
};

export default Services;