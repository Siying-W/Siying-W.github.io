import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About';
import BeyondResearch from './components/BeyondResearch';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Research from './components/Research';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/beyond-research" element={<BeyondResearch />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
