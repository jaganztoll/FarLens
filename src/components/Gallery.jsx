import React from "react";
import { Link } from "react-router-dom";
import "../styles/Gallery.css";

const Gallery = ({ galleries }) => {
  return (
    <section id="gallery" className="gallery-row">
      {galleries.map(({ id, title, location, images, color }) => {
        const previewIndex =
          id === 1 ? 1 : id === 2 ? 15 : id === 3 ? 10 : id === 4 ? 2 : 0;
        const previewImage =
          images && images.length > previewIndex ? images[previewIndex] : null;

        return (
          <Link to={`/fc${id}`} className="gallery-card" key={id}>
            <div className="image-wrapper" style={{ backgroundColor: color }}>
              {previewImage ? (
                <img src={previewImage} alt={title} />
              ) : (
                <div className="placeholder">Bild nicht verfügbar</div>
              )}
              <div className="gallery-text">
                <h3>{title}</h3>
                <p>{location}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Gallery;
