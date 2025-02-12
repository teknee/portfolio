import React from "react";
import styles from "./Root.module.css";

interface RootProps {
  children: React.ReactNode;
}
export const Root: React.FC<RootProps> = ({ children }) => {
  return <article className={styles.card}>{children}</article>;
};
