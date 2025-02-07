import React from "react";
import styles from "./ContactSection.module.css";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className={styles.section}>
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam.
      </p>
    </section>
  );
};

export default ContactSection;
