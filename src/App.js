import { Route, Routes, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './App.scss';
import Navbar from './components/navBar/Navbar';
import Theme from './components/theme/Theme';
import About from './containers/about/About';
import Contact from './containers/contact/Contact';
import Home from './containers/home/Home';
import Portfolio from './containers/portfolio/Portfolio';
import Resume from './containers/resume/Resume';
import Skills from './containers/skills/Skills';
import particlesconfig from './helpers/particlesconfig';

function App() {
  const ParticlesInit = async (main) => {
    await loadFull(main);
  };

  const location = useLocation();

  const ParticlesBackground = location.pathname === '/';

  return (
    <>
      <div className="App">
        {/*particle js*/}
        <div className="ts">
          {ParticlesBackground && (
            <Particles
              id="particles"
              options={particlesconfig}
              init={ParticlesInit}
            />
          )}
        </div>

        {/*navbar components*/}

        <div className="App__navbar__wrapper">
          <Navbar />
        </div>

        {/*main page content*/}

        <div className="App__main-content-wrapper">
          <Theme />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
