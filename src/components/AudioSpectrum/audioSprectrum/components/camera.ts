import { PerspectiveCamera } from "three";

export function createCamera(): PerspectiveCamera {
  const camera = new PerspectiveCamera(50, 1, 0.1, 300);
  camera.position.set(0, 5.5, -10);
  camera.lookAt(0, 7, -16);
  return camera;
}
