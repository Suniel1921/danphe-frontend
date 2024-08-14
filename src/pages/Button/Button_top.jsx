import React from 'react';
import './Button_top.css';
import { Link } from 'react-router-dom';

const Button_top = () => {
  return (
    <button className="hover-button">
      <div className="hover-button__div">
        <span>
<<<<<<< HEAD
          <p>Get Started</p>
=======
          <p>Let's Get Started</p>
>>>>>>> a20daa49b4260944282287a8d4ddfd51cf48c133
        </span>
      </div>
      <div className="hover-button__div">
        <span>
<<<<<<< HEAD
          <Link to={'/quote-pricing'}>Get Started</Link>
=======
          <Link to={'/quote-pricing'}>Let's Get Started</Link>
>>>>>>> a20daa49b4260944282287a8d4ddfd51cf48c133
         
        </span>

      </div>
    </button>
  );
};

export default Button_top;
