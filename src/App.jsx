import About from './components/About';
import BeyondResearch from './components/BeyondResearch';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Research from './components/Research';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="intro">
          <Intro />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="research">
          <Research />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="beyond-research">
          <BeyondResearch />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer className="bg-white/70 backdrop-blur-xl border-t border-white/40 py-4">
        <div className="text-center text-gray-500 text-sm">
          Copyright &copy; 2025 Siying Wang. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
