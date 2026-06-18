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
          <section id="teaching">
            <Experience />
          </section>
          <section id="beyond-research">
            <BeyondResearch />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <footer className="bg-white/70 dark:bg-dark-900/70 backdrop-blur-xl border-t border-white/40 dark:border-dark-700/40 py-6 transition-colors duration-300">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center text-gray-500 dark:text-gray-500 text-sm">
            <p>Copyright &copy; {new Date().getFullYear()} Siying Wang. All Rights Reserved.</p>
            <span className="hidden sm:inline text-gray-400 dark:text-gray-600" aria-hidden="true">
              ·
            </span>
            <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-600">
              Last updated on {__LAST_DEPLOYED_DATE__}.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
