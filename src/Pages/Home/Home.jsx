import React from 'react';
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  batch,
  Fade,
  FadeIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
  MoveIn,
} from 'react-scroll-motion';

import { useTypewriter, Cursor } from "react-simple-typewriter";

import { BsInstagram, BsBehance } from 'react-icons/bs';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

import './style.css';
import SkillsBar from '../../components/CircularProgressBar/CircularProgressBar.jsx';
import Slider from '../../components/Slider/Slider.jsx';

import headerImg from '../../img/bg1.webp';
import aboutImg1 from '../../img/aboutImg1.webp';
import aboutImg2 from '../../img/aboutImg2.webp';

import projectImg from '../../img/projectImg.svg';

import MyResume from '../../resume/Resume_ItayLevy.pdf';

export default function Home() {

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

  const work = [
    {
      name: 'Weather App',
      link: 'https://github.com/ItayLevy1/weather-app',
      linkSite: 'https://itaylevy1.github.io/weather-app/',
      imgSrc: projectImg
    },
    {
      name: 'Flight Web',
      link: 'https://github.com/ItayLevy1/flight-web',
      linkSite: 'https://itaylevy1.github.io/flight-web/',
      imgSrc: projectImg
    },
    {
      name: 'Portfolio',
      link: 'https://github.com/ItayLevy1/portfolio',
      linkSite: 'https://itaylevy1.github.io/portfolio/',
      imgSrc: projectImg
    },
    // {
    //   name: 'Project 4',
    //   link: '#',
    //   linkSite: '#',
    //   imgSrc: projectImg
    // }
  ];

  const handleContactClick = (url) => {
    const win = window.open(url, '_blank');
    win.fucus();
  }

  const [text] = useTypewriter({
    words: ["Front-End Developer.", "Artist.", "Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });


  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 0))}>
          <div className="name">
            <h2 className="first">
              Itay
            </h2>
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(-1650, 0))}>
          <div className="name">
            <h2 className="last">
              Levy
            </h2>
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <div className="imgContainer">
            <img src={headerImg} alt="headerImg" className='headerImg' />
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(-100, 100))}>
          <div className="position">
            <div></div>
            <h2 className="last">
              <span>{text}
                <Cursor
                  cursorBlinking="false"
                  cursorStyle="|"
                  cursorColor="#324A51"
                /></span>
            </h2>
          </div>
        </Animator>
      </ScrollPage>

      {/* section 2 */}

      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <div className="section_title about_me">
            About Me
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={2}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(-1000, 0))}>
          <div className="about_img1_container ">
            <img src={aboutImg1} alt="myImg" className='myImg' />
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(400, 0))}>
          <div className="details">
            <h2 className="greeting">
              Hi, I'm <span style={{ color: '#D8F53C', display: 'inline-block' }}>Itay Levy</span>
            </h2>
            <p className="bio">
              A FullStack Developer with a bachelor's degree in Digital Media from Tel-Aviv University.            </p>
            <p className="bio">
              Alongside my passion for coding, I have nurtured my artistic talents since the age of 8, specializing in painting and other forms of art. Additionally, I founded my own shoe and clothing design business. My fascination with the virtual world has led me to create engaging content on Instagram, Facebook, and TikTok. I am always seeking the next exciting challenge and eagerly anticipate my dream job, which will serve as a springboard for my professional development and continuous learning.            </p>
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 0))}>
          <div className="about_img2_container ">
            <img src={aboutImg2} alt="myImg" className='myImg' />
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, 500))}>
          <div className="resume_container">
            <a href={MyResume} className='btn' download="Resume_ItayLevy.pdf"> Download CV </a>
          </div>
        </Animator>
      </ScrollPage>


      {/* section 3 */}

      <ScrollPage page={3}>
        <Animator animation={ZoomInScrollOut}>
          <div className="section_title skills">
            My Skills
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={4}>
        <Animator animation={batch(Fade(), MoveOut(0, -1000))}>
          <div className="skills_bar">
            <SkillsBar />
          </div>
        </Animator>
      </ScrollPage>


      {/* section 4 */}

      <ScrollPage page={4}>
        <Animator animation={ZoomInScrollOut}>
          <div className="section_title portfolio">
            Portfolio
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={5}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <div className="portfolio_content">
            {
              work?.map((work, index) => {
                return (
                  <a href={work?.link} target='_blank' key={work?.name}>
                    <div className="portfolio_card">
                      <div className="project_img">
                        <img src={work?.imgSrc} alt={work?.name} />
                      </div>
                      <div className="portfolio_title">
                        <h3>
                          {work?.name}
                        </h3>
                      </div>
                      <div className="count">
                        {index + 1}
                      </div>
                      <div className="portfolio_btn">
                        <a href={work?.linkSite} target='_blank' className='btn'> Live Preview </a>
                      </div>
                    </div>
                  </a>
                )
              })
            }
          </div>
        </Animator>
      </ScrollPage>


      {/* section 5 */}

      <ScrollPage page={6}>
        <Animator animation={ZoomInScrollOut}>
          <div className="section_title art">
            Art-Work
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={7}>
        <Animator animation={batch(Fade(), MoveOut(0, -200))}>
          <div className="artwork">
            <Slider />
          </div>
        </Animator>
      </ScrollPage>


      {/* section 6 */}

      <ScrollPage page={8}>
        <Animator animation={ZoomInScrollOut}>
          <div className="section_title contact">
            Contact
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={9}>
        <Animator animation={ZoomInScrollOut}>
          <div className="contact_container">
            <span style={{ fontSize: '40px' }}>
              <Animator animation={MoveIn(-1000, 0)}>
                <div className="contact_details"
                  onClick={() => handleContactClick('https://www.instagram.com/itaylevy2/')}>
                  <BsInstagram size={38} className='contact_icon' />
                </div>
              </Animator>
              <Animator animation={MoveOut(1000, 0)}>
                <div className="contact_details"
                  onClick={() => handleContactClick('https://www.behance.net/itaylevy1')}>
                  <BsBehance className='contact_icon' />
                </div>
              </Animator>
              <Animator animation={MoveOut(-1000, 0)}>
                <div className="contact_details"
                  onClick={() => handleContactClick('https://github.com/ItayLevy1')}>
                  <FiGithub className='contact_icon' />
                </div>
              </Animator>
              <Animator animation={MoveOut(1000, 0)}>
                <div className="contact_details"
                  onClick={() => handleContactClick('https://www.linkedin.com/in/itaylevy2/')}>
                  <FiLinkedin className='contact_icon' />
                </div>
              </Animator>
              <Animator animation={MoveIn(1000, 0)}>
                <div className="contact_details">
                  <a href="mailto:iti307@gmail.com"><FiMail className='contact_icon' /></a>
                </div>
              </Animator>
            </span>
          </div>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  )
}
