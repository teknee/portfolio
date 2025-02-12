import { AxesHelper, GridHelper } from "three";

export function createAxesHelper(): AxesHelper {
  const axesHelper = new AxesHelper(200);
  return axesHelper;
}

export function createGridHelper(): GridHelper {
  const gridHelper = new GridHelper(40, 40, 0xffffff, 0xd3d3d3);
  return gridHelper;
}
