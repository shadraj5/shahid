import React from 'react';
import './Home.scss';
import { Animate } from 'react-simple-animate';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__text__wrapper">
        <h1 className="home__text__wrapper__element">
          Hello, I'm Shahid. <br />
          Front End Developer.
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: 'translateY(600px)'
        }}
        end={{ transform: 'translateX(0px)' }}
      >
        <div className="contact-me">
          <div className="contact-me__wrapper">
            <Link className="nostyle" to={'/contact'}>
              <button>Hire me</button>
            </Link>
            <a className="downloadcv">Download CV</a>
          </div>
          <div className="contact-me__social">
            <a href="https://github.com/shadraj5">
              <FaGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/mdshahidraza/">
              <FaLinkedinIn size={32} />
            </a>
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
