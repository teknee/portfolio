import type { PerspectiveCamera, WebGLRenderer, Scene } from "three";
import type { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { createCamera } from "./components/camera";
import { FrequencySphere } from "./components/frequencySphere/frequencySphere";
import { createLights } from "./components/lights";
import { createAxesHelper, createGridHelper } from "./components/helpers";
import { createScene } from "./components/scene";
import { createControls } from "./systems/controls";
import { Loop } from "./systems/loop";
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/resizer";

class AudioSpectrum {
  camera: PerspectiveCamera;
  renderer: WebGLRenderer;
  scene: Scene;
  loop: Loop;
  resizer: Resizer;
  controls: OrbitControls;
  spheres: FrequencySphere;
  columns: number;
  options: { helpers: boolean; controls: boolean };

  constructor(container: HTMLDivElement) {
    this.options = {
      helpers: false,
      controls: false,
    };

    this.columns = 32;
    this.camera = createCamera();
    this.renderer = createRenderer();
    this.scene = createScene();
    this.loop = new Loop(this.camera, this.scene, this.renderer);
    container.append(this.renderer.domElement);
    const { ambientLight, mainLight } = createLights();
    this.controls = createControls(this.camera, this.renderer.domElement);
    this.resizer = new Resizer(container, this.camera, this.renderer);
    this.spheres = new FrequencySphere(2048, this.columns);
    this.spheres.init();
    this.loop.updatables.push(this.spheres);

    this.scene.add(ambientLight, mainLight, this.spheres);

    if (this.options.helpers) {
      this.scene.add(createAxesHelper(), createGridHelper());
    }

    this.controls.enabled = this.options.controls;

    this.start();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    this.loop.start();
  }

  stop() {
    this.loop.stop();
  }

  playAudio() {
    this.spheres.start();
  }

  stopAudio() {
    this.spheres.stop();
  }
}

export { AudioSpectrum };
