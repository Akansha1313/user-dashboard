import React, { useState } from 'react';
import './Header.css';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span></span>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

      <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
      </nav>
    </header>
  );
}

export default Header;
