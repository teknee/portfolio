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
      "/sounds/cheerful_gypsy_jazz.mp3"
    );
    try {
      this.audio.setVolume(1.0);
      this.audio.autoplay = false;
      this.audio.setBuffer(buffer);
      this.audio.setLoop(true);
    } catch (error) {
      console.warn("Error setting up the audio:", error);
    }
  }

  start() {
    this.audio.context.resume();
  }

  stop() {
    this.audio.context.suspend();
  }

  getFrequencyData(elapsedTime: number): Uint8Array | null {
    // Get the frequency data
    let data;
    const isLoaded = !!this.audio.buffer;
    const isPlaying = this.audio.context.state === "running" && isLoaded;
    // TODO: refactor this to use the real frequency data once audio controls are implemented.
    // eslint-disable-next-line no-constant-condition, no-constant-binary-expression
    if (false && isPlaying) {
      data = this.analyzer.getFrequencyData();
    } else {
      // Generate a fake data array with values between 0 and 255.
      // Use the length of the analyzer data array.
      const length = this.analyzer.getFrequencyData().length;
      data = new Uint8Array(length);
      for (let i = 0; i < length; i++) {
        // Calculate a sine-based value using elapsedTime (milliseconds), normalized to [0, 255].
        const timeFactor = elapsedTime * 1; // Convert milliseconds to seconds
        data[i] = Math.round(
          ((Math.sin(i + timeFactor) + 1) / 2) * (1 - i / length) * 128
        );
      }
    }

    return data;
  }
}
