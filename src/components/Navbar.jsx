import "./Navbar.css";
import React, { useState } from "react";
import siteLogo from "../assets/farlens.png";
import personalLogo from "../assets/JGwhite.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="site-logo">
          <img src={siteLogo} alt="FarLens" />
        </div>

        <div className="center-section">
          <div className="personal-logo">
            <img src={personalLogo} alt="Julian Gruber" />
          </div>
          <ul className="nav-locations">
            <li>
              <a href="#rook" className="fc3">
                Rook Islands
              </a>
            </li>
            <li>
              <a href="#kyrat" className="fc4">
                Kyrat
              </a>
            </li>
            <li>
              <a href="#hope" className="fc5">
                Hope County
              </a>
            </li>
            <li>
              <a href="#yara" className="fc6">
                Yara
              </a>
            </li>
          </ul>
        </div>

        <nav className="nav-right">
          {/* Desktop-Menü */}
          <ul className="nav-links desktop-only">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
          </ul>

          {/* Burger-Icon für Mobile */}
          <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </div>

          {/* Mobiles Menü */}
          {menuOpen && (
            <ul className="nav-links mobile-menu">
              <li>
                <a href="#home" onClick={() => setMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={() => setMenuOpen(false)}>
                  Portfolio
                </a>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
