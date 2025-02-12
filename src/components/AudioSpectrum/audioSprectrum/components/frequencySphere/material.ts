import { MeshStandardMaterial } from "three";

export function createMaterial() {
  return new MeshStandardMaterial({
    flatShading: true,
  });
}
