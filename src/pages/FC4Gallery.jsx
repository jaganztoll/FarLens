import galleryData from "../data/galleryData";

const FC4Gallery = () => {
  const fc4 = galleryData.find((entry) => entry.id === 2);

  return (
    <section id="kyrat" className="p-4">
      <h2 className="text-2xl font-semibold mb-4">{fc4.title}</h2>
      <p className="text-sm text-gray-500 mb-6">{fc4.location}</p>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {fc4.images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${fc4.title} ${index + 1}`}
            className="mb-4 w-full object-cover rounded"
          />
        ))}
      </div>
    </section>
  );
};

export default FC4Gallery;
