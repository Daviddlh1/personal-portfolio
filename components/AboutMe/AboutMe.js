import styles from "./AboutMe.module.css";
import Image from "next/image";

export default function ThisIsMeSection() {
  return (
    <>
      <section className={styles.mainContainer}>
        <div className={styles.container}>
          <h2 className={styles.title}>About me</h2>
          <div>
            <h3 className={styles.subTitle} >
              I&apos;m searching for new challenges & experiences in my very
              first job in IT
            </h3>
            <p>
              I&apos;m interested in working in technology to collaborate on
              projects with a high social impact where I can really solve
              people&apos;s needs, contributing with all my knowledge in
              development and design, and fulfilling my dream of ideating and
              creating digital products in the real world.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
