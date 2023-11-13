import React, { useState, useEffect } from "react";
import style from "./intro.module.scss";
import { motion } from "framer-motion";
import { intro } from "../../utils/animations";

const images = [
  "./Architecture/1.jpg",
  "./Fashion/2.jpg",
  "./Furniture/3.jpg",
  "./Home/4.jpg",
  "./Interior/3.jpg",
  "./Photography/2.jpg",
];

export default function Intro() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const nextImage = (prevImage + 1) % 6;
        if (nextImage === 0) {
          clearInterval(interval);
        }
        return nextImage;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div variants={intro} exit="exit" className={style.intro}>
      <img
        src={images[currentImage]}
        alt="image"
        width={"300px"}
        height={"300px"}
        style={{ objectFit: "cover" }}
      />
    </motion.div>
  );
}
