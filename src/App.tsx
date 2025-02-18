import { AudioSpectrumCanvas } from "./components/AudioSpectrum";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { WorkSection } from "./components/WorkSection";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <AudioSpectrumCanvas />
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <AboutSection />
          <WorkSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
