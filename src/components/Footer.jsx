import "../styles/Footer.css";
import { Link } from "react-router-dom"; // Nur wenn du React Router verwendest

function Footer() {
  return (
    <footer id="footer" className="footer">
      <p>
        &copy; {new Date().getFullYear()} FarLens – Photography inspired by Far
        Cry
      </p>
      <p className="credits-link">
        <Link to="/credits">Behind the Lens</Link>
      </p>
    </footer>
  );
}

export default Footer;
