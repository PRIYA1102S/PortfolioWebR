import './App.css';




import Header from './components/Header';
import Contact from './components/Contact';
import ProfileComponent from './components/ProfileComponent';
import About from './components/About';
import Footer from './components/Footer';
import CodingProfiles from './components/CodingProfiles';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

const App = () => {
  return (
    <div>
      <Header />
      <div id="profile">
        <ProfileComponent />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="codingprofiles">
        <CodingProfiles />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
