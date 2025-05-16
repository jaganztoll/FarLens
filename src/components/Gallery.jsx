import "./Gallery.css";

function Gallery({ title, location, images, color }) {
  return (
    <section className="gallery" style={{ borderTop: `4px solid ${color}` }}>
      <h2>{title}</h2>
      <p>{location}</p>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt={`${title} - Bild ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
