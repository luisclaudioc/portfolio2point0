import React, { useState, useEffect } from 'react';
import './App.css';
import { Title } from './components/Titles/Title';
import About from './components/About/About';
import Projects from './components/Projects/ProjectsContainer';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

function App() {

  const [activeComponent, setActiveComponent] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleComponentClick = (title) => {
    if (!isMobile) {
      setActiveComponent(prev => prev === title ? '' : title);
    }
  };

  return (
    <div className="App">
      <Title title="About" text="i'm luis costantin" onClick={() => handleComponentClick('About')} />
      <About isActive={activeComponent === 'About' || isMobile} />
      <Title title="Projects" text="junior developer" onClick={() => handleComponentClick('Projects')} />
      <Projects isActive={activeComponent === 'Projects' || isMobile} />
      <Title title="Skills" text="in constant learning" onClick={() => handleComponentClick('Skills')} />
      <Skills isActive={activeComponent === 'Skills' || isMobile} />
      <Title title="Contact" text="available to connect" onClick={() => handleComponentClick('Contact')}/>
      <Contact isActive={activeComponent === 'Contact' || isMobile} />
    </div>
  );
}

export default App;
