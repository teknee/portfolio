import React from "react";
import styles from "./ContactSection.module.css";
import { Section } from "../Section";

export const ContactSection: React.FC = () => {
  return (
    <Section title="Contact" id="contact">
      <div className={styles.container}>
        <a href="https://www.linkedin.com/in/andrewdgeorge/" target="_blank">
          <img
            width={48}
            src="/public/images/logos/LI-In-Bug.png"
            alt="LinkedIn Profile"
          />
        </a>
        <a href="https://github.com/teknee" target="_blank">
          <img
            width={48}
            src="/public/images/logos/github-mark-white.png"
            alt="GitHub Profile"
          />
        </a>
      </div>
    </Section>
  );
};

export default ContactSection;
