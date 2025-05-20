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
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <About />

      {galleryData.map(({ id, title, location, images, color }) => {
        // Individuelle Vorschau-Index pro Galerie definieren
        let previewIndex = 0;
        if (id === 1) previewIndex = 1;
        if (id === 2) previewIndex = 15;
        if (id === 3) previewIndex = 10;
        if (id === 4) previewIndex = 2;

        return (
          <Gallery
            key={id}
            title={title}
            location={location}
            images={images}
            color={color}
            linkTo={`/fc${id}`}
            previewIndex={previewIndex}
          />
        );
      })}

      <Contact />
    </>
  );
};

export default HomePage;
