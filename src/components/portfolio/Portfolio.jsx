// import {useRef} from "react";
// import "./portfolio.scss";
// import {motion, useScroll, useSpring, useTransform} from "framer-motion";
//
// import {FaGithubSquare} from "react-icons/fa";
//
//
// const items = [
//   {
//     id: 1,
//     title: "TODO LIST JS",
//     img: "/todo-list.jpg",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
//     link: 'https://github.com/timaantonuk/todoapp-js'
//   },
//   {
//     id: 2,
//     title: "Positivus Landing",
//     img: "/positivus.jpg",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
//     link: 'https://github.com/timaantonuk/positivus'
//   },
//   {
//     id: 3,
//     title: "Tic-Tac-Toe Game",
//     img: "/tic-tac-toe.jpg",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
//     link: 'https://github.com/timaantonuk/tictactoe'
//   },
//   {
//     id: 4,
//     title: "Remsvol Texas",
//     img: "/remsvol.jpg",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
//     link: 'https://github.com/timaantonuk/remsvol-texas'
//   },
//   {
//     id: 5,
//     title: "Notes App",
//     img: "/notes-app.jpg",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
//     link: 'https://github.com/timaantonuk/notes-app'
//   },
//   {
//     id: 5,
//     title: "Orys Plumbing",
//     img: "/orys.jpg",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
//     link: 'https://github.com/coyjiv/orys-plumbing-solutions'
//   },
//   {
//     id: 6,
//     title: "Weather App",
//     img: "/weather-app.jpg",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
//     link: 'https://github.com/timaantonuk/weather-app'
//   },
// ];
//
// const Single = ({item}) => {
//   const ref = useRef();
//
//   const {scrollYProgress} = useScroll({
//     target: ref,
//   });
//
//   const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
//
//   return (
//       <section>
//         <div className="container">
//           <div className="wrapper">
//             <div className="imageContainer" ref={ref}>
//               <img src={item.img} alt=""/>
//             </div>
//             <motion.div className="textContainer"  style={{y}}>
//               <h2>{item.title}</h2>
//               <p>{item.desc}</p>
//               <motion.a whileHover={{backgroundColor: '#ffae5b', scale: 1.1}}
//                         transition={{duration: 0.4}}
//                         style={{backgroundColor: '#ffb300'}}
//                         href={item.link}
//                         target='_blank'
//               >
//                 <p>Open Project & Demo</p> <FaGithubSquare style={{width: '28px', height: '28px', color: '#0c0c1d'}}/>
//               </motion.a>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//   );
// };
//
// const Portfolio = () => {
//   const ref = useRef();
//
//   const {scrollYProgress} = useScroll({
//     target: ref,
//     offset: ["end end", "start start"],
//   });
//
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//   });
//
//   return (
//       <div className="portfolio" ref={ref}>
//         <div className="progress">
//           <h1>Featured Works</h1>
//           <motion.div style={{scaleX}} className="progressBar"></motion.div>
//         </div>
//         {items.map((item) => (
//             <Single item={item} key={item.id}/>
//         ))}
//       </div>
//   );
// };
//
// export default Portfolio;

import { useRef, useState, useEffect } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";

const items = [
  {
    id: 1,
    title: "TODO LIST JS",
    img: "/todo-list.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    link: 'https://github.com/timaantonuk/todoapp-js'
  },
  {
    id: 2,
    title: "Positivus Landing",
    img: "/positivus.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    link: 'https://github.com/timaantonuk/positivus'
  },
  {
    id: 3,
    title: "Tic-Tac-Toe Game",
    img: "/tic-tac-toe.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    link: 'https://github.com/timaantonuk/tictactoe'
  },
  {
    id: 4,
    title: "Remsvol Texas",
    img: "/remsvol.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    link: 'https://github.com/timaantonuk/remsvol-texas'
  },
  {
    id: 5,
    title: "Notes App",
    img: "/notes-app.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    link: 'https://github.com/timaantonuk/notes-app'
  },
  {
    id: 6,
    title: "Orys Plumbing",
    img: "/orys.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    link: 'https://github.com/coyjiv/orys-plumbing-solutions'
  },
  {
    id: 7,
    title: "Weather App",
    img: "/weather-app.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    link: 'https://github.com/timaantonuk/weather-app'
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const [isScreenWide, setIsScreenWide] = useState(window.innerWidth >= 750);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenWide(window.innerWidth >= 750);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <section style={{marginBottom: '40px'}}>
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={isScreenWide ? { y } : {}}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <motion.a
                  whileHover={{ backgroundColor: '#ffae5b', scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  style={{ backgroundColor: '#ffb300' }}
                  href={item.link}
                  target='_blank'
              >
                <p>Open Project & Demo</p> <FaGithubSquare style={{ width: '28px', height: '28px', color: '#0c0c1d' }} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
      <div className="portfolio" ref={ref}>
        <div className="progress">
          <h1>Featured Works</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
            <Single item={item} key={item.id} />
        ))}
      </div>
  );
};

export default Portfolio;
