// import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaShoppingCart, FaUserAlt, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp, FaMoon, FaSun } from 'react-icons/fa';
// import { AiFillMessage } from 'react-icons/ai';
// import { Badge, Dropdown, Menu } from 'antd';
// import { IoReorderThreeOutline, IoCloseOutline } from 'react-icons/io5';
// import { useAuthGlobally } from '../../contexts/AuthContext';
// import { useCartGlobally } from '../../contexts/cartContext';
// import { useTheme } from '../../contexts/ThemeContext';
// import toast from 'react-hot-toast';
// import axios from 'axios';
// import './navbar.css';
// import '../../components/topBanner/banner.css';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [auth, setAuth] = useAuthGlobally();
//   const { cart } = useCartGlobally();
//   const [isSticky, setIsSticky] = useState(false);
//   const { theme, toggleTheme } = useTheme();

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
//     window.location.href = '/login';
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

//   const businessMenu = (
//     <Menu>
//       <Menu.Item key="heading1">
//         <NavLink to="#">Heading 1</NavLink>
//       </Menu.Item>
//       <Menu.Item key="heading2">
//         <NavLink to="#">Heading 2</NavLink>
//       </Menu.Item>
//       <Menu.Item key="heading3">
//         <NavLink to="#">Heading 3</NavLink>
//       </Menu.Item>
//     </Menu>
//   );

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <div className={`navbar_container ${isSticky ? 'navbar_sticky' : ''}`}>
//         <div className='navbarlogo'>
//           <NavLink to={'/'}><img src='/img/logo.png' alt="Logo" /></NavLink>
//         </div>
//         <IoReorderThreeOutline className={`menu_icon ${isSticky ? 'sticky_icon' : ''}`} onClick={toggleMenu} />
//         <div className={`mobile_menu ${isMenuOpen ? 'active mobile_menu_open' : ''}`}>
//           <div className="mobile_menu_header">
//             <IoCloseOutline className="close_icon" onClick={closeMenu} />
//           </div>
//           <ul>
//             <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
//             <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
//             <li><NavLink to="/page" onClick={closeMenu}>Page</NavLink></li>
//             <li><NavLink to="/shop" onClick={closeMenu}>Shop</NavLink></li>
//             <li><NavLink to="/blog" onClick={closeMenu}>Blog</NavLink></li>
//             <li><NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink></li>
//           </ul>
//         </div>
//         <div className='items_navbar'>
//           <ul>
//             <li>
//               <Dropdown overlay={businessMenu} trigger={['hover']} placement="bottom">
//                 <NavLink to="#">Starting a Business</NavLink>
//               </Dropdown>
//             </li>
//             <li><NavLink>Maintaining a Business</NavLink></li>
//             <li><NavLink>Learning Center</NavLink></li>
//             <li><NavLink>About Us</NavLink></li>
//           </ul>
//         </div>
//         <div className='navbar_social'>
//           <div className='navbar_social_icon'>
//             <a className={`socialContainer containerOne ${isSticky ? 'sticky_icon' : ''}`} href="#">
//               <FaInstagram className={`socialSvg ${isSticky ? 'sticky_icon' : ''}`} />
//             </a>
//             <a className={`socialContainer containerTwo ${isSticky ? 'sticky_icon' : ''}`} href="#">
//               <FaTwitter className={`socialSvg ${isSticky ? 'sticky_icon' : ''}`} />
//             </a>
//             <a className={`socialContainer containerThree ${isSticky ? 'sticky_icon' : ''}`} href="#">
//               <FaLinkedin className={`socialSvg ${isSticky ? 'sticky_icon' : ''}`} />
//             </a>
//             <a className={`socialContainer containerFour ${isSticky ? 'sticky_icon' : ''}`} href="#">
//               <FaWhatsapp className={`socialSvg ${isSticky ? 'sticky_icon' : ''}`} />
//             </a>
//           </div>
//         </div>
//         <div className="banner">
//           <Dropdown overlay={userMenu} placement="bottomRight">
//             <NavLink to="#" aria-label="User Menu">
//               <FaUserAlt className={`icons ${isSticky ? 'sticky_icon' : ''}`} />
//             </NavLink>
//           </Dropdown>
//           <Dropdown overlay={messageMenu} placement="bottomRight">
//             <NavLink to="#" aria-label="Message Menu">
//               <AiFillMessage className={`icons ${isSticky ? 'sticky_icon' : ''}`} />
//             </NavLink>
//           </Dropdown>
//           <Badge count={cart.length} color="error">
//             <NavLink to="/cart" aria-label="Shopping Cart">
//               <FaShoppingCart className={`icons ${isSticky ? 'sticky_icon' : ''}`} />
//             </NavLink>
//           </Badge>
//           {/* <button className="theme-toggle" onClick={toggleTheme}>
//             {theme === 'light' ? <FaMoon /> : <FaSun />}
//           </button> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;










import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUserAlt, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp, FaMoon, FaSun } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';
import { Badge, Dropdown, Menu } from 'antd';
import { IoReorderThreeOutline, IoCloseOutline } from 'react-icons/io5';
import { useAuthGlobally } from '../../contexts/AuthContext';
import { useCartGlobally } from '../../contexts/cartContext';
import { useTheme } from '../../contexts/ThemeContext';
import toast from 'react-hot-toast';
import axios from 'axios';
import './navbar.css';
import '../../components/topBanner/banner.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [auth, setAuth] = useAuthGlobally();
  const { cart } = useCartGlobally();
  const [isSticky, setIsSticky] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
            <h4 style={{ textAlign: 'center', textTransform: 'capitalize' }}>
              Hi <span className="waving-hand ">👋</span> {auth.user.name}
            </h4>
            <hr />
          </Menu.Item>
          <Menu.Item key="dashboard">
            <NavLink className='dropdownLink_heading' to="/client-dashboard">Client Dashboard</NavLink>
          </Menu.Item>
          <Menu.Item key="update-document">
            <NavLink className='dropdownLink_heading' to="/update-document">Update Document</NavLink>
          </Menu.Item>
          <Menu.Item key="logout">
            <NavLink className='dropdownLink_heading' onClick={handleLogout}>Logout</NavLink>
          </Menu.Item>
        </>
      ) : (
        <Menu.Item key="login">
          <NavLink className='dropdownLink_heading' to="/login">Client Login</NavLink>
        </Menu.Item>
      )}
    </Menu>
  );

  const messageMenu = (
    <Menu>
      <Menu.Item key="new-order">
        <NavLink className='dropdownLink_heading' to="/new-order">New Order</NavLink>
      </Menu.Item>
      <Menu.Item key="existing-order">
        <NavLink className='dropdownLink_heading' to="/existing-order">Existing Order</NavLink>
      </Menu.Item>
    </Menu>
  );

  const businessMenu = (
    <Menu>
      <Menu.Item key="heading1">
        <NavLink className='dropdownLink_heading' to="/starting-business">Starting a Business</NavLink>
      </Menu.Item>
      <Menu.Item key="heading2">
        <NavLink className='dropdownLink_heading' to="/maintaining-business">Maintaining a Business</NavLink>
      </Menu.Item>
      <Menu.Item key="heading3">
        <NavLink className='dropdownLink_heading' to="/learning-center">Learning Center</NavLink>
      </Menu.Item>
      <Menu.Item key="heading4">
        <NavLink className='dropdownLink_heading' to="/about-us">About Us</NavLink>
      </Menu.Item>
    </Menu>
  );
  
  
  const maintainingBusiness = (
    <Menu>
      <Menu.Item key="heading1">
        <NavLink className= "dropdownLink_heading" to="#">Bylaws & Operating Aggrements</NavLink>
      </Menu.Item>
      <Menu.Item key="heading2">
        <NavLink className= "dropdownLink_heading" to="#">Business Licenses</NavLink>
      </Menu.Item>
      <Menu.Item key="heading3">
        <NavLink className= "dropdownLink_heading" to="#">Annual Report</NavLink>
      </Menu.Item>
      <Menu.Item key="heading4">
        <NavLink className= "dropdownLink_heading" to="#">Certifiacte of Good Standing</NavLink>
      </Menu.Item>
      <Menu.Item key="heading5">
        <NavLink className= "dropdownLink_heading" to="#">LLC Tax Status Election (form 8832)</NavLink>
      </Menu.Item>
    </Menu>
  );
  const learningCenter = (
    <Menu>
      <Menu.Item key="heading1">
        <NavLink className='dropdownLink_heading' to="/StartUp_Task">Start Up Task</NavLink>
      </Menu.Item>
      <Menu.Item key="heading2">
        <NavLink className='dropdownLink_heading' to="/Corporation_VS_LLC">Corporation Vs. LLC</NavLink>
      </Menu.Item>
      <Menu.Item key="heading3">
        <NavLink className='dropdownLink_heading' to="/Benefits_of_Incorporating">Benefits of Incorporating</NavLink>
      </Menu.Item>
      <Menu.Item key="heading4">
        <NavLink className='dropdownLink_heading' to="/Incorporation_101">Incorporation 101</NavLink>
      </Menu.Item>
      <Menu.Item key="heading5">
        <NavLink className='dropdownLink_heading' to="/Industry_specific_information">Industry Specific Information</NavLink>
      </Menu.Item>
      <Menu.Item key="heading6">
        <NavLink className='dropdownLink_heading' to="/Tax_filings">Tax filings</NavLink>
      </Menu.Item>
      <Menu.Item key="heading7">
        <NavLink className='dropdownLink_heading' to="/State_guides">State Guides</NavLink>
      </Menu.Item>
      <Menu.Item key="heading8">
        <NavLink className='dropdownLink_heading' to="/Learningcenter">Learning Center</NavLink>
      </Menu.Item>
    </Menu>
  );
  const aboutUs = (
    <Menu>
      <Menu.Item key="heading1">
        <NavLink className='dropdownLink_heading' to="/About_Ascend">About Ascend.com</NavLink>
      </Menu.Item>
      <Menu.Item key="heading2">
        <NavLink className='dropdownLink_heading' to="/Corporate_Gurantee">Corporate Compilance Gurantee</NavLink>
      </Menu.Item>
      <Menu.Item key="heading3">
        <NavLink className='dropdownLink_heading' to="/Customer_review">Recent Customer Review</NavLink>
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
        </div>
        <div className='items_navbar'>
          <ul>
            <li>
              <Dropdown overlay={businessMenu} trigger={['hover']} placement="bottom">
                <NavLink >Starting a Business</NavLink>
              </Dropdown>
            </li>
            <li>
              <Dropdown overlay={maintainingBusiness} trigger={['hover']} placement="bottom">
                <NavLink >Maintaining a Business</NavLink>
              </Dropdown>
            </li>
           
            <li>
              <Dropdown overlay={learningCenter} trigger={['hover']} placement="bottom">
                <NavLink >Learning Center</NavLink>
              </Dropdown>
            </li>
            <li>
              <Dropdown overlay={aboutUs} trigger={['hover']} placement="bottom">
                <NavLink >About us</NavLink>
              </Dropdown>
            </li>
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


