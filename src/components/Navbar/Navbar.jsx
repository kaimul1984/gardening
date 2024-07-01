import React from 'react'
import './navbar.scss'
import {Link} from 'react-router-dom'
import logo from '../../assests/images/logo.png'
import Button from '../../constant/Button/Button'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menu">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="services">services</Link>
              </li>
              <li>
                <Link to="projects">Projects</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="button">
            <Button name="Call now" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar