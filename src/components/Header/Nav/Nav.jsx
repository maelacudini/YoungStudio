import { useEffect, useState } from "react";
import { linksanimation } from "./animations";
import { links } from "./data";
import style from "./nav.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Nav() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <nav className={style.nav}>
      {links.map((link, index) => (
        <motion.div
          variants={linksanimation}
          initial="initial"
          animate="enter"
          exit="exit"
          custom={index}
          className={style.linkcontainer}
          key={index + link.title}
        >
          <Link className={style.link} to={link.href}>
            {link.title}
          </Link>
          <img src="./arrow.svg" alt="arrow" className={style.arrow} />
        </motion.div>
      ))}

      <motion.div
        variants={linksanimation}
        initial="initial"
        animate="enter"
        exit="exit"
        custom={5}
        className={style.footer}
      >
        <p>{currentTime.toUTCString()}</p>
      </motion.div>
    </nav>
  );
}
