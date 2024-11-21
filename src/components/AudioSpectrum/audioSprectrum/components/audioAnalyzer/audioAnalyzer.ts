import { Audio, AudioAnalyser, AudioListener, AudioLoader } from "three";

export class Analyzer {
  audio: Audio;
  analyzer: AudioAnalyser;
  listener: AudioListener;
  loader: AudioLoader;

  constructor(fftSize: number) {
    this.listener = new AudioListener();
    this.audio = new Audio(this.listener);
    this.analyzer = new AudioAnalyser(this.audio, fftSize);
    this.loader = new AudioLoader();
  }

  async init() {
    const buffer = await this.loader.loadAsync(
      "/sounds/jazz_jazzmanx27s_journey.mp3"
    );
    this.audio.setVolume(1.0);
    this.audio.autoplay = true;
    this.audio.setBuffer(buffer);
    this.audio.setLoop(true);
  }

  start() {
    this.audio.context.resume();
  }

  stop() {
    this.audio.context.suspend();
  }

  getFrequencyData() {
    if (this.audio.context.state === "suspended") {
      console.error("Audio buffer not loaded");
      return null;
    }

    // Get the frequency data
    const data = this.analyzer.getFrequencyData();

    return data;
  }
}
