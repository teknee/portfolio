import React from "react";
import classnames from "classnames";
import styles from "./Section.module.css";

type SectionProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  id: string;
  hideTitle?: boolean;
  transparent?: boolean;
};

export const Section = ({
  title,
  children,
  id,
  hideTitle,
  transparent,
}: SectionProps) => {
  const classname = classnames([
    styles.section,
    { [styles.transparent]: transparent },
  ]);
  return (
    <section id={id} className={classname}>
      <div className={styles.container}>
        {!hideTitle && <h2 className={styles.header}>{title}</h2>}
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
};
