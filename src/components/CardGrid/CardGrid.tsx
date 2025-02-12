import React from "react";
import styles from "./CardGrid.module.css";

interface CardGridProps {
  children: React.ReactNode;
}

export const CardGrid: React.FC<CardGridProps> = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};

export default CardGrid;
