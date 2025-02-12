import { Scene, Color } from "three";

export function createScene(): Scene {
  const scene = new Scene();
  scene.background = new Color(0x000000); // Set background to black
  return scene;
}
