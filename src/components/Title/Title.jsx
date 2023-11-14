import { title } from "../../utils/animations";
import style from "./title.module.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Title() {
  const [deviceHeight, setDeviceHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setDeviceHeight(window.innerHeight);
    };

    // Add an event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const h1Text =
    "Young Studio®, based in Vienna, specializes in strategic branding to help businesses establish a powerful and unique identity.";
  const wordsArray = h1Text.split(/\s+/);

  return (
    <div className={style.title} style={{ height: deviceHeight }}>
      <div className={style.content}>
        {wordsArray.map((word, index) => (
          <div key={index} style={{ overflowY: "hidden" }}>
            <motion.h1 variants={title} initial="initial" whileInView="animate">
              {word}&nbsp;
            </motion.h1>
          </div>
        ))}
      </div>
    </div>
  );
}
