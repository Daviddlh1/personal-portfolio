import logo from "public/vercel.svg";
import linkedInIcon from "public/menuIcons/linkedin_white_logo.svg";
import githubIcon from "public/menuIcons/github_white_icon.svg";
import menuIcon from "public/menuIcons/menu.svg";
import Image from "next/image";
import styles from "components/Menu/Menu.module.css";
import { useState } from "react";

export default function Menu({ active }) {
  const [isActive, setIsActive] = useState(false);

  function openMenu() {
    setIsActive(!isActive);
    active(!isActive);
  }

  return (
    <header className={`${styles.container}`}>
      <nav className={isActive?`${styles.navBar} ${styles.activeNavBar}`:`${styles.navBar}`}>
        <Image width="100px" height="50px" src={logo} alt="logo" />
        <Image
          onClick={openMenu}
          width="25px"
          height="25px"
          src={menuIcon}
          alt="logo"
        />
      </nav>
      <section
        className={
          isActive
            ? `${styles.optionsContainer} ${styles.active}`
            : `${styles.optionsContainer}`
        }
      >
        <div className={styles.logo}>
          <Image src={logo} alt="logo" width="100px" height="50px" />
        </div>
        <ul className={styles.listContainer}>
          <li>Home</li>
          <li>Myself</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact me</li>
          <li>Want to connect?</li>
          <li>
            <div className={styles.iconsContainer}>
              <Image
                src={linkedInIcon}
                width="20px"
                height="20px"
                alt="linkedIn-logo"
              />
              <Image
                src={githubIcon}
                width="20px"
                height="20px"
                alt="github-logo"
              />
            </div>
          </li>
        </ul>
      </section>
    </header>
  );
}
