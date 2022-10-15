import Image from "next/image";
import styles from "./ProjectsCard.module.css";

export default function ProjectsCard({ projectName, projectDescription, imageSrc }) {
  return (
    <>
      <div className={styles.container} >
        <h2 className={styles.title}>{projectName}</h2>
        <Image src={imageSrc} width="350px" height="250px" alt={projectName} />
        <p>{projectDescription}</p>
      </div>
    </>
  );
}
