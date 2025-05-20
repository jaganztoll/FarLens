import React from "react";
import { Link } from "react-router-dom";
import "../styles/Gallery.css";

const heroImages = [
  "/assets/hero/Hero1.jpg",
  "/assets/hero/Hero2.jpg",
  "/assets/hero/Hero3.jpg",
  "/assets/hero/Hero4.jpg",
];

const Gallery = ({ galleries }) => {
  const idToRouteMap = {
    1: 3,
    2: 4,
    3: 5,
    4: 6,
  };

  return (
    <section id="gallery" className="gallery-row">
      {galleries.map(({ id, title, location, color }) => {
        const previewImage = heroImages[id - 1]; // Hero1.jpg bis Hero4.jpg
        const routeId = idToRouteMap[id] || id;

        return (
          <Link to={`/fc${routeId}`} className="gallery-card" key={id}>
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
