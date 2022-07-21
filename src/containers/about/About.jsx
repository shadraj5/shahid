import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { BsInfoCircleFill } from 'react-icons/bs';
import { personalData } from './utils';
import './About.scss';
import { DiGithub, DiReact } from 'react-icons/di';
import { FaHtml5, FaJs } from 'react-icons/fa';
import { Animate } from 'react-simple-animate';

const About = () => {
  return (
    <section className="about" id="about">
      <PageHeader headerText="About me" icon={<BsInfoCircleFill size={40} />} />

      <div className="about__content">
        <div className="about__content__mywrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: 'translateX(-800px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >
            <h3 className="developercontent">Front End Developer</h3>
            <p>
              Seasoned and independent Front End Developer with 2 years of
              experience in blending the art of design with skill of programming
              to deliver an immersive and engaging user experience through
              efficient website development, proactive feature optimization, and
              relentless debugging. Very passionate about aesthetics and UI
              design.
              <br />
              <br />
              IT Administrator with 7 years of experience in Seder Group in
              Ministry of Finance KSA , consist of 5 data centers in mess
              topology where more than 400 Cisco Switches(Management),10 core
              switches, more than 80 Servers and 4300 cameras the largest
              project of middle east.
            </p>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: 'translateX(500px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >
            <h3 className="personalcontent">Personal Information</h3>
            <ul>
              {personalData.map((item, key) => (
                <li key={key}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: 'translateX(500px)'
          }}
          end={{
            transform: 'translateX(0px)'
          }}
        >
          <div className="about__content__spinwrapper">
            <div className="about__content__spinwrapper__innercontent">
              <div>
                <FaJs size={60} color="var(--selected-theme-main-color)" />
              </div>
              <div>
                <DiGithub size={60} color="var(--selected-theme-main-color)" />
              </div>
              <div>
                <FaHtml5 size={60} color="var(--selected-theme-main-color)" />
              </div>
              <div>
                <DiReact size={60} color="var(--selected-theme-main-color)" />
              </div>{' '}
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
};
console.log(About);

export default About;
