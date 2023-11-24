import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import { createContext, useContext } from 'react';
import { useRef } from 'react';

const ContextProvider = createContext();

const App = () => {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <ContextProvider.Provider
      value={{ homeRef, skillsRef, aboutRef, projectsRef, scrollToRef }}
    >
      <>
        <Navbar />
        <Hero />
        <Skills />
        <About />
        <Projects />
      </>
    </ContextProvider.Provider>
  );
};

export const useGlobalContext = () => useContext(ContextProvider);

export default App;
