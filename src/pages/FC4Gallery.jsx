import galleryData from "../data/galleryData";
import "../styles/FCGallery.css";

const FC4Gallery = () => {
  const fc4 = galleryData.find((entry) => entry.id === 2);

  return (
    <section id="kyrat" className="fc4-gallery">
      <h2>{fc4.title}</h2>
      <p className="location">{fc4.location}</p>

      <div className="masonry">
        {fc4.images.map((src, index) => (
          <img key={index} src={src} alt={`${fc4.title} ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default FC4Gallery;
