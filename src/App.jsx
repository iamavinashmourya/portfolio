import "./App.css";
import MatrixBackground from "./components/ui/MatrixBackground";
import CommandDeck from "./sections/Dashboard/CommandDeck";
import Navbar from "./sections/Navbar/Navbar";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import ProjectsCyber from "./sections/Projects/ProjectsCyber";
import Hackathons from "./sections/Hackathons/Hackathons";
import Maintenance from "./sections/Maintenance/Maintenance";

const MAINTENANCE_MODE = true; // Set to false to show the full portfolio

function App() {
  if (MAINTENANCE_MODE) {
    return <Maintenance />;
  }

  return (
    <main className="min-h-screen bg-dark text-white relative">
      <MatrixBackground />
      <Navbar />
      <div className="pt-24"> {/* Add padding for fixed navbar since Hero is no longer first */}
        <About />
        <Experience />
        <CommandDeck />
        <ProjectsCyber />
        <Hackathons />
      </div>


    </main>
  );
}

export default App;
