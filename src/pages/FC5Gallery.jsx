import galleryData from "../data/galleryData";
import "../styles/FCGallery.css";

const FC5Gallery = () => {
  const fc5 = galleryData.find((entry) => entry.id === 3);

  return (
    <section id="kyrat" className="fc-gallery fc5-gallery">
      <h2>{fc5.title}</h2>
      <p className="location">{fc5.location}</p>

      <div className="masonry">
        {fc5.images.map((src, index) => (
          <img key={index} src={src} alt={`${fc5.title} ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default FC5Gallery;
