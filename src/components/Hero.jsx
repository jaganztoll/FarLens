import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Hero.css";

const images = [
  "/assets/hero/Hero1.jpg",
  "/assets/hero/Hero2.jpg",
  "/assets/hero/Hero3.jpg",
  "/assets/hero/Hero4.jpg",
];

function Hero() {
  useEffect(() => {
    function setVh() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    setVh();
    window.addEventListener("resize", setVh);
    window.addEventListener("load", setVh);

    return () => {
      window.removeEventListener("resize", setVh);
      window.removeEventListener("load", setVh);
    };
  }, []);

  return (
    <section id="hero" className="hero-carousel">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        allowTouchMove={true}
        watchSlidesProgress={true}
        slidesPerView={1}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Far Cry location ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;
