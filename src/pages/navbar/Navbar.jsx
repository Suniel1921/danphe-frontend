import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Dropdown, Menu } from 'antd';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import '../navbar/navbar.css';

const Navbar = () => {
  const startingBusinessMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/starting-business/heading1">Heading 1</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/starting-business/heading2">Heading 2</Link>
      </Menu.Item>
    </Menu>
  );

  const maintainingBusinessMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/maintaining-business/title1">Heading 1</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/maintaining-business/title2">Heading 2</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/maintaining-business/title3">Heading 3</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="navbarContainer">
      <div className="container">
        <div className="navbar">
          <Link to="/">
            <img className="logo" src="/img/logo.png" alt="Logo" />
          </Link>
          <nav className="navlinks">
            <ul>
              <li>
                <Dropdown overlay={startingBusinessMenu} trigger={['hover']}>
                  <NavLink to="/" exact activeClassName="active-link">
                    Starting a Business <MdOutlineArrowDropDown style={{ marginLeft: 5 }} />
                  </NavLink>
                </Dropdown>
              </li>
              <li>
                <Dropdown overlay={maintainingBusinessMenu} trigger={['hover']}>
                  <NavLink to="/" exact activeClassName="active-link">
                    Maintaining a Business <MdOutlineArrowDropDown style={{ marginLeft: 5 }} />
                  </NavLink>
                </Dropdown>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active-link">About Us</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
