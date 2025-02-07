import React from "react";
import styles from "./Image.module.css";

interface ImageProps {
  src: string;
  alt: string;
}
export const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className={styles.container} />;
};
