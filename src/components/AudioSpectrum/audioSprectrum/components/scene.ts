import { Scene, Color } from "three";

export function createScene(): Scene {
  const scene = new Scene();
  scene.background = new Color().setHSL(0, 0.1, 0.01); // Set background to black
  return scene;
}
