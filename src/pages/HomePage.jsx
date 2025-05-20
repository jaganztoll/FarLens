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

      {/* Alle Galerien auf einmal als Prop an Gallery übergeben */}
      <Gallery galleries={galleryData} />

      <Contact />
    </>
  );
};

export default HomePage;
