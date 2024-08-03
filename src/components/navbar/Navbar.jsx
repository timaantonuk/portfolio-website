import React from 'react';
import './navbar.scss'

import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";


const Navbar = () => {
  return (
      <div className='navbar'>
        {/*Sidebar*/}
        <div className="wrapper">
          <span>Tymofii Antoniuk</span>

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