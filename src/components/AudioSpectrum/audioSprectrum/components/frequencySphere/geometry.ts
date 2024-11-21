import { SphereGeometry } from "three";

export function createGeometry(): SphereGeometry {
  return new SphereGeometry(0.5, 64, 32);
}
