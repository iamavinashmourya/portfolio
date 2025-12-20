import "./App.css";
import MatrixBackground from "./components/ui/MatrixBackground";
import CommandDeck from "./sections/Dashboard/CommandDeck";
import Navbar from "./sections/Navbar/Navbar";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import ProjectsCyber from "./sections/Projects/ProjectsCyber";
import Maintenance from "./sections/Maintenance/Maintenance";
import ActivityHub from "./sections/Activity/ActivityHub";
import Footer from "./sections/Footer/Footer";

import TechSkills from "./sections/Skills/TechSkills";
import CertificatePanel from "./components/ui/CertificatePanel";
import ContactModal from "./components/ui/ContactModal";
import { useState, useEffect } from "react";

const MAINTENANCE_MODE = false;

const App = () => {
  const [showCertificates, setShowCertificates] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleOpenCertificates = () => setShowCertificates(true);
    const handleOpenContact = () => setShowContact(true);

    window.addEventListener('open-certificates', handleOpenCertificates);
    window.addEventListener('open-contact', handleOpenContact);

    return () => {
      window.removeEventListener('open-certificates', handleOpenCertificates);
      window.removeEventListener('open-contact', handleOpenContact);
    };
  }, []);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-primary selection:text-black">
      <Navbar />
      <div className="pt-24">
        <About />
        <Experience />
        <CommandDeck />
        <ActivityHub />
        <ProjectsCyber />
        <TechSkills />
        <Footer />
      </div>

      {MAINTENANCE_MODE && <Maintenance />}
      <CertificatePanel isOpen={showCertificates} onClose={() => setShowCertificates(false)} />
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
    </div>
  );
};

export default App;
