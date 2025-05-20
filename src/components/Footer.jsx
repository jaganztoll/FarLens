import "../styles/Footer.css";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <p>
        &copy; {new Date().getFullYear()} FarLens – Photography inspired by Far
        Cry
      </p>
    </footer>
  );
}

export default Footer;
