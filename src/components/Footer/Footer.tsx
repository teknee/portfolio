import React from "react";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} Andrew George. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
