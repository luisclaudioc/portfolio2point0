import React, { useState } from 'react';
import './App.css';
import { Title } from './components/Titles/Title';
import About from './components/About/About';
import Projects from './components/Projects/ProjectsContainer';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

function App() {

  const [activeTitle, setActiveTitle] = useState('');

  const handleTitleClick = (title) => {
    setActiveTitle(prev => prev === title ? '' : title);
  };

  return (
    <div className="App">
      <Title title="About" text="i'm luis costantin" onClick={() => handleTitleClick('About')} />
      <About isActive={activeTitle} />
      <Title title="Projects" text="junior developer" onClick={() => handleTitleClick('Projects')} />
      <Projects isActive={activeTitle} />
      <Title title="Skills" text="mastering all skills" onClick={() => handleTitleClick('Skills')} />
      <Skills isActive={activeTitle} />
      <Title title="Contact" text="to speak with you" onClick={() => handleTitleClick('Contact')}/>
      <Contact isActive={activeTitle} />
    </div>
  );
}

export default App;
