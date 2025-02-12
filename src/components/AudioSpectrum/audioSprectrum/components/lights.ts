import { HemisphereLight, DirectionalLight } from "three";

export function createLights() {
  const ambientLight = new HemisphereLight(0x404040, 0x101010, 1); // dark gray and almost black
  const mainLight = new DirectionalLight(0xffffff, 1); // white color
  mainLight.position.set(-5, 16, 0);
  const secondaryLight = new DirectionalLight(0xffffff, 0.5); // white color
  secondaryLight.position.set(5, -16, 0);

  return { ambientLight, mainLight, secondaryLight };
}
