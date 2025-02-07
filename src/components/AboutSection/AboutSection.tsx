import React from "react";
import styles from "./AboutSection.module.css";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className={styles.section}>
      <h2 className={styles.title}>
        <span className={styles.greeting}>Hi.</span>
        <span className={styles.intro}>
          <span className={styles.block}>I'm</span>
          <span className={styles.block}>Andrew</span>
        </span>
      </h2>
      <p className={styles.subtitle}>I make web UIs and other things.</p>
    </section>
  );
};

export default AboutSection;
