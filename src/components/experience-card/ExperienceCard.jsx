import {VerticalTimelineElement} from "react-vertical-timeline-component";
import {motion} from "framer-motion";
import React from "react";

import './experience-card.scss'

const ExperienceCard = ({experience, sliderVariants}) => {
  return (
      <VerticalTimelineElement
          contentStyle={{
            background: "#1d1836",
            color: "fff",
          }}
          contentArrowStyle={{borderRight: "7px solid  #232631"}}
          date={experience.date}
          iconStyle={{background: experience.iconBg}}
          icon={
            <div className='iconContainer'>
              <img
                  src={experience.icon}
                  alt={experience.company_name}
                  className='icon'
              />
            </div>
          }
      >
        <div>
          <h3 className='title'>{experience.title}</h3>
          <p
              className='subtitle'
              style={{margin: 0, fontWeight: 300}}
          >
            {experience.company_name}
          </p>
        </div>

        <ul className='description'>
          {experience.points.map((point, index) => (
              <li
                  key={index}
                  className='descriptionItem'
              >
                {point}
              </li>
          ))}
        </ul>

        <motion.div className="slidingTextContainer" variants={sliderVariants} initial='initial'
                    animate='animate'>
          {experience.company_name} {experience.company_name} {experience.company_name} {experience.company_name}
        </motion.div>

      </VerticalTimelineElement>
  );
};

export default ExperienceCard