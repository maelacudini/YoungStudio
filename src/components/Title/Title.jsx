import { title } from "../../utils/animations";
import style from "./title.module.scss";
import { motion } from "framer-motion";

export default function Title() {
  const h1Text =
    "Young Studio®, based in Vienna, specializes in strategic branding to help businesses establish a powerful and unique identity.";
  const wordsArray = h1Text.split(/\s+/);

  return (
    <div className={style.title}>
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
