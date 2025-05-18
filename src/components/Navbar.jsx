import "./Navbar.css";
import React, { useState, useEffect } from "react";
import siteLogo from "../assets/farlens.png";
import personalLogo from "../assets/JGwhite.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Funktion um Menü beim Klick auf Link zu schließen
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-content">
        <div className="site-logo">
          <img src={siteLogo} alt="FarLens" />
        </div>

        <div className="center-section">
          <div className="personal-logo">
            <img src={personalLogo} alt="Julian Gruber" />
          </div>
          {/* Locations nur im Desktop sichtbar */}
          <ul className="nav-locations desktop-only">
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
          {/* Desktop Menü */}
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

          {/* Burger-Icon (Mobile) */}
          <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </div>

          {/* Mobile Menü mit Links UND Locations */}
          {menuOpen && (
            <div className="mobile-menu">
              <ul className="nav-links">
                <li>
                  <a href="#home" onClick={closeMenu}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={closeMenu}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={closeMenu}>
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#portfolio" onClick={closeMenu}>
                    Portfolio
                  </a>
                </li>
              </ul>

              <ul className="nav-locations">
                <li>
                  <a href="#rook" className="fc3" onClick={closeMenu}>
                    Rook Islands
                  </a>
                </li>
                <li>
                  <a href="#kyrat" className="fc4" onClick={closeMenu}>
                    Kyrat
                  </a>
                </li>
                <li>
                  <a href="#hope" className="fc5" onClick={closeMenu}>
                    Hope County
                  </a>
                </li>
                <li>
                  <a href="#yara" className="fc6" onClick={closeMenu}>
                    Yara
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
