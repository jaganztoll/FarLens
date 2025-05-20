import galleryData from "../data/galleryData";

const FC3Gallery = () => {
  const fc3 = galleryData.find((entry) => entry.id === 1);

  return (
    <section id="rook" className="p-4">
      <h2 className="text-2xl font-semibold mb-4">{fc3.title}</h2>
      <p className="text-sm text-gray-500 mb-6">{fc3.location}</p>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {fc3.images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${fc3.title} ${index + 1}`}
            className="mb-4 w-full object-cover rounded"
          />
        ))}
      </div>
    </section>
  );
};

export default FC3Gallery;
