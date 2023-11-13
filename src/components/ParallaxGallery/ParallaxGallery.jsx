import style from "./parallaxgallery.module.scss";
import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";

const images = [
  "Architecture/1.jpg",
  "Architecture/2.jpg",
  "Architecture/3.jpg",
  "Architecture/4.jpg",
  "Interior/1.jpg",
  "Interior/2.jpg",
  "Interior/3.jpg",
  "Interior/4.jpg",
  "Photography/1.jpg",
  "Photography/2.jpg",
  "Photography/3.jpg",
  "Photography/4.jpg",
];

export default function ParallaxGallery() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className={style.main}>
      <div ref={gallery} className={style.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
    </main>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div className={style.column} style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className={style.imageContainer}>
            <img src={`./${src}`} alt="image" />
          </div>
        );
      })}
    </motion.div>
  );
};
