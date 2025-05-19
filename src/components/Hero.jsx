import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Hero.css";

const images = [
  "/assets/fc3/candy-hartawan-yOajPc4fBUU-unsplash.jpg",
  "/assets/fc4/tim-van-kempen-mpYKQK3GzSE-unsplash.jpg",
  "/assets/fc5/steven-cordes-HD0D7bKZ_4k-unsplash.jpg",
  "/assets/fc6/alexander-kunze-uLh71gTmZ4g-unsplash.jpg",
];

function Hero() {
  return (
    <section className="hero-carousel">
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
