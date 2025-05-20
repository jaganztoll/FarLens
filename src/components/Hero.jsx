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
  "/assets/hero/Hero4.jpg",
  "/assets/hero/Hero4.jpg",
];

function Hero() {
  return (
    <section id="hero" className="hero-carousel">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        navigation={true}
        pagination={true}
        loop={true}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
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
