import { Link } from "react-router-dom";
import { generals } from "../../../utils/animations";
import style from "./project.module.scss";
import { motion } from "framer-motion";

export default function Project({ project, index }) {
  const { title, description, date, url, tags } = project;

  const even = index % 2 === 0;

  return (
    <div
      style={{
        justifyContent:
          even && window.innerWidth > 700 ? "flex-end" : "flex-start",
      }}
      className={style.project}
    >
      <div>
        <p>{title}</p>
        <div className={style.imagecontainer}>
          <motion.img
            variants={generals}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            src={url}
            alt={title}
            className={style.image}
          />
          <div className={style.hoverimg}>
            <Link className={style.btn} to={`/projectdetail/${index}`}>
              <div className={style.slider}>
                <div className={style.el}>
                  <PerspectiveText>Read More</PerspectiveText>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
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
