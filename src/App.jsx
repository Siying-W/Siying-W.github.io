import About from './components/About';
import BeyondResearch from './components/BeyondResearch';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Research from './components/Research';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-950 flex flex-col transition-colors duration-300">
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
        <footer className="bg-white/70 dark:bg-dark-900/70 backdrop-blur-xl border-t border-white/40 dark:border-dark-700/40 py-4 transition-colors duration-300">
          <div className="text-center text-gray-500 dark:text-gray-500 text-sm">
            Copyright &copy; {new Date().getFullYear()} Siying Wang. All Rights Reserved.
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
