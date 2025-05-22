import "../styles/Navbar.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import siteLogo from "../assets/farlens.png";
import personalLogo from "../assets/JGwhite.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-content">
        <div className="site-logo">
          <Link
            to="/"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src={siteLogo} alt="FarLens" />
          </Link>
        </div>

        <div className="center-section">
          <div className="personal-logo">
            <img src={personalLogo} alt="Julian Gruber" />
          </div>
          {/* Locations (desktop only) */}
          <ul className="nav-locations desktop-only">
            <li>
              <Link
                to="/fc3"
                className={`fc3 ${
                  location.pathname === "/fc3" ? "active" : ""
                }`}
                onClick={closeMenu}
              >
                Rook Islands
              </Link>
            </li>
            <li>
              <Link
                to="/fc4"
                className={`fc4 ${
                  location.pathname === "/fc4" ? "active" : ""
                }`}
                onClick={closeMenu}
              >
                Kyrat
              </Link>
            </li>
            <li>
              <Link
                to="/fc5"
                className={`fc5 ${
                  location.pathname === "/fc5" ? "active" : ""
                }`}
                onClick={closeMenu}
              >
                Hope County
              </Link>
            </li>
            <li>
              <Link
                to="/fc6"
                className={`fc6 ${
                  location.pathname === "/fc6" ? "active" : ""
                }`}
                onClick={closeMenu}
              >
                Yara
              </Link>
            </li>
          </ul>
        </div>

        <nav className="nav-right">
          {/* Desktop */}
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

          {/* Mobile Links & Locations */}
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
                  <Link
                    to="/fc3"
                    className={`fc3 ${
                      location.pathname === "/fc3" ? "active" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    Rook Islands
                  </Link>
                </li>
                <li>
                  <Link
                    to="/fc4"
                    className={`fc4 ${
                      location.pathname === "/fc4" ? "active" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    Kyrat
                  </Link>
                </li>
                <li>
                  <Link
                    to="/fc5"
                    className={`fc5 ${
                      location.pathname === "/fc5" ? "active" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    Hope County
                  </Link>
                </li>
                <li>
                  <Link
                    to="/fc6"
                    className={`fc6 ${
                      location.pathname === "/fc6" ? "active" : ""
                    }`}
                    onClick={closeMenu}
                  >
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
