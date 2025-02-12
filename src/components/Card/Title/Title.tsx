import React from "react";
import styles from "./Title.module.css";

interface TitleProps {
  children: React.ReactNode;
}
export const Title: React.FC<TitleProps> = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};
