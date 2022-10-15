import styles from "./ProjectsSection.module.css"
import { ProjectsCard } from "components/ProjectsCard";
import pokedex from "../../public/projectImages/Pokedex.png"

export default function ProjectsSection() {
  return (
    <>
      <section>
        <h2 className={styles.title}>Some Projects</h2>
        <div className={styles.projectsCardContainer} >
          <ProjectsCard 
          projectName={"Pokedex"} 
          projectDescription={"ProjectDescription"} 
          imageSrc={pokedex} />
        </div>
      </section>
    </>
  );
}
