import React, { useState } from 'react';
import './About.css'; 
import { ArrowDownIcon, ArrowUpIcon } from '../../util/ArrowIcons';

function About() {
  const [isLanguagesOpen, setLanguagesOpen] = useState(false);
  const [isFrameworksOpen, setFrameworksOpen] = useState(false);
  const [isToolsOpen, setToolsOpen] = useState(false);

  const toggleLanguages = () => setLanguagesOpen(!isLanguagesOpen);
  const toggleFrameworks = () => setFrameworksOpen(!isFrameworksOpen);
  const toggleTools = () => setToolsOpen(!isToolsOpen);

  return (
    <div className='container'>
      <div className='two-columns'>
        <div className='column'>
          <h2>About Me</h2>
          <p>I'm a dedicated Computer Science student specializing in Cybersecurity. With a fascination for technology and a keen interest in digital defense, my academic journey is focused on mastering the intricacies of protecting digital landscapes from the ever-evolving realm of cyber threats. As I explore coding, network security, and data protection, I'm driven by the mission to create secure and resilient digital ecosystems that empower individuals and organizations to navigate the online world with confidence.</p>
          <p>Beyond the digital realm, I'm a well-rounded individual with diverse passions. While my days are filled with programming, my free time is a blend of culinary creativity and immersive storytelling. I manage a cooking Instagram, <a className='insta' target="_blank" rel="noreferrer" href='https://www.instagram.com/dante.al.dente/'>@dante.al.dente</a>, where I share my culinary experiments and discoveries. Additionally, I enjoy time spent with my friends playing Dungeons & Dragons. This harmony of technical exploration, culinary pursuits, and imaginative storytelling defines my unique journey of who I am.</p>
        </div>
        <div className='column'>
          <h2>Skills</h2>
          <div className={`collapsible-box ${isLanguagesOpen ? 'open' : ''}`}>
            <h3 onClick={toggleLanguages}>Languages {isLanguagesOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}</h3>
            {isLanguagesOpen && (
              <ul className='skill-list'>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Java</li>
                <li>Python</li>
                <li>C</li>
                <li>C++</li>
                <li>PHP</li>
                <li>SQL</li>
                <li>PowerShell</li>
                <li>Bash</li>
              </ul>
            )}
          </div>
          <div className={`collapsible-box ${isFrameworksOpen ? 'open' : ''}`}>
            <h3 onClick={toggleFrameworks}>Frameworks and APIs {isFrameworksOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}</h3>
            {isFrameworksOpen && (
              <ul className='skill-list'>
                <li>React</li>
                <li>Node.js</li>
                <li>Angular</li>
                <li>Next.js</li>
                <li>Go</li>
                <li>Flask</li>
                <li>Google Cloud API</li>
              </ul>
            )}
          </div>
          <div className={`collapsible-box ${isToolsOpen ? 'open' : ''}`}>
            <h3 onClick={toggleTools}>Tools {isToolsOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}</h3>
            {isToolsOpen && (
              <ul className='skill-list'>
                <li>Visual Studio Code</li>
                <li>Git</li>
                <li>Adobe Creative Cloud</li>
                <li>Microsoft Office</li>
                <li>Microsoft Power Platform</li>
                <li>Windows</li>
                <li>Linux</li>
                <li>Mac</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
