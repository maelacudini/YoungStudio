import Title from "../Title/Title";
import Projects from "../Projects/Projects";
import ParallaxGallery from "../ParallaxGallery/ParallaxGallery";
import Header from "../Header/Header";
import { motion } from "framer-motion";
import { generals } from "../../utils/animations";
import HorizontalScroll from "../HorizontalScroll/HorizontalScroll";
import { useState } from "react";

export default function Home() {
  return (
    <motion.div
      variants={generals}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header />
      <Title />
      <ParallaxGallery />
      <Projects />
      {/* <HorizontalScroll /> */}
    </motion.div>
  );
}
