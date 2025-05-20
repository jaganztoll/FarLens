import galleryData from "../data/galleryData";
import "../styles/FCGallery.css";

const FC6Gallery = () => {
  const fc6 = galleryData.find((entry) => entry.id === 4);

  return (
    <section id="kyrat" className="fc-gallery fc6-gallery">
      <h2>{fc6.title}</h2>
      <p className="location">{fc6.location}</p>

      <div className="masonry">
        {fc6.images.map((src, index) => (
          <img key={index} src={src} alt={`${fc6.title} ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default FC6Gallery;
