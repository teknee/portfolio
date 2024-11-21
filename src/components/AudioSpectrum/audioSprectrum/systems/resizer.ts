import type { PerspectiveCamera, WebGLRenderer } from "three";

class Resizer {
  private container: HTMLDivElement;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;

  constructor(
    container: HTMLDivElement,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer
  ) {
    this.container = container;
    this.camera = camera;
    this.renderer = renderer;

    this.setSize();
    window.addEventListener("resize", () => this.onResize());
  }

  private setSize() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
  }

  private onResize() {
    this.setSize();
  }
}

export { Resizer };
