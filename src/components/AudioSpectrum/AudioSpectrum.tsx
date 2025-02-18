import { FC, useLayoutEffect, useRef } from "react";
import { AudioSpectrum } from "./audioSprectrum";
import styles from "./AudioSpectrum.module.css";

export const AudioSpectrumCanvas: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const audioSpectrumRef = useRef<AudioSpectrum | null>(null);

  useLayoutEffect(() => {
    if (containerRef.current && containerRef.current.children.length === 0) {
      console.log("Creating audio spectrum");
      audioSpectrumRef.current = new AudioSpectrum(containerRef.current);
    }
  }, []);

  return (
    <div id="spectrum" className={styles.container} ref={containerRef}></div>
  );
};
