import React from 'react';
import './css/App.css';
import { useState } from 'react';
import data from './assets/data.json';
import { useEffect } from 'react';
import Projectsbox from './components/projects_box';
import ProjectsOverlay from './components/projects_overlay';

// Importing images
import Hero_Image from './images/Hero_Image.png';
import title_image from './images/NavBar_Logo.png';
import resume from './pdf/Resume.pdf';
import HeroSummary from './images/ExecutiveSummary_Header.png';
import Backend from './images/Backend_Icon.png';
import Frontend from './images/Frontend_Icon.png';
import Collaboration from './images/Collaboration_Icon.png';
import Mantra from './images/Mantra.png';
import Magtague from './images/Magtague.png';
import Bofa from './images/Bofa.png';
import Sarasin from './images/Sarasin.png';
import TDS from './images/tds.png';

// TODO: CHANGE FUNCTIONS TO PROPER NAMING CONVENTIONS

function App() {
  // Activate functions on render
  useEffect(() => {
    onScrollAnimation(); 
  }, []);

  // state hooks
  const [projects, setProjects] = useState(data);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [selectedTags, setSelectedTags] = useState("All");

  const tags = ["All", ...new Set(projects.map((item) => item.tag))];
  console.log(tags);
  // Outputs data sets based on the condition of if selectedTags == "All", output all tags, otherwise only the selected
  const filteredProjects = selectedTags === "All"
  ? projects
  : projects.filter((project) => project.tag === selectedTags);
  console.log(filteredProjects)

  // Helper function to copy email to clipboard
  // Input: None
  // Output: boolean
  function copyEmailToClipboard(){
    if (!navigator.clipboard) {
      alert("Clipboard API not supported in this browser.");
      return false;
    }
    var email = "aidanma2013@gmail.com";
    console.log("click!");
    navigator.clipboard.writeText(email).then(() =>{
      alert("Copied email to clipboard!");
      return true;
    }).catch((err) => {
      console.error('Failed to copy: ', err);
      alert("Failed to copy email to clipboard!");
      return false;
    })
  }

  // Helper function to apply onscroll animation to divs with main tag
  // Input: None
  // Output: boolean 
  function onScrollAnimation(){
    const element = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.3,
    });

    element.forEach((e) => observer.observe(e));
  }

  // Helper function to apply on/off function for pop-up

  function togglePopupOn(index) {
    console.log("Popup On Triggered for index:", index);
    document.body.classList.add('popup-open'); // Disable scrolling
    setSelectedProjectIndex(index); // Store the selected index
    setIsPopupVisible(true);
  }

  function togglePopupOff() {
    console.log("Popup Off Triggered");
    document.body.classList.remove('popup-open'); // Enable scrolling
    setSelectedProjectIndex(null); // Clear the selected index
    setIsPopupVisible(false);
  }


  // Main HTML code for the website
  return (
    <div className={`App ${isPopupVisible ? 'blurBackground' : ''}`} onClick = {togglePopupOff}>

      <header className='NavBar'>
        <div className= 'NavBarBoxTitle'>
          <div className='NavBarLogoLayout'>
            <img src={title_image} className='NavBarLogo'/>
          </div>
        </div>
        <div className='NavBarBoxResume'>
          <a href={resume} className='button Button1' target='_blank' rel='noopener noreferrer'>Resume</a>
        </div>
        <div className='NavBarBoxButton'>
          <a className= 'button2 Button2' href='#Home'>Home</a>
          <a className= 'button2 Button2' href='#About'>About</a> 
          <a className= 'button2 Button2' href='#Projects'>Projects</a>
          <a className= 'button2 Button2' href='#Contact'>Contact</a>
        </div>
      </header>

      <div className="PageLayoutGreenHero" id='Home'>
        <div className="HeroPageProjectsLayout fade-in">
          <div className="HeroPageProjectsChildLayout">
            <div className='HeroPageProjectsTitleLayout'>
              Welcome to my <b>Projects!</b>
            </div>
            <div className='HeroPageProjectsSubtitleLayout'>
              <img src={HeroSummary}/>
            </div>
            <div className='HeroPageProjectsSummaryLayout'>
              I create applications using modern technologies with efficiency and interaction in mind.
            </div>
            <div className='HeroPageProjectsButtonLayout'>
              <a className='button Button1' href='#Contact'>Work with Me!</a>
            </div>
          </div>
          <div className="HeroPageProjectsChild2Layout">
            <img src = {Hero_Image} className="HeroPageImage"/>
          </div>
        </div>
      </div>
      <main className='PageLayoutWhite' id = 'About'>
        <div className='AboutPageLayout fade-in'>
          <div className='AboutPageTitleLayout'>
          <strong>&lt; About &gt;</strong>
          </div>
          <div className='AboutPageSummaryLayout fade-in'>
            <p>Hi, my name is <b><u>Aidan Ma!</u></b> </p>
            <p>I have worked in many companies either as a software 
              engineer or as an analyst. I have built <b>mobile applications</b> and <b>internal tools</b> for these companies. 
              On off-hours, I keep up to date with the latest <b>artificial intelligence</b> and <b>cloud technologies</b> by 
              building cool projects!</p>
            <p>I speak both <b>English</b> and <b>Chinese</b>. During my spare time I enjoy golfing, hanging out with friends, 
              and designing my own living space. </p>
            <p>I hope you enjoy my projects!</p>
          </div>
        </div>
      </main>
      <main className='PageLayoutWhite'>
        <div className='SkillsPageLayout fade-in'>
          <div className='SkillsPageChildLayout'>
            <div className='SkillsPageImageLayout'>
              <img src= {Frontend}/>
            </div>
            <div className='SkillsPageTitleLayout'>
              <b>My Frontend Skills.</b>
            </div>
            <div className='SkillsPageSummaryLayout fade-in'>
              <p>My frontend languages include <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>Java</b>, <b>Swift</b>, and <b>Kotlin</b>.</p>
              <p>The technologies I use are <b>Node.js</b>, <b>Flask</b>, <b>React</b>, <b>SwiftUI</b>, <b>Jetpack Compose</b>, and <b>Mockito</b>.</p>
            </div>
          </div>
          <div className='SkillsPageChildLayout'>
            <div className='SkillsPageImageLayout'>
              <img src= {Backend}/>
            </div>
            <div className='SkillsPageTitleLayout'>
              <b>With my Backend Skills.</b>
            </div>
            <div className='SkillsPageSummaryLayout fade-in'>
              <p>My backend languages include <b>Python</b>, <b>SQL</b>, and <b>C</b>.</p>
              <p> The technologies I use are <b>Postman</b>, <b>AWS</b>, and <b>MySQL</b>.</p>
            </div>
          </div>
          <div className='SkillsPageChildLayout'>
            <div className='SkillsPageImageLayout'>
                <img src= {Collaboration}/>
              </div>
              <div className='SkillsPageTitleLayout'>
                <b>Alongside Collaborating.</b>
              </div>
              <div className='SkillsPageSummaryLayout fade-in'>
                <p>To collaborate, I use <b>Git</b> and <b>Shell</b>.</p>
                <p>The tools I use to collaborate are <b>GitHub</b>, <b>Figma</b>, <b>Jira</b>, <b>Confluence</b>, and <b>Bitbucket</b></p>
              </div>              
          </div>
        </div>
      </main>
      <main className='PageLayoutGreenScaling' id = 'Projects'>
        <div className='ProjectsPageBoxLayout'>
          <div className='ProjectsMenuBarLayout'>
            <div className='ProjectsMenuBarTitleLayout'>
              <b>
              &lt; <br />
              P <br />
              r <br />
              o <br />
              j <br />
              e <br />
              c <br />
              t <br />
              s <br />
              </b> 
              &gt;
            </div>
            <div className='ProjectsMenuBarButtonsLayout'>
              {tags.map((tag, index) => (
                <a
                  key={index}
                  className={`TagButton ${selectedTags === tag ? "active" : ""}`}
                  onClick={() => setSelectedTags(tag)}
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
          <div className='ProjectsPageProjectsTabLayout fade-in'>
          {filteredProjects.map((item, index) => (
              <div
                key={index}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent propagation
                  togglePopupOn(index); // Pass the index to togglePopupOn
                }}
              >
                <Projectsbox item={item} />
              </div>
            ))}
          </div> 
        </div>
        
        {isPopupVisible && selectedProjectIndex !== null && (
          <div
            className="ProjectPopupLayout"
            onClick={(e) => {
              e.stopPropagation(); // Prevent propagation
              togglePopupOff(); // Close the popup
            }}
          >
            <ProjectsOverlay item={projects[selectedProjectIndex]} />
          </div>
        )}

      </main>
      <main className='PageLayoutWhite'>
        <div className="ContactPageJobsBackground">
          <div className='ContactPageJobsLayout'>
            <div className= 'ContactPageJobsTitleLayout'>
              <i><b>Companies I have worked for...</b></i>
            </div>
            <div className='ContactPageJobsImagesLayout'>
              <img src={Sarasin} className='ContactPageJobsImage'/>
              <img src={Bofa} className='ContactPageJobsImage'/>
              <img src={Mantra} className='ContactPageJobsImage'/>
              <img src={TDS} className='ContactPageJobsImage'/>
              <img src={Magtague} className='ContactPageJobsImage'/>
            </div>
            <div className='ContactPageContactLayout fade-in' id='Contact'>
              <div className='ContactPageContactTitleLayout'>
                <b>You can reach out to me here!</b>
              </div>
              <div className='ContactPageContactButtonLayout'>
                <div className='ContactPageContactButtonChildLayout'>
                  <a onClick={copyEmailToClipboard} className='ContactPageContactButtonImageEmail'><img alt='button1'/></a>
                  <a href='https://www.linkedin.com/in/aidanma/' className='ContactPageContactButtonImageLinkedin' target="_blank" rel="noopener noreferrer"><img alt='button2'/></a>
                  <a href='https://github.com/boblz' className='ContactPageContactButtonGithub' target="_blank" rel="noopener noreferrer"><img alt='button3'/></a>
                </div>
              </div>
              <div className= 'CopyRightNotice'>
                  &copy;2025 Aidan Ma. All rights reserved.
              </div>

            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;
