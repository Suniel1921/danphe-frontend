
// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
// import { IoCallSharp } from "react-icons/io5";
// import { AiFillMessage } from "react-icons/ai";
// import { Dropdown, Menu } from 'antd';
// import '../topBanner/banner.css';
// import { useAuthGlobally } from '../../contexts/AuthContext';
// import toast from 'react-hot-toast';
// import axios from 'axios';  

// const Banner = () => {
//   const [auth, setAuth] = useAuthGlobally();
//   const navigate = useNavigate(); 

//   const handleLogout = () => {
//     setAuth({
//       user: null,
//       token: null
//     });
//     localStorage.removeItem('token');
//     axios.defaults.headers.common['Authorization'] = null;
//     toast.success('Logout Successfully');
//     navigate('/login');
//   };

//   const userMenu = (
//     <Menu>
//       {auth?.user ? (
//         <>
//           <Menu.Item key="1">
//             <NavLink to="/client-dashboard">Your Dashboard</NavLink>
//           </Menu.Item>
//           <Menu.Item key="2">
//             <NavLink to="/update-document">Update Document</NavLink>
//           </Menu.Item>
//           <Menu.Item key="3">
//             <NavLink onClick={handleLogout}>Logout</NavLink>
//           </Menu.Item>
//         </>
//       ) : (
//         <>
//           <Menu.Item key="1">
//             <NavLink to="/login">Client Login</NavLink>
//           </Menu.Item>
//         </>
//       )}
//     </Menu>
//   );

//   const messageMenu = (
//     <Menu>
//       <Menu.Item key="1">
//         <NavLink to="/new-order">New Order</NavLink>
//       </Menu.Item>
//       <Menu.Item key="2">
//         <NavLink to="/existing-order">Existing Order</NavLink>
//       </Menu.Item>
//     </Menu>
//   );

//   return (
//     <div className="bannerContainer">
//       <div className="container">
//         <div className="banner">
//           <img className='NepalTechlogo' src="/img/nti.png" alt="Nepal Tech Logo" />
//           <div className="bannerLink list">
//             <Dropdown overlay={userMenu} placement="bottomRight">
//               <NavLink><FaUserAlt className='icons' /></NavLink>
//             </Dropdown>
//             <Dropdown overlay={messageMenu} placement="bottomRight">
//               <NavLink><AiFillMessage className='icons' /></NavLink>
//             </Dropdown>
//             <NavLink to={'/cart'}><FaShoppingCart className='icons' /></NavLink>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Banner;




import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { Badge, Dropdown, Menu } from 'antd';
import '../topBanner/banner.css';
import { useAuthGlobally } from '../../contexts/AuthContext';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useCartGlobally } from '../../contexts/cartContext';

const Banner = () => {
  const [auth, setAuth] = useAuthGlobally();
  const navigate = useNavigate();
  const { cart } = useCartGlobally();

  const handleLogout = () => {
    setAuth({
      user: null,
      token: null
    });
    localStorage.removeItem('token');
    axios.defaults.headers.common['Authorization'] = null;
    toast.success('Logout Successfully');
    // navigate('/login');
    window.location.href = '/login';
  };

  const userMenu = (
    <Menu>
      {auth?.user ? (
        <>
          <Menu.Item key="1">
          <h2 style={{ textAlign: 'center', textTransform: 'capitalize' }}>Hi<span className="waving-hand">👋</span>  {auth.user.name}</h2> <hr /> <br />
          </Menu.Item>
          <Menu.Item key="1">
            <NavLink to="/client-dashboard">Your Dashboard</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/update-document">Update Document</NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink onClick={handleLogout}>Logout</NavLink>
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item key="1">
            <NavLink to="/login">Client Login</NavLink>
          </Menu.Item>
        </>
      )}
    </Menu>
  );

  const messageMenu = (
    <Menu>
      <Menu.Item key="1">
        <NavLink to="/new-order">New Order</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to="/existing-order">Existing Order</NavLink>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="bannerContainer">
      <div className="container">
        <div className="banner">
          <img className='NepalTechlogo' src="/img/nti.png" alt="Nepal Tech Logo" />
          <div className="bannerLink list">
            <Dropdown overlay={userMenu} placement="bottomRight">
              <NavLink><FaUserAlt className='icons' /></NavLink>
            </Dropdown>
            <Dropdown overlay={messageMenu} placement="bottomRight">
              <NavLink><AiFillMessage className='icons' /></NavLink>
            </Dropdown>
            <Badge count={cart.length > 0 ? cart.length : 0} color="error">
  <NavLink to={'/cart'}>
    <FaShoppingCart className='icons' />
  </NavLink>
</Badge>


            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
