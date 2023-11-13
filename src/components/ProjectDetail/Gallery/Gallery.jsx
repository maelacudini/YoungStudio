import style from "./gallery.module.scss";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

export default function Gallery({ images }) {
  const [slides, setSlides] = useState(3);

  useEffect(() => {
    if (window.innerWidth < 500) {
      setSlides(1);
    }
  }, []);

  return (
    <div className={style.gallery}>
      <Swiper
        loop={true}
        slidesPerView={slides}
        spaceBetween={10}
        draggable={true}
        freeMode={true}
        initialSlide={1}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              className={style.image}
              src={image}
              alt={image}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
