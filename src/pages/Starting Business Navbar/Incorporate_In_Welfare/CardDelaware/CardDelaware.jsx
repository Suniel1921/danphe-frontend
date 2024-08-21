import React from 'react';
import './CardDelaware.css';

const CardDelaware = () => {
  return (
    <div className="card_delware-section">
      {/* <h2>Still Exploring Your Options? Learn More About Starting a Corporation or LLC in Delaware.</h2> */}
      <div className="card_delware-columns-container">
        <div className="card_delware-column">
          <div className="card_delware-card">
            <img src="./img/delaware_hub_story1_bg.jpg" alt="" />
            <div className="card_delware-card-content">
              <p>Incorporate in Delaware</p>
            </div>
          </div>
          <div className="card_delware-info-section">
            <h3>Starting Out</h3>
            <ul>
              <li>Incorporate in Delaware</li>
              <li>Forming a Delaware LLC</li>
              <li>Delaware Business Name Search</li>
              <li>Delaware Business Licenses</li>
            </ul>
          </div>
        </div>
        <div className="card_delware-column">
          <div className="card_delware-card">
            <img src="./img/delaware_hub_story1_bg.jpg" alt="Why is Delaware the Best?" />
            <div className="card_delware-card-content">
              <p>Why is Delaware the Best?</p>
            </div>
          </div>
          <div className="card_delware-info-section">
            <h3>Why Delaware?</h3>
            <ul>
              <li>Advantages of Incorporating in Delaware</li>
              <li>How To & Why Incorporate in Delaware</li>
              <li>DE vs. NV</li>
            </ul>
          </div>
        </div>
        <div className="card_delware-column">
          <div className="card_delware-card">
            <img src="./img/delaware_hub_story2_bg.jpg" alt="LLC in Delaware" />
            <div className="card_delware-card-content">
              <p>LLC in Delaware</p>
            </div>
          </div>
          <div className="card_delware-info-section">
            <h3>Ready, Set, Get Started!</h3>
            <ul>
              <li>Incorporate Your Business Today</li>
              <li>Fees to Start a Business in Delaware</li>
              <li>Delaware Filing Forms</li>
              <li>Formation/Registration</li>
              <li>Taxes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDelaware;
