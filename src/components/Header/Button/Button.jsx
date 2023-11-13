import style from "./button.module.scss";
import { motion } from "framer-motion";

export default function Button({ setIsActive, isActive }) {
  return (
    <button
      onClick={() => {
        setIsActive(!isActive);
      }}
      className={style.btn}
    >
      <motion.div
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{
          duration: 0.5,
          type: "tween",
          ease: [0.76, 0, 0.24, 1],
        }}
        className={style.slider}
      >
        <div className={style.el}>
          <PerspectiveText>menu</PerspectiveText>
        </div>
        <div className={style.el}>
          <PerspectiveText>close</PerspectiveText>
        </div>
      </motion.div>
    </button>
  );
}

function PerspectiveText({ children }) {
  return (
    <div className={style.perspectiveText}>
      <p>{children}</p>
      <p>{children}</p>
    </div>
  );
}
