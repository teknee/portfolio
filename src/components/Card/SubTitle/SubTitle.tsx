import React from "react";
import styles from "./SubTitle.module.css";

interface SubTitleProps {
  children: React.ReactNode;
}
export const SubTitle: React.FC<SubTitleProps> = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};
