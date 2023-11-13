import { Link, useParams } from "react-router-dom";
import style from "./projectdetail.module.scss";
import { projects } from "../Projects/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Gallery from "./Gallery/Gallery";
import { useEffect, useRef } from "react";
import { generals } from "../../utils/animations";

export default function ProjectDetail() {
  //get at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //parallax effect
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const parallax = useTransform(scrollYProgress, [0, 1], [0, -200]);

  //get project infos
  const { id } = useParams();
  const projectIndex = parseInt(id, 10);

  const project = projects.find((_, index) => index === projectIndex);

  if (
    !project ||
    isNaN(projectIndex) ||
    projectIndex < 0 ||
    projectIndex >= projects.length
  ) {
    return (
      <div className={style.projectdetail}>
        <h1>Invalid Project ID</h1>
        <p>What are you doing here?</p>
        <Link to="/">Go back to the Homepage.</Link>
      </div>
    );
  }

  return (
    <motion.div
      variants={generals}
      initial="initial"
      animate="animate"
      exit="exit"
      className={style.projectdetail}
    >
      <div className={style.parallax}>
        <motion.img style={{ y: parallax }} alt="image" src={project.url} />
        <Link className={style.back} to="/">
          Back Home
        </Link>
        <div className={style.parallaxdesc}>
          <h2>{project.title}</h2>
          <p>{project.date}</p>
        </div>
      </div>

      <div className={style.description}>
        <div className={style.col}>
          {project.tags.map((tag, index) => (
            <p key={index} className={style.tag}>
              {tag}
            </p>
          ))}
        </div>
        <div className={style.col}>
          <div className={style.section}>
            <h2>About</h2>
            <p>{project.description}</p>
          </div>
          <div className={style.section}>
            <h2>The Objective</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              exercitationem. Alias repellat obcaecati at unde soluta
              necessitatibus aut voluptatibus, quidem iste illo reprehenderit,
              officiis fugiat sunt debitis tempore tenetur. Sunt.
            </p>
          </div>
        </div>
      </div>

      <Gallery images={project.gallery} index={id} />
    </motion.div>
  );
}
