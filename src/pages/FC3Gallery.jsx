import galleryData from "../data/galleryData";
import "../styles/FCGallery.css";

const FC3Gallery = () => {
  const fc3 = galleryData.find((entry) => entry.id === 1);

  return (
    <section id="rook" className="fc3-gallery">
      <h2>{fc3.title}</h2>
      <p className="location">{fc3.location}</p>

      <div className="masonry">
        {fc3.images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${fc3.title} ${index + 1}`}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

export default FC3Gallery;
