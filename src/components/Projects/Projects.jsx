import style from "./projects.module.scss";
import Project from "./Project/Project";
import { projects } from "./data";

export default function Projects() {
  return (
    <div className={style.projects}>
      <h2>Our Projects</h2>
      {projects.map((project, index) => (
        <Project project={project} index={index} key={index} />
      ))}
    </div>
  );
}
