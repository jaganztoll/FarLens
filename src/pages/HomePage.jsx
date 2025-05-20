import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import galleryData from "../data/galleryData";
import Contact from "../components/Contact";

const HomePage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Timeout für sicherer Renderzeit, damit DOM da ist
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    } else {
      // Scroll zum Seitenanfang, falls kein Hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);
  return (
    <>
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
      <Contact />
    </>
  );
};

export default HomePage;
