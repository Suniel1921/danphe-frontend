import React from 'react';
import './Footer.css'; // Ensure you import your CSS file
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container_footer">
        <div className="brand-section">
          <a className="brand" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="brand-icon"
              viewBox="0 0 24 24"
            >
              {/* SVG path removed */}
            </svg>
            <span className="brand-name">Tailblocks</span>
          </a>
          <p className="brand-description">Air plant banjo lyft occupy retro adaptogen indego</p>
        </div>
        <div className="links-section">
          <div className="links-column">
            <h2 className="links-title">CATEGORIES</h2>
            <nav className="links-nav">
              <li><a className="link" href="#">First Link</a></li>
              <li><a className="link" href="#">Second Link</a></li>
              <li><a className="link" href="#">Third Link</a></li>
              <li><a className="link" href="#">Fourth Link</a></li>
            </nav>
          </div>
          <div className="links-column">
            <h2 className="links-title">CATEGORIES</h2>
            <nav className="links-nav">
              <li><a className="link" href="#">First Link</a></li>
              <li><a className="link" href="#">Second Link</a></li>
              <li><a className="link" href="#">Third Link</a></li>
              <li><a className="link" href="#">Fourth Link</a></li>
            </nav>
          </div>
          <div className="links-column">
            <h2 className="links-title">CATEGORIES</h2>
            <nav className="links-nav">
              <li><a className="link" href="#">First Link</a></li>
              <li><a className="link" href="#">Second Link</a></li>
              <li><a className="link" href="#">Third Link</a></li>
              <li><a className="link" href="#">Fourth Link</a></li>
            </nav>
          </div>
          <div className="links-column">
            <h2 className="links-title">CATEGORIES</h2>
            <nav className="links-nav">
              <li><a className="link" href="#">First Link</a></li>
              <li><a className="link" href="#">Second Link</a></li>
              <li><a className="link" href="#">Third Link</a></li>
              <li><a className="link" href="#">Fourth Link</a></li>
            </nav>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-container">
          <p className="footer-text">POWERED BY 
            <a href="https://www.nepaltechinnov.com/" rel="noopener noreferrer" className="footer-link" target="_blank">NEPATECH INNOVATIONS</a>
          </p>
          <span className="footer-social">
            <a className="social-icon" href="#">
            <FaFacebookSquare className='icon_footer'/>
            </a>
            <a className="social-icon" href="#">
            <FaInstagramSquare />
            </a>
            <a className="social-icon" href="#">
            <FaSquareXTwitter />
            </a>
            
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
