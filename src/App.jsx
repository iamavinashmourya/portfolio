import "./App.css";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import MotionSection from "./components/ui/MotionSection";
import SidebarLayout from "./components/layout/SidebarLayout";
import SidebarProfile from "./components/sidebar/SidebarProfile";
import AboutSection from "./components/sidebar/AboutSection";
import Education from "./components/sidebar/Education";
import ProblemSolving from "./components/sidebar/ProblemSolving";
import ExperienceList from "./components/sidebar/ExperienceList";
import ProjectsList from "./components/sidebar/ProjectsList";
import TechStackList from "./components/sidebar/TechStackList";
import Certificates from "./components/sidebar/Certificates";
import Preloader from "./components/ui/Preloader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <SidebarLayout
          sidebar={
            <SidebarProfile />
          }
          content={
            <>
              <MotionSection id="about" className="scroll-mt-0">
                <AboutSection />
              </MotionSection>

              <MotionSection id="education" className="scroll-mt-0">
                <Education />
              </MotionSection>

              <MotionSection id="problem-solving" className="scroll-mt-0">
                <ProblemSolving />
              </MotionSection>

              <MotionSection id="experience" className="scroll-mt-0">
                <ExperienceList />
              </MotionSection>

              <MotionSection id="skills" className="scroll-mt-0">
                <TechStackList />
              </MotionSection>

              <MotionSection id="projects" className="scroll-mt-0">
                <ProjectsList />
              </MotionSection>

              <MotionSection id="certificates" className="scroll-mt-0">
                <Certificates />
              </MotionSection>

              <footer className="pt-12 pb-6 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Avinash Mourya. Built with React &amp; Tailwind.</p>
              </footer>
            </>
          }
        />
      )}
    </>
  );
};

export default App;
