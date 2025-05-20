import "../styles/Navbar.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={siteLogo} alt="FarLens" />
          </Link>
        </div>

        <div className="center-section">
          <div className="personal-logo">
            <img src={personalLogo} alt="Julian Gruber" />
          </div>
          {/* Locations nur im Desktop sichtbar */}
          <ul className="nav-locations desktop-only">
            <li>
              <Link to="/fc3" className="fc3" onClick={closeMenu}>
                Rook Islands
              </Link>
            </li>
            <li>
              <Link to="/fc4" className="fc4" onClick={closeMenu}>
                Kyrat
              </Link>
            </li>
            <li>
              <Link to="/fc5" className="fc5" onClick={closeMenu}>
                Hope County
              </Link>
            </li>
            <li>
              <Link to="/fc6" className="fc6" onClick={closeMenu}>
                Yara
              </Link>
            </li>
          </ul>
        </div>

        <nav className="nav-right">
          {/* Desktop Menü */}
          <ul className="nav-links desktop-only">
            <li>
              <Link to="/#hero" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/#about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/#gallery" onClick={closeMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <a
                href="https://juliangruber.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </li>
          </ul>

          {/* Burger-Icon (Mobile) */}
          <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </div>

          {/* Mobile Menü mit Links & Locations */}
          {menuOpen && (
            <div className="mobile-menu">
              <ul className="nav-links mobile-only">
                <li>
                  <Link to="/#hero" onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/#about" onClick={closeMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/#gallery" onClick={closeMenu}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <a
                    href="https://juliangruber.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>

              <ul className="nav-locations">
                <li>
                  <Link to="/fc3" className="fc3" onClick={closeMenu}>
                    Rook Islands
                  </Link>
                </li>
                <li>
                  <Link to="/fc4" className="fc4" onClick={closeMenu}>
                    Kyrat
                  </Link>
                </li>
                <li>
                  <Link to="/fc5" className="fc5" onClick={closeMenu}>
                    Hope County
                  </Link>
                </li>
                <li>
                  <Link to="/fc6" className="fc6" onClick={closeMenu}>
                    Yara
                  </Link>
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
