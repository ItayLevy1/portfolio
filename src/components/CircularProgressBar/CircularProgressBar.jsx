import '../../components/CircularProgressBar/CircularProgressBar.css';
import React, { useState, useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SkillsBar = () => {
  const [progress, setProgress] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setProgress([90, 70, 80, 75, 65, 60, 60, 50]); // Set the desired progress value when the component enters the viewport
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
          <CircularProgressbar
            value={progress[0]}
            text={`${progress[0].toFixed()}%`}
            styles={buildStyles({
              textSize: '1.5rem',
              pathColor: `#D8F53C`,
              textColor: '#324A51',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
          />
          <h1 className="skill_title">html5</h1>
        </div>
        <div className="parallax_wrapper">
          <CircularProgressbar
            value={progress[1]}
            text={`${progress[1].toFixed()}%`}
            styles={buildStyles({
              textSize: '1.5rem',
              pathColor: `#D8F53C`,
              textColor: '#324A51',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
          />
          <h1 className="skill_title">react</h1>
        </div>
        <div className="parallax_wrapper">
          <CircularProgressbar
            value={progress[2]}
            text={`${progress[2].toFixed()}%`}
            styles={buildStyles({
              textSize: '1.5rem',
              pathColor: `#D8F53C`,
              textColor: '#324A51',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
          />
          <h1 className="skill_title">css3</h1>
        </div>
        <div className="parallax_wrapper">
          <CircularProgressbar
            value={progress[3]}
            text={`${progress[3].toFixed()}%`}
            styles={buildStyles({
              textSize: '1.5rem',
              pathColor: `#D8F53C`,
              textColor: '#324A51',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
          />
          <h1 className="skill_title">javascript</h1>
        </div>
        <div className="parallax_wrapper">
          <CircularProgressbar
            value={progress[4]}
            text={`${progress[4].toFixed()}%`}
            styles={buildStyles({
              textSize: '1.5rem',
              pathColor: `#D8F53C`,
              textColor: '#324A51',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
          />
          <h1 className="skill_title">adobe ps</h1>
        </div>
        <div className="parallax_wrapper">
          <CircularProgressbar
            value={progress[5]}
            text={`${progress[5].toFixed()}%`}
            styles={buildStyles({
              textSize: '1.5rem',
              pathColor: `#D8F53C`,
              textColor: '#324A51',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
          />
          <h1 className="skill_title">adobe ai</h1>
        </div>
        <div className="parallax_wrapper">
          <CircularProgressbar
            value={progress[6]}
            text={`${progress[6].toFixed()}%`}
            styles={buildStyles({
              textSize: '1.5rem',
              pathColor: `#D8F53C`,
              textColor: '#324A51',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
          />
          <h1 className="skill_title">adobe xd</h1>
        </div>
        <div className="parallax_wrapper">
          <CircularProgressbar
            value={progress[7]}
            text={`${progress[7].toFixed()}%`}
            styles={buildStyles({
              textSize: '1.5rem',
              pathColor: `#D8F53C`,
              textColor: '#324A51',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
          />
          <h1 className="skill_title">Autodesk Maya</h1>
        </div>
      </div>
    </div>
  );
};

export default SkillsBar;
