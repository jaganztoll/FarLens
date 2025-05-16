import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">FarLens</div>
      <nav>
        <ul className="nav-links">
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
      </nav>
    </header>
  );
}

export default Navbar;
