// import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaShoppingCart, FaUserAlt, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
// import { AiFillMessage } from 'react-icons/ai';
// import { Badge, Dropdown, Menu } from 'antd';
// import { IoReorderThreeOutline, IoCloseOutline } from "react-icons/io5"; // Import the close icon
// import { useAuthGlobally } from '../../contexts/AuthContext';
// import { useCartGlobally } from '../../contexts/cartContext';
// import toast from 'react-hot-toast';
// import axios from 'axios';
// import './navbar.css';
// // import '../topBanner/banner.css';
// import '../../components/topBanner/banner.css'

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [auth, setAuth] = useAuthGlobally();
//   const { cart } = useCartGlobally();
//   const [isSticky, setIsSticky] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   const handleLogout = () => {
//     setAuth({ user: null, token: null });
//     localStorage.removeItem('token');
//     delete axios.defaults.headers.common['Authorization'];
//     toast.success('Logout Successfully');
//     window.location.href = '/login'; // Redirect to login after logout
//   };

//   const userMenu = (
//     <Menu>
//       {auth?.user ? (
//         <>
//           <Menu.Item key="greeting">
//             <h2 style={{ textAlign: 'center', textTransform: 'capitalize' }}>
//               Hi <span className="waving-hand">👋</span> {auth.user.name}
//             </h2>
//             <hr />
//           </Menu.Item>
//           <Menu.Item key="dashboard">
//             <NavLink to="/client-dashboard">Client Dashboard</NavLink>
//           </Menu.Item>
//           <Menu.Item key="update-document">
//             <NavLink to="/update-document">Update Document</NavLink>
//           </Menu.Item>
//           <Menu.Item key="logout">
//             <NavLink onClick={handleLogout}>Logout</NavLink>
//           </Menu.Item>
//         </>
//       ) : (
//         <Menu.Item key="login">
//           <NavLink to="/login">Client Login</NavLink>
//         </Menu.Item>
//       )}
//     </Menu>
//   );

//   const messageMenu = (
//     <Menu>
//       <Menu.Item key="new-order">
//         <NavLink to="/new-order">New Order</NavLink>
//       </Menu.Item>
//       <Menu.Item key="existing-order">
//         <NavLink to="/existing-order">Existing Order</NavLink>
//       </Menu.Item>
//     </Menu>
//   );

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 50); // Adjust the value as needed for when to make the navbar sticky
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className={`navbar_container ${isSticky ? 'navbar_sticky' : ''}`}>
//       <div className='navbarlogo'>
//         <NavLink to={'/'}><img src='/img/logo.png' alt="Logo" /></NavLink>
//       </div>
//       <IoReorderThreeOutline className={`menu_icon ${isSticky ? 'sticky_icon' : ''}`} onClick={toggleMenu} />
//       <div className={`mobile_menu ${isMenuOpen ? 'active mobile_menu_open' : ''}`}>
//         <div className="mobile_menu_header">
//           <IoCloseOutline className="close_icon" onClick={closeMenu} /> {/* Close Icon */}
//         </div>
//         <ul>
//           <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
//           <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
//           <li><NavLink to="/page" onClick={closeMenu}>Page</NavLink></li>
//           <li><NavLink to="/shop" onClick={closeMenu}>Shop</NavLink></li>
//           <li><NavLink to="/blog" onClick={closeMenu}>Blog</NavLink></li>
//           <li><NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink></li>
//         </ul>
//       </div>
//       <div className='items_navbar'>
//         <ul>
//           <li><NavLink to="/">Home</NavLink></li>
//           <li><NavLink to="/services">Services</NavLink></li>
//           <li><NavLink to="/page">Page</NavLink></li>
//           <li><NavLink to="/shop">Shop</NavLink></li>
//           <li><NavLink to="/blog">Blog</NavLink></li>
//           <li><NavLink to="/portfolio">Portfolio</NavLink></li>
//         </ul>
//       </div>
//       <div className='navbar_social'>
//         <div className='navbar_social_icon'>
//           <a className={`socialContainer containerOne ${isSticky ? 'sticky_icon' : ''}`} href="#">
//             <FaInstagram className={`socialSvg ${isSticky ? 'sticky_icon' : ''}`} />
//           </a>
//           <a className={`socialContainer containerTwo ${isSticky ? 'sticky_icon' : ''}`} href="#">
//             <FaTwitter className={`socialSvg ${isSticky ? 'sticky_icon' : ''}`} />
//           </a>
//           <a className={`socialContainer containerThree ${isSticky ? 'sticky_icon' : ''}`} href="#">
//             <FaLinkedin className={`socialSvg ${isSticky ? 'sticky_icon' : ''}`} />
//           </a>
//           <a className={`socialContainer containerFour ${isSticky ? 'sticky_icon' : ''}`} href="#">
//             <FaWhatsapp className={`socialSvg ${isSticky ? 'sticky_icon' : ''}`} />
//           </a>
//         </div>
//       </div>
//       <div className="banner">
//         <Dropdown overlay={userMenu} placement="bottomRight">
//           <NavLink to="#" aria-label="User Menu">
//             <FaUserAlt className={`icons ${isSticky ? 'sticky_icon' : ''}`} />
//           </NavLink>
//         </Dropdown>
//         <Dropdown overlay={messageMenu} placement="bottomRight">
//           <NavLink to="#" aria-label="Message Menu">
//             <AiFillMessage className={`icons ${isSticky ? 'sticky_icon' : ''}`} />
//           </NavLink>
//         </Dropdown>
//         <Badge count={cart.length} color="error">
//           <NavLink to="/cart" aria-label="Shopping Cart">
//             <FaShoppingCart className={`icons ${isSticky ? 'sticky_icon' : ''}`} />
//           </NavLink>
//         </Badge>
//       </div>
//     </div>
//   );
// };

// export default Navbar;








// src/components/Navbar/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUserAlt, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp, FaMoon, FaSun } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';
import { Badge, Dropdown, Menu } from 'antd';
import { IoReorderThreeOutline, IoCloseOutline } from 'react-icons/io5';
import { useAuthGlobally } from '../../contexts/AuthContext';
import { useCartGlobally } from '../../contexts/cartContext';
import { useTheme } from '../../contexts/ThemeContext'; // Import useTheme
import toast from 'react-hot-toast';
import axios from 'axios';
import './navbar.css';
import '../../components/topBanner/banner.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [auth, setAuth] = useAuthGlobally();
  const { cart } = useCartGlobally();
  const [isSticky, setIsSticky] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Get theme and toggleTheme

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    setAuth({ user: null, token: null });
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    toast.success('Logout Successfully');
    window.location.href = '/login';
  };

  const userMenu = (
    <Menu>
      {auth?.user ? (
        <>
          <Menu.Item key="greeting">
            <h2 style={{ textAlign: 'center', textTransform: 'capitalize' }}>
              Hi <span className="waving-hand">👋</span> {auth.user.name}
            </h2>
            <hr />
          </Menu.Item>
          <Menu.Item key="dashboard">
            <NavLink to="/client-dashboard">Client Dashboard</NavLink>
          </Menu.Item>
          <Menu.Item key="update-document">
            <NavLink to="/update-document">Update Document</NavLink>
          </Menu.Item>
          <Menu.Item key="logout">
            <NavLink onClick={handleLogout}>Logout</NavLink>
          </Menu.Item>
        </>
      ) : (
        <Menu.Item key="login">
          <NavLink to="/login">Client Login</NavLink>
        </Menu.Item>
      )}
    </Menu>
  );

  const messageMenu = (
    <Menu>
      <Menu.Item key="new-order">
        <NavLink to="/new-order">New Order</NavLink>
      </Menu.Item>
      <Menu.Item key="existing-order">
        <NavLink to="/existing-order">Existing Order</NavLink>
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className={`navbar_container ${isSticky ? 'navbar_sticky' : ''}`}>
      <div className='navbarlogo'>
        <NavLink to={'/'}><img src='/img/logo.png' alt="Logo" /></NavLink>
      </div>
      <IoReorderThreeOutline className={`menu_icon ${isSticky ? 'sticky_icon' : ''}`} onClick={toggleMenu} />
      <div className={`mobile_menu ${isMenuOpen ? 'active mobile_menu_open' : ''}`}>
        <div className="mobile_menu_header">
          <IoCloseOutline className="close_icon" onClick={closeMenu} />
        </div>
        <ul>
          <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
          <li><NavLink to="/page" onClick={closeMenu}>Page</NavLink></li>
          <li><NavLink to="/shop" onClick={closeMenu}>Shop</NavLink></li>
          <li><NavLink to="/blog" onClick={closeMenu}>Blog</NavLink></li>
          <li><NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink></li>
        </ul>
      </div>
      <div className='items_navbar'>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/page">Page</NavLink></li>
          <li><NavLink to="/shop">Shop</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        </ul>
      </div>
      <div className='navbar_social'>
        <div className='navbar_social_icon'>
          <a className={`socialContainer containerOne ${isSticky ? 'sticky_icon' : ''}`} href="#">
            <FaInstagram className={`socialSvg ${isSticky ? 'sticky_icon' : ''}`} />
          </a>
          <a className={`socialContainer containerTwo ${isSticky ? 'sticky_icon' : ''}`} href="#">
            <FaTwitter className={`socialSvg ${isSticky ? 'sticky_icon' : ''}`} />
          </a>
          <a className={`socialContainer containerThree ${isSticky ? 'sticky_icon' : ''}`} href="#">
            <FaLinkedin className={`socialSvg ${isSticky ? 'sticky_icon' : ''}`} />
          </a>
          <a className={`socialContainer containerFour ${isSticky ? 'sticky_icon' : ''}`} href="#">
            <FaWhatsapp className={`socialSvg ${isSticky ? 'sticky_icon' : ''}`} />
          </a>
        </div>
      </div>
      <div className="banner">
        <Dropdown overlay={userMenu} placement="bottomRight">
          <NavLink to="#" aria-label="User Menu">
            <FaUserAlt className={`icons ${isSticky ? 'sticky_icon' : ''}`} />
          </NavLink>
        </Dropdown>
        <Dropdown overlay={messageMenu} placement="bottomRight">
          <NavLink to="#" aria-label="Message Menu">
            <AiFillMessage className={`icons ${isSticky ? 'sticky_icon' : ''}`} />
          </NavLink>
        </Dropdown>
        <Badge count={cart.length} color="error">
          <NavLink to="/cart" aria-label="Shopping Cart">
            <FaShoppingCart className={`icons ${isSticky ? 'sticky_icon' : ''}`} />
          </NavLink>
        </Badge>
        {/* <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button> */}
      </div>

    </div>
    </>
  );
};

export default Navbar;
