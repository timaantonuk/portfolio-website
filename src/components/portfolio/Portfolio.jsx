import { useRef, useState, useEffect, useContext } from "react";
import "./portfolio.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import ScrollContext from "../ScrollContext/ScrollContext";

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

const Single = ({ item, isScreenWide }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
      <section style={{marginBottom: '40px'}} className='myPortfolio'>
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
  const context = useContext(ScrollContext)

  const [isScreenWide, setIsScreenWide] = useState(window.innerWidth >= 750);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenWide(window.innerWidth >= 750);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if(context.scrollingActive) return null

  return (
      <div className="portfolio">
        <div className="progress">
          <h1>Featured Works</h1>

        </div>
        {items.map((item) => (
            <Single isScreenWide={isScreenWide} item={item} key={item.id}/>
        ))}
      </div>
  );
};

export default Portfolio;
