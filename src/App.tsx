import "./App.css";

// import { AudioSpectrumCanvas } from "./components/AudioSpectrum";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { WorkSection } from "./components/WorkSection";

function App() {
  return (
    <>
      {/* <div style={{ width: "100vw", height: "100vh" }}>
        <AudioSpectrumCanvas />
      </div> */}
      <Header />
      <main>
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
