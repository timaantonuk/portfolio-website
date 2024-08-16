import React, { useContext } from 'react';

import {motion} from "framer-motion";
import ScrollContext from '../../ScrollContext/ScrollContext';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1
    }
  },

  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    }
  }

}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },

  closed: {
    y: 50,
    opacity: 0,
  }

}

const Links = ({setOpen}) => {

  const context = useContext(ScrollContext)


  const items = [
    'Homepage',
    'Tech Stack',
    'Experience',
    'Portfolio',
    'Contact',
  ]

  const onClick = (e, item)=>{
    if(item === 'Contact')
     return setOpen((prev) => !prev) 
    e.preventDefault()
    document.getElementById(item === 'Experience' ? 'Services' : item).scrollIntoView({behavior: 'smooth'})
    setOpen((prev) => !prev)
    context.changeScrollingActive(true)
    setTimeout(()=>context.changeScrollingActive(false), 1000)
  }

  return (
      <motion.div className='links' variants={variants}>
        {items.map(item => (
            <motion.a
                href={item === 'Experience' ? '#Services' : `#${item}`}
                key={item}
                onClick={(e)=>onClick(e, item)}
                variants={itemVariants}
                whileHover={{scale: 1.1}}
                whileTap={{scale:0.9}}
            >
              {item}
            </motion.a>
        ))}
      </motion.div>
  );
};

export default Links;