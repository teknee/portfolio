import { FC, useLayoutEffect, useRef } from "react";
import { AudioSpectrum } from "./audioSprectrum";
// import React, { useRef, useEffect, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Audio, AudioAnalyser, AudioListener, AudioLoader, Mesh } from "three";

// const AudioSpectrum: React.FC = () => {
//   const meshRef = useRef<Mesh>(null);
//   const analyserRef = useRef<AudioAnalyser | null>(null);
//   const audioRef = useRef<Audio | null>(null);
//   useEffect(() => {
//     const listener = new AudioListener();
//     const audio = new Audio(listener);
//     const audioLoader = new AudioLoader();

//     audioLoader.load("/sounds/tiger_rag.mp3", (buffer) => {
//       audio.setBuffer(buffer);
//       audio.setLoop(true);
//       audio.setVolume(0.5);
//       audio.play();

//       const analyser = new AudioAnalyser(audio, 32);
//       analyserRef.current = analyser;
//       audioRef.current = audio;
//     });

//     return () => {
//       audio.stop();
//     };
//   }, []);

//   useFrame(() => {
//     if (analyserRef.current && meshRef.current) {
//       const data = analyserRef.current.getFrequencyData();
//       const scale = data[0] / 256;
//       console.log(data);
//       meshRef.current.scale.set(scale, scale, scale);
//     }
//   });

//   return (
//     <mesh ref={meshRef}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshBasicMaterial color="orange" />
//     </mesh>
//   );
// };

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
      <div id="spectrum" ref={containerRef}></div>;
    </>
  );
};
