import React, { useState } from 'react';
import '../sideMenu/sideMenu.css'
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';

const SideMenu = () => {
  const [dropdowns, setDropdowns] = useState({
    ecommerce: false,
    package: false,
  });

  const toggleDropdown = (name) => {
    setDropdowns((prevState) => {
      const newState = { ecommerce: false, package: false };
      newState[name] = !prevState[name];
      return newState;
    });
  };

  return (
    <>
      <div className="sideMenu">
        <Link className='link' to={'/dashboard/admin'}><h3>Dashboard</h3></Link>

        {/* <div className="adminDetails">
            <img className='adminUserImg' src="/img/slide1.png" alt="admin logo" />
            <p>your@gmail.com</p>
        </div> */}


        <div className="dropdownContainer">
          <h4 onClick={() => toggleDropdown('ecommerce')}>
            <IoMdArrowDropright className={`icon ${dropdowns.ecommerce ? 'rotate' : ''}`} />
            <span className="dropdownTitle">testing heading</span>
          </h4>
          <div className={`dropdownContent ${dropdowns.ecommerce ? 'open' : ''}`}>
            <Link className='link' to={'/dashboard/admin/manage-orders'}> 
            <p><IoMdArrowDropright className="subItemIcon" />Manage Orders</p>
            </Link>
           
            <p><IoMdArrowDropright className="subItemIcon" /> test2</p>
            <p><IoMdArrowDropright className="subItemIcon" /> test3</p>
            <p><IoMdArrowDropright className="subItemIcon" /> test4</p>
            <p><IoMdArrowDropright className="subItemIcon" /> test5</p>
          </div>
        </div>

        <div className="dropdownContainer">
          <h4 onClick={() => toggleDropdown('category')}>
            <IoMdArrowDropright className={`icon ${dropdowns.package ? 'rotate' : ''}`} />
            <span className="dropdownTitle">Manage Package</span>
          </h4>
          <div className={`dropdownContent ${dropdowns.category ? 'open' : ''}`}>
            <Link className='link' to='/dashboard/admin/createPackage'>
              <p className="subItemLink">
                <IoMdArrowDropright className="subItemIcon" /> Add Package
              </p>
            </Link>
           



          </div>
        </div>
        
      </div>
    </>
  );
};

export default SideMenu;
