import React from "react";
import styles from "./Footer.module.css";

interface FooterProps {
  children: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({ children }) => {
  return <footer className={styles.footer}>{children}</footer>;
};
