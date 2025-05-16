import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import galleryData from "./data/galleryData";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        {galleryData.map(({ id, title, location, images, color }) => (
          <Gallery
            key={id}
            title={title}
            location={location}
            images={images}
            color={color}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
