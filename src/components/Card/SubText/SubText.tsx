import React from "react";
import styles from "./SubText.module.css";

type SubTextProps = {
  children: React.ReactNode;
  className?: string;
};

export const SubText = ({ children }: SubTextProps) => (
  <p className={styles.subText}>{children}</p>
);
