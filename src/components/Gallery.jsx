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
    <section id="gallery" className="gallery-wrapper">
      <div className="gallery-row">
        {galleries.map(({ id, title }) => {
          const previewImage = heroImages[id - 1];
          const routeId = idToRouteMap[id] || id;

          return (
            <Link to={`/fc${routeId}`} className="gallery-card" key={id}>
              <div className="image-wrapper">
                {previewImage ? (
                  <img src={previewImage} alt={title} />
                ) : (
                  <div className="placeholder">Bild nicht verfügbar</div>
                )}
                <div className="gallery-overlay">
                  <h4>{title}</h4>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
