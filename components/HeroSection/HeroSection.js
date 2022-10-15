import styles from "./HeroSection.module.css"

export default function HeroSection() {
  return (
    <>
      <section className={styles.mainContainer}>
        <h2>Hi, my name is</h2>
        <h1>David De la Hoz</h1>
        <h3>I&apos;m a Full-Stack Developer based in Barranquilla, Colombia</h3>
        <div className={styles.iconsContainer}>
          <a target="_blank" href="https://www.linkedin.com/in/david-de-la-hoz/" rel="noreferrer" >
            <span className={styles.linkedInIcon}></span>
          </a>
          <a target="_blank" href="https://github.com/Daviddlh1" rel="noreferrer" >
            <span className={styles.gitHubIcon}></span>
          </a>
        </div>
      </section>
    </>
  );
}
