import React from "react";
import styles from "./Section.module.css";

type SectionProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  id: string;
};

export const Section = ({ title, children, id }: SectionProps) => (
  <section id={id} className={styles.section}>
    <h2 className={styles.header}>{title}</h2>
    <div className={styles.content}>{children}</div>
  </section>
);
