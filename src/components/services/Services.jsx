import './services.scss'

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/640px-Starbucks_Corporation_Logo_2011.svg.png',
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png',
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: 'https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png',
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: 'https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png',
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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