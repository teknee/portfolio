import React from "react";
import styles from "./Body.module.css";

interface BodyProps {
  children: React.ReactNode;
}
export const Body: React.FC<BodyProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
