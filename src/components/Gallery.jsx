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
    1: 3, // Map ID 1 to FC3
    2: 4, // Map ID 2 to FC4
    3: 5, // Map ID 3 to FC5
    4: 6, // Map ID 4 to FC6
  };

  return (
    <section id="gallery" className="gallery-row">
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
    </section>
  );
};

export default Gallery;
