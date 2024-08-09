import React from 'react';
import './Button_top.css';
import { Link } from 'react-router-dom';

const Button_top = () => {
  return (
    <button className="hover-button">
      <div className="hover-button__div">
        <span>
          <p>Our Services</p>
        </span>
      </div>
      <div className="hover-button__div">
        <span>
          <Link to={'/quote-pricing'}>Our Service</Link>
         
        </span>

      </div>
    </button>
  );
};

export default Button_top;
