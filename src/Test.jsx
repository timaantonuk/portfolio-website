import React from 'react';
import {motion} from "framer-motion";

const Test = () => {
  return (
      <div className='course'>
        <motion.div className="box"
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1, x: 200, y: 300}}
                    transition={{duration: 3}}
                    whileHover={{x: -400}}
        >


        </motion.div>
      </div>
  );
};

export default Test;