import { HemisphereLight, DirectionalLight } from "three";

export function createLights() {
  const ambientLight = new HemisphereLight(0x404040, 0x080808, 1); // dark gray and almost black
  const mainLight = new DirectionalLight(0xffffff, 1); // white color
  mainLight.position.set(10, 10, 10);

  return { ambientLight, mainLight };
}
