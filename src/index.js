import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './styles/index.css';
import './styles/media.css'
import GeneralInfo from './components/GeneralInfo';
import Section from './components/Section';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Licenses from './components/Licenses';

const App = () => {
  const [darkMode, setDark] = useState(false);
  const [previewMode, setPreview] = useState(false);

  const enableDarkMode = () => {
    setDark(!darkMode);
  };

  const enablePreviewMode = () => {
    setPreview(!previewMode);
  };

  return (
    <div className="container">
      <GeneralInfo previewMode={previewMode} />
      <Section
        items={1}
        title="Experience"
        previewMode={previewMode}
      >
        <Experience previewMode={previewMode} />
      </Section>
      <Section
        items={2}
        title="Education"
        previewMode={previewMode}
      >
        <Education previewMode={previewMode} />
      </Section>
      <Section
        items={2}
        title="Skills"
        previewMode={previewMode}
      >
        <Skills previewMode={previewMode} />
      </Section>
      <Section
        items={1}
        title="Licenses & certifications"
        previewMode={previewMode}
      >
        <Licenses previewMode={previewMode} />
      </Section>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
