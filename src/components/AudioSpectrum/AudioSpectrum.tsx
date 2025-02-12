import { FC, useLayoutEffect, useRef } from "react";
import { AudioSpectrum } from "./audioSprectrum";

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
    <>
      <div style={{ position: "fixed" }}>
        <button onClick={() => audioSpectrumRef.current?.playAudio()}>
          Start
        </button>
        <button onClick={() => audioSpectrumRef.current?.stopAudio()}>
          Stop
        </button>
      </div>
      <div id="spectrum" ref={containerRef}></div>
    </>
  );
};
