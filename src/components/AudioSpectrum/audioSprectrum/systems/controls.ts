import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Camera } from "three";

export function createControls(
  camera: Camera,
  canvas: HTMLCanvasElement
): OrbitControls {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  //   controls.maxPolarAngle = Math.PI / 2;
  controls.target.set(0, 3.5, -16);
  controls.update();
  // Log the camera position after update

  return controls;
}
