import { Color, Group, Mesh, MeshStandardMaterial } from "three";
import { createMeshes } from "./mesh";
import { Analyzer } from "../audioAnalyzer/audioAnalyzer";

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

  update() {
    const data = this.analyzer.getFrequencyData();
    if (!data) {
      return;
    }

    this.meshes.forEach((mesh, i) => {
      const material = mesh.material as MeshStandardMaterial;
      mesh.position.y = data[i] / 100 + 0.5;
      let color: Color;

      if (data[i] === 0) {
        color = new Color().setHSL(0, 0, 0.05);
      } else {
        const hue = data[i] === 0 ? 256 : 1 - (360 - (256 - data[i])) / 360;
        const saturation = data[i] === 0 ? 0 : 1;
        const luminance = 0.45;
        color = new Color().setHSL(hue, saturation, luminance);
      }
      material.color.set(color);
      material.needsUpdate = true;
    });
  }
}
