import { Color, Group, HSL, Mesh, MeshStandardMaterial } from "three";
import { createMeshes } from "./mesh";
import { Analyzer } from "../audioAnalyzer/audioAnalyzer";

const baseHSLColors: { [key: string]: HSL } = {
  red: { h: 0 / 360, s: 0.9, l: 0.66 },
  yellow: { h: 59 / 360, s: 0.9, l: 0.66 },
  green: { h: 113 / 360, s: 0.63, l: 0.56 },
  blue: { h: 203 / 360, s: 0.9, l: 0.66 },
  violet: { h: 272 / 360, s: 0.74, l: 0.67 },
  black: { h: 0 / 360, s: 0.1, l: 0.18 },
};

// Function to get color for a specific frequency bin
function getColor(hsl: HSL, intensity: number) {
  return new Color().setHSL(hsl.h, hsl.s, hsl.l * (0.5 + 0.5 * intensity)); // Adjust lightness dynamically
}

export class FrequencySphere extends Group {
  meshes: Mesh[];
  analyzer: Analyzer;
  fftSize: number;
  constructor(count: number, columns: number) {
    super();
    this.fftSize = count * 2;
    this.meshes = createMeshes(count, columns);
    this.meshes.forEach((mesh) => this.add(mesh));
    this.analyzer = new Analyzer(this.fftSize);
  }

  async init() {
    await this.analyzer.init(); // Load the audio buffer
  }

  start() {
    this.analyzer.start(); // Start the audio
  }

  stop() {
    this.analyzer.stop(); // Stop the audio
  }

  update(_: number, elapsedTime: number) {
    const data = this.analyzer.getFrequencyData(elapsedTime);
    if (!data) {
      return;
    }

    this.meshes.forEach((mesh, i) => {
      const material = mesh.material as MeshStandardMaterial;
      mesh.position.y = data[i] / 100 + 0.5;
      let color: Color;

      if (data[i] === 0) {
        color = new Color().setHSL(
          baseHSLColors.black.h,
          baseHSLColors.black.s,
          baseHSLColors.black.l
        );
      } else {
        const frequencyValue = data[i] / 255; // Normalize to 0 - 1

        // Map the frequency value (0-255) to a base color from baseHSLColors (excluding black)
        const validColorKeys = Object.keys(baseHSLColors).filter(
          (key) => key !== "black"
        );
        const colorIndex = Math.floor((data[i] / 256) * validColorKeys.length);
        const reversedColorIndex = validColorKeys.length - 1 - colorIndex;
        const baseColor = baseHSLColors[validColorKeys[reversedColorIndex]];

        // Generate the final color for this bin
        color = getColor(baseColor, frequencyValue);
      }
      material.color.set(color);
      material.needsUpdate = true;
    });
  }
}
