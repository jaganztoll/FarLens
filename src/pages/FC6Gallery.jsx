import galleryData from "../data/galleryData";

const FC6Gallery = () => {
  const fc6 = galleryData.find((entry) => entry.id === 4);

  return (
    <section id="yara" className="p-4">
      <h2 className="text-2xl font-semibold mb-4">{fc6.title}</h2>
      <p className="text-sm text-gray-500 mb-6">{fc6.location}</p>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {fc6.images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${fc6.title} ${index + 1}`}
            className="mb-4 w-full object-cover rounded"
          />
        ))}
      </div>
    </section>
  );
};

export default FC6Gallery;
