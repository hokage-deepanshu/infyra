import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Is file ko banana zaroori hai
import logo from '../assets/Infyra Logo-Photoroom.png'; // Path check kar lein
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar({ showSection }) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Mobile menu ke liye state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 100 && window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const navigate = useNavigate();

  // Menu toggle function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Link click karne par menu band ho jaye
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    // 'menu-open' class ko conditionally add karein
    <nav className={`navbar ${!show && 'navbar--hidden'} ${isMenuOpen && 'menu-open'}`}>
      <a href="#" className="logo" onClick={() => { showSection('home'); handleLinkClick(); }}>
        <img src={logo} alt="Infyra Logo" />
      </a>

      {/* Yeh hai Hamburger Menu ka button jo sirf mobile par dikhega */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>

      {/* Nav links 'active' class ke sath show/hide honge */}
      <ul className={`nav-links ${isMenuOpen && 'active'}`}>
        <li><Link to="/home" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/gallery" onClick={handleLinkClick}>Gallery</Link></li>
        <li><Link to="/courses" onClick={handleLinkClick}>Courses</Link></li>
        <li><Link to="/products" onClick={handleLinkClick}>Products</Link></li>
        <li><Link to="/collaborations" onClick={handleLinkClick}>Collaborations</Link></li>
        <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
        {/* Contact button ko mobile menu ke andar bhi daal diya hai */}
        <li className="contact-btn-mobile">
            <button onClick={() => { navigate('/contact'); handleLinkClick(); }}>Contact Us</button>
        </li>
      </ul>

      <button className="contact-btn" onClick={() => navigate('/contact')}>Contact Us</button>
    </nav>
  );
}

export default Navbar;