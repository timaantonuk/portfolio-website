import React, {useRef} from 'react';

import './services.scss'

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectCards} from 'swiper/modules';
import {Navigation, Pagination, Mousewheel, Keyboard} from 'swiper/modules';

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

        {/*<motion.div className="listContainer" variants={variants}>*/}

        {/*  <div className="box">*/}
        {/*    <div className='heading'>*/}
        {/*      <h2>Company Name</h2>*/}
        {/*      <h3>Sep 2019 - Aug 2020</h3>*/}
        {/*      <h4>Front-End Developer</h4>*/}
        {/*    </div>*/}
        {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span>Alias beatae cumque deserunt dolore eius excepturi hic,</span> laboriosam*/}
        {/*      minima numquam placeat quam quidem quis repellat ut vel. Aspernatur, assumenda exercitationem*/}
        {/*      expedita, <span>itaque labore odit omnis optio placeat quam, quas quibusdam ratione reprehenderit</span> tempora?*/}
        {/*      Accusamus accusantium aperiam doloribus, earum eum maxime nisi officia omnis quae quod! Accusantium*/}
        {/*      blanditiis exercitationem <span>nobis numquam</span> quasi.</p>*/}
        {/*  </div>*/}

        {/*  <div className="box">*/}
        {/*    <div className='heading'>*/}
        {/*      <h2>Company Name</h2>*/}
        {/*      <h3>Sep 2019 - Aug 2020</h3>*/}
        {/*      <h4>Front-End Developer</h4>*/}
        {/*    </div>*/}
        {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span>Alias beatae cumque deserunt dolore eius excepturi hic,</span> laboriosam*/}
        {/*      minima numquam placeat quam quidem quis repellat ut vel. Aspernatur, assumenda exercitationem*/}
        {/*      expedita, <span>itaque labore odit omnis optio placeat quam, quas quibusdam ratione reprehenderit</span> tempora?*/}
        {/*      Accusamus accusantium aperiam doloribus, earum eum maxime nisi officia omnis quae quod! Accusantium*/}
        {/*      blanditiis exercitationem <span>nobis numquam</span> quasi.</p>*/}
        {/*  </div>*/}

        {/*  <div className="box">*/}
        {/*    <div className='heading'>*/}
        {/*      <h2>Company Name</h2>*/}
        {/*      <h3>Sep 2019 - Aug 2020</h3>*/}
        {/*      <h4>Front-End Developer</h4>*/}
        {/*    </div>*/}
        {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span>Alias beatae cumque deserunt dolore eius excepturi hic,</span> laboriosam*/}
        {/*      minima numquam placeat quam quidem quis repellat ut vel. Aspernatur, assumenda exercitationem*/}
        {/*      expedita, <span>itaque labore odit omnis optio placeat quam, quas quibusdam ratione reprehenderit</span> tempora?*/}
        {/*      Accusamus accusantium aperiam doloribus, earum eum maxime nisi officia omnis quae quod! Accusantium*/}
        {/*      blanditiis exercitationem <span>nobis numquam</span> quasi.</p>*/}
        {/*  </div>*/}

        {/*  <div className="box">*/}
        {/*    <div className='heading'>*/}
        {/*      <h2>Company Name</h2>*/}
        {/*      <h3>Sep 2019 - Aug 2020</h3>*/}
        {/*      <h4>Front-End Developer</h4>*/}
        {/*    </div>*/}
        {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span>Alias beatae cumque deserunt dolore eius excepturi hic,</span> laboriosam*/}
        {/*      minima numquam placeat quam quidem quis repellat ut vel. Aspernatur, assumenda exercitationem*/}
        {/*      expedita, <span>itaque labore odit omnis optio placeat quam, quas quibusdam ratione reprehenderit</span> tempora?*/}
        {/*      Accusamus accusantium aperiam doloribus, earum eum maxime nisi officia omnis quae quod! Accusantium*/}
        {/*      blanditiis exercitationem <span>nobis numquam</span> quasi.</p>*/}
        {/*  </div>*/}

        {/*</motion.div>*/}

        {/*<div className="listContainerMd">*/}
        {/*  <Swiper*/}
        {/*      cssMode={true}*/}
        {/*      navigation={true}*/}
        {/*      pagination={true}*/}
        {/*      mousewheel={true}*/}
        {/*      keyboard={true}*/}
        {/*      modules={[Navigation, Pagination, Mousewheel, Keyboard]}*/}
        {/*      className="mySwiper"*/}
        {/*  >*/}
        {/*    <SwiperSlide>Slide 1</SwiperSlide>*/}
        {/*    <SwiperSlide>Slide 2</SwiperSlide>*/}
        {/*    <SwiperSlide>Slide 3</SwiperSlide>*/}
        {/*    <SwiperSlide>Slide 4</SwiperSlide>*/}
        {/*    <SwiperSlide>Slide 5</SwiperSlide>*/}
        {/*    <SwiperSlide>Slide 6</SwiperSlide>*/}
        {/*    <SwiperSlide>Slide 7</SwiperSlide>*/}
        {/*    <SwiperSlide>Slide 8</SwiperSlide>*/}
        {/*    <SwiperSlide>Slide 9</SwiperSlide>*/}
        {/*  </Swiper>*/}
        {/*</div>*/}

        <div className="listContainerSm">
          <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="mySwiper"
          >
            <SwiperSlide>
              <h1>Company Name</h1>
              <h4>Jun 2019 - Sep 2020</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deleniti deserunt dolore, enim
                esse fugit illum in iste laborum maiores nemo neque optio quam similique tempora vitae voluptas
                voluptatem voluptates. Voluptas voluptatem voluptates voluptates.</p>
            </SwiperSlide>
            <SwiperSlide>
              <h1>Company Name</h1>
              <h4>Jun 2019 - Sep 2020</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deleniti deserunt dolore, enim
                esse fugit illum in iste laborum maiores nemo neque optio quam similique tempora vitae voluptas
                voluptatem voluptates. Voluptas voluptatem voluptates voluptates.</p>
            </SwiperSlide>
            <SwiperSlide>
              <h1>Company Name</h1>
              <h4>Jun 2019 - Sep 2020</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deleniti deserunt dolore, enim
                esse fugit illum in iste laborum maiores nemo neque optio quam similique tempora vitae voluptas
                voluptatem voluptates. Voluptas voluptatem voluptates voluptates.</p>
            </SwiperSlide>
            <SwiperSlide>
              <h1>Company Name</h1>
              <h4>Jun 2019 - Sep 2020</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deleniti deserunt dolore, enim
                esse fugit illum in iste laborum maiores nemo neque optio quam similique tempora vitae voluptas
                voluptatem voluptates. Voluptas voluptatem voluptates voluptates.</p>
            </SwiperSlide>
          </Swiper>
        </div>

      </motion.div>
  );
};

export default Services;


//NEw version in PROgrewsss

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: null,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: null,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: null,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: null,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import { motion } from "framer-motion";

// import "react-vertical-timeline-component/style.min.css";

// // import { styles } from "../styles";
// // import { SectionWrapper } from "../hoc";
// // import { textVariant } from "../utils/motion";

// const ExperienceCard = ({ experience }) => {
//   return (
//     <VerticalTimelineElement
//       contentStyle={{
//         background: "#1d1836",
//         color: "#fff",
//       }}
//       contentArrowStyle={{ borderRight: "7px solid  #232631" }}
//       date={experience.date}
//       iconStyle={{ background: experience.iconBg }}
//       icon={
//         <div className='flex justify-center items-center w-full h-full'>
//           <img
//             src={experience.icon}
//             alt={experience.company_name}
//             className='w-[60%] h-[60%] object-contain'
//           />
//         </div>
//       }
//     >
//       <div>
//         <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
//         <p
//           className='text-secondary text-[16px] font-semibold'
//           style={{ margin: 0 }}
//         >
//           {experience.company_name}
//         </p>
//       </div>

//       <ul className='mt-5 list-disc ml-5 space-y-2'>
//         {experience.points.map((point, index) => (
//           <li
//             key={index}
//             className='text-white-100 text-[14px] pl-1 tracking-wider'
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
//     </VerticalTimelineElement>
//   );
// };

// const Services = () => {
//   return (
//     <>
//       <motion.div >
//         <p >
//           What I have done so far
//         </p>
//         <h2>
//           Work Experience.
//         </h2>
//       </motion.div>

//       <div className='mt-20 flex flex-col'>
//         <VerticalTimeline>
//           {experiences.map((experience, index) => (
//             <ExperienceCard
//               key={index}
//               experience={experience}
//             />
//           ))}
//         </VerticalTimeline>
//       </div>
//     </>
//   );
// };

// export default Services