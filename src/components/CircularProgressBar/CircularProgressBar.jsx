import '../../components/CircularProgressBar/CircularProgressBar.css';
import React, { useState, useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { TbBrandHtml5, TbBrandCss3, TbBrandReact, TbBrandJavascript, } from 'react-icons/tb';
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobexd, SiAdobeindesign } from 'react-icons/si';


const SkillsBar = () => {
  const [progress, setProgress] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setProgress([80, 80, 65, 60, 85, 80, 80, 70]); // Set the desired progress value when the component enters the viewport
        } else {
          setProgress([0, 0, 0, 0, 0, 0, 0, 0]); // Reset the progress value when the component is not visible
        }
      },
      { threshold: 0.8 } // Adjust the threshold as needed (0.5 means when at least 50% of the component is visible)
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div id="skills" className="skills_container" ref={skillsRef}>
      <div className="skills_progress">
        <div className="parallax_wrapper">
          <div className="circular_progressbar_container">
            <CircularProgressbar
              value={progress[0]}
              styles={buildStyles({
                pathColor: '#D8F53C',
                textColor: '#324A51',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
              })}
            />
            <TbBrandHtml5 size={60} className="icon" />
          </div>
          <h1 className="skill_title">html5</h1>
        </div>
        <div className="parallax_wrapper">
          <div className="circular_progressbar_container">
            <CircularProgressbar
              value={progress[1]}
              styles={buildStyles({
                pathColor: `#D8F53C`,
                textColor: '#324A51',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
              })}
            />
            <TbBrandCss3 size={60} className="icon" />
          </div>
          <h1 className="skill_title">css3</h1>
        </div>
        <div className="parallax_wrapper">
          <div className="circular_progressbar_container">
            <CircularProgressbar
              value={progress[2]}
              styles={buildStyles({
                pathColor: `#D8F53C`,
                textColor: '#324A51',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
              })}
            />
            <TbBrandJavascript size={60} className="icon" />
          </div>
          <h1 className="skill_title">javascript</h1>
        </div>
        <div className="parallax_wrapper">
          <div className="circular_progressbar_container">
            <CircularProgressbar
              value={progress[3]}
              styles={buildStyles({
                pathColor: `#D8F53C`,
                textColor: '#324A51',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
              })}
            />
            <TbBrandReact size={60} className="icon" />
          </div>
          <h1 className="skill_title">react</h1>
        </div>
        <div className="parallax_wrapper">
          <div className="circular_progressbar_container">
            <CircularProgressbar
              value={progress[4]}
              styles={buildStyles({
                pathColor: `#D8F53C`,
                textColor: '#324A51',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
              })}
            />
            <SiAdobephotoshop size={45} className="icon" />
          </div>
          <h1 className="skill_title">adobe ps</h1>
        </div>
        <div className="parallax_wrapper">
          <div className="circular_progressbar_container">
            <CircularProgressbar
              value={progress[5]}
              styles={buildStyles({
                pathColor: `#D8F53C`,
                textColor: '#324A51',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
              })}
            />
            <SiAdobeillustrator size={45} className="icon" />
          </div>
          <h1 className="skill_title">adobe ai</h1>
        </div>
        <div className="parallax_wrapper">
          <div className="circular_progressbar_container">
            <CircularProgressbar
              value={progress[6]}
              styles={buildStyles({
                pathColor: `#D8F53C`,
                textColor: '#324A51',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
              })}
            />
            <SiAdobexd size={45} className="icon" />
          </div>
          <h1 className="skill_title">adobe xd</h1>
        </div>
        <div className="parallax_wrapper">
          <div className="circular_progressbar_container">
            <CircularProgressbar
              value={progress[7]}
              styles={buildStyles({
                pathColor: `#D8F53C`,
                textColor: '#324A51',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
              })}
            />
            <SiAdobeindesign size={45} className="icon" />
          </div>
          <h1 className="skill_title">adobe id</h1>
        </div>
      </div>
    </div>
  );
};

export default SkillsBar;
