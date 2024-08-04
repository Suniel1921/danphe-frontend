import React, { useState } from 'react';
import './About_us.css';
import Image_1 from './Image_1.png'; // Main image
import Image_2 from './Image_2.jpg'; // Circle image

// Accordion Component
const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <div className={`accordion-icon ${isOpen ? 'open' : ''}`}>
          {isOpen ? '-' : '+'}
        </div>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const About_us = () => {
  return (
    <div className='about_main'>
      <div className="collage-container about_main_left">
        <div className="image-wrapper main-image">
          <img src={Image_1} alt="Main" />
        </div>
        {/* <div className="image-wrapper circle-image">
          <img src={Image_2} alt="Circle" />
        </div> */}
      </div>
      <div className="about_main_right">
        {/* Content for the right side */}
        <div className='About_us'>
            ABOUT US
        </div>
        <h2 className='right_h2'>
        We Provide Professional
        <br />
         Advice to Businesses.
        </h2>
        <p className='right_p paraTextSize'>
        We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences, and print materials. Install any demo, plugin or template in a matter of seconds.
        </p>
        {/* Accordion added here */}
        <Accordion
          title="Learn More"
          content="Here is some additional information that expands when you click the accordion."
        />
        <Accordion
          title="Learn More"
          content="Here is some additional information that expands when you click the accordion."
        />
        <Accordion
          title="Learn More"
          content="Here is some additional information that expands when you click the accordion."
        />
          <Accordion
          title="Learn More"
          content="Here is some additional information that expands when you click the accordion."
        />
      </div>
    </div>
  );
};

export default About_us;
