import { Link } from "react-router-dom";
import "../styles/Gallery.css";

function Gallery({ title, location, images, color, linkTo, previewIndex = 0 }) {
  return (
    <section
      id="gallery"
      className="gallery"
      style={{ borderTop: `4px solid ${color}` }}
    >
      <h2>{title}</h2>
      <p>{location}</p>
      <div className="gallery-grid">
        {/* Nur das Bild am previewIndex anzeigen */}
        <Link to={linkTo} className="gallery-item">
          <img
            src={images[previewIndex]}
            alt={`${title} - Vorschau Bild`}
            loading="lazy"
          />
        </Link>
      </div>
    </section>
  );
}

export default Gallery;
