import { useState } from "react";
import Button from "./Button/Button";
import style from "./header.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav/Nav";
import { Link } from "react-router-dom";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const menu = {
    open: {
      width: "300px",
      height: "500px",
      top: "10px",
      right: "10px",
      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: "100px",
      height: "40px",
      top: "20px",
      right: "20px",
      transition: {
        duration: 0.75,
        delay: 0.35,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const arrow = {
    animate: {
      transform: "rotateZ(45deg)",
    },
  };

  return (
    <header className={style.main}>
      <Link to="/">
        <motion.img
          variants={arrow}
          animate={isActive ? "animate" : ""}
          whileTap="animate"
          src="./arrow.svg"
          alt="arrow"
          width={"40px"}
          height={"40px"}
        />
      </Link>
      <Button isActive={isActive} setIsActive={setIsActive} />
      <motion.div
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
        className={style.menu}
      >
        <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
      </motion.div>
    </header>
  );
}
