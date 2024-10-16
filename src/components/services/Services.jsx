import './services.scss'

const experiences = [
  {
    title: "Graphic Designer",
    company_name: "Parimatch",
    icon: 'https://slotgods.co.uk/storage/app/media/slot-sites/parimatch-casino-logo.webp',
    iconBg: "#383E56",
    date: "December 2020 - June 2021",
    points: [
      'Designed a variety of marketing materials, including landing pages, brochures, and digital assets for social media. Produced high-quality visuals for advertisements, collaborating with photographers and illustrators. Worked on 2D/3D animations and promo videos.',
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Parimatch",
    icon: 'https://slotgods.co.uk/storage/app/media/slot-sites/parimatch-casino-logo.webp',
    iconBg: "#E6DEDD",
    date: "June 2021 - February 2022",
    points: [
      'Developed responsive, cross-browser promotional landing pages for casino and betting platforms. Enhanced the internal UI kit and implemented interactive animations using Framer Motion and After Effects. Improved user experience on live pages, collaborating with the QA team to resolve performance issues.',
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Harvey Nash",
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPKBSMtnx_ZHMfadD_vCuBBXvsaqYu1XgjDg&s',
    iconBg: "#383E56",
    date: "May 2023 - September 2024",
    points: [
      'Developed and enhanced a user photo moderation module with the ability to reject, approve, or issue warnings. Implemented a user-friendly interface for creating, editing, and deleting user notes using AG Grid, as well as searching and filtering them. Integrated an API for saving notes and logging actions, ensuring real-time accessibility of notes for all administrators.'
    ],
  },
];

import React from "react";
import {
  VerticalTimeline,
} from "react-vertical-timeline-component";

import ExperienceCard from '../experience-card/ExperienceCard.jsx'
import "react-vertical-timeline-component/style.min.css";

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

const sliderVariants2 = {
  initial: {
    x: '-700%',
  },
  animate: {
    x: 0,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 40,
    },
  },
}

const Services = () => {
  return (
        <div className='wrapper'>
          <VerticalTimeline className='verticalTimeline'>
            {experiences.map((experience, index) => (
                  <ExperienceCard
                      key={index}
                      experience={experience}
                      sliderVariants={(index + 1) % 2 === 0 ? sliderVariants : sliderVariants2}
                  />
            ))}
          </VerticalTimeline>

        </div>
  );
};

export default Services