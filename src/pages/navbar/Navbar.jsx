import React from 'react'
import { NavLink } from 'react-router-dom'
import '../navbar/navbar.css'

const Navbar = () => {
  return (
    <>
    <div className="navbarContainer">
        <div className="container">
            <div className="navbar">
                <img className='logo' src="/img/logo.png" alt="logo" />
                <ul className='navlinks'>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/about'}>About Us</NavLink></li>
                </ul>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Navbar
