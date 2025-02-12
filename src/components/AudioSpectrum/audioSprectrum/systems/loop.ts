import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { Clock } from "three";

interface Updatable {
  update: (delta: number, elapsedTime: number) => void;
}

export class Loop {
  camera: PerspectiveCamera;
  scene: Scene;
  renderer: WebGLRenderer;
  updatables: Updatable[];
  clock: Clock;

  constructor(
    camera: PerspectiveCamera,
    scene: Scene,
    renderer: WebGLRenderer
  ) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
    this.clock = new Clock();
  }

  start() {
    this.renderer.setAnimationLoop(this.animate.bind(this));
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  animate() {
    const delta = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();

    for (const object of this.updatables) {
      object.update(delta, elapsedTime);
    }
    console.log(
      `Camera position: x=${this.camera.position.x}, y=${this.camera.position.y}, z=${this.camera.position.z}`
    );
    console.log(
      `Camera rotation: x=${this.camera.rotation.x}, y=${this.camera.rotation.y}, z=${this.camera.rotation.z}`
    );
    this.renderer.render(this.scene, this.camera);
  }
}

export default Loop;
