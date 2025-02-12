import React from "react";
import styles from "./Description.module.css";

interface DescriptionProps {
  children: React.ReactNode;
}

export const Description: React.FC<DescriptionProps> = ({ children }) => {
  return <p className={styles.description}>{children}</p>;
};
