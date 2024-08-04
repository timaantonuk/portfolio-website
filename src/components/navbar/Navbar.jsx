import React from 'react';
import './navbar.scss'

import {motion} from "framer-motion";

import {FaLinkedin} from "react-icons/fa6";
import {FaSquareGithub} from "react-icons/fa6";
import {FaTelegram} from "react-icons/fa6";
import {IoMail} from "react-icons/io5";
import Sidebar from "../sidebar/Sidebar.jsx";


const Navbar = () => {
  return (
      <div className='navbar'>

        <Sidebar/>

        <div className="wrapper">
          <motion.span
              initial={{opacity: 0, scale: 0.5}}
              animate={{opacity: 1, scale: 1}}
              transition={{duration: 0.7}}
          >
            Tymofii Antoniuk
          </motion.span>

          <div className="socials">
            <a target='_blank' href="https://www.linkedin.com/in/tifomeypng/" rel="noreferrer"><FaLinkedin/></a>
            <a target='_blank' href="mailto:tima.antonuk2@gmail.com" rel="noreferrer"><IoMail/></a>
            <a target='_blank' href="https://github.com/timaantonuk" rel="noreferrer"><FaSquareGithub/></a>
            <a target='_blank' href="https://t.me/skrillex_vernis" rel="noreferrer"><FaTelegram/></a>

          </div>
        </div>
      </div>
  );
};

export default Navbar;