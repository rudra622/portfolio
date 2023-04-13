import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header id="header">
            <div className="d-flex flex-column">
                <div className="profile">
                    <div >
                    <img src="assets/img/logo-img.jpg" className='rounded-circle' />
                    </div>
                    <h1 className="text-light"><a href="index.html">Rudra Dobariya</a></h1>
                    <div className="social-links mt-3 text-center">
                        <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                    </div>
                </div>
                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                        <li><NavLink to="/" className="nav-link scrollto active"><i className="bx bx-home" /> <span>Home</span></NavLink></li>
                        <li><NavLink to="/About" className="nav-link scrollto"><i className="bx bx-user" /> <span>About</span></NavLink></li>
                        <li><NavLink to="/Resume" className="nav-link scrollto"><i className="bx bx-file-blank" /> <span>Resume</span></NavLink></li>
                        <li><NavLink to="/Protfolio" className="nav-link scrollto"><i className="bx bx-book-content" /> <span>Portfolio</span></NavLink></li>
                        <li><NavLink to="/Services" className="nav-link scrollto"><i className="bx bx-server" /> <span>Services</span></NavLink></li>
                        <li><NavLink to="/Contact" className="nav-link scrollto"><i className="bx bx-envelope" /> <span>Contact</span></NavLink></li>
                    </ul>
                </nav>{/* .nav-menu */}
            </div>
        </header>
  )
}

export default Header