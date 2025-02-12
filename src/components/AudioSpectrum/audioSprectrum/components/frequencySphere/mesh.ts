import { Color, Mesh } from "three";
import { createGeometry } from "./geometry";
import { createMaterial } from "./material";

export function createMeshes(count: number, columns: number): Mesh[] {
  const meshes: Mesh[] = [];
  const geometry = createGeometry();

  for (let i = count - 1; i >= 0; i--) {
    const mesh = new Mesh(geometry, createMaterial());
    mesh.position.set(
      (i % columns) - columns / 2 + 0.5,
      0.5,
      -Math.floor(i / columns)
    );
    mesh.material.color = new Color().setHSL(256, 0, 0.05);
    meshes.push(mesh);
  }

  return meshes;
}
