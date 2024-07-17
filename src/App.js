import React, { useState } from 'react';
import './App.css';
import { Title } from './components/Titles/Title';
import About from './components/About/About';
import Projects from './components/Projects/ProjectsContainer';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

function App() {

  const [activeComponent, setActiveComponent] = useState('');

  const handleComponentClick = (title) => {
    setActiveComponent(prev => prev === title ? '' : title);
    window.scrollTo(0,0);
  };

  return (
    <div className="App">
      <Title title="About" text="i'm luis costantin" onClick={() => handleComponentClick('About')} />
      <About isActive={activeComponent === 'About'} />
      <Title title="Projects" text="junior developer" onClick={() => handleComponentClick('Projects')} />
      <Projects isActive={activeComponent === 'Projects'} />
      <Title title="Skills" text="in constant learning" onClick={() => handleComponentClick('Skills')} />
      <Skills isActive={activeComponent === 'Skills'} />
      <Title title="Contact" text="available to connect" onClick={() => handleComponentClick('Contact')}/>
      <Contact isActive={activeComponent === 'Contact'} />
    </div>
  );
}

export default App;
