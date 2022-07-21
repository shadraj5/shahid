import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { AiFillProject } from 'react-icons/ai';
import './Portfolio.scss';

import { filterOprions, portfolioData } from './util';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [filterValue, setfilterValue] = useState(1);
  const handleFilter = (id) => {
    setfilterValue(id);
  };

  const filterPortfolioData =
    filterValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.sectionId === filterValue);

  const [hoveredIndex, sethoverIndex] = useState(null);
  return (
    <section className="portfolio" id="portfolio">
      <PageHeader
        headerText="My Portfolio"
        icon={<AiFillProject size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterOprions.map((option) => (
            <li
              onClick={() => handleFilter(option.id)}
              key={`filter${option.id}`}
              className={option.id === filterValue ? 'active' : ''}
            >
              {option.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filterPortfolioData.map((item, key) => (
            <div
              onMouseEnter={() => sethoverIndex(key)}
              onMouseLeave={() => sethoverIndex(null)}
              key={key}
              className="portfolio__content__cards__item"
            >
              <div className="portfolio__content__cards__item__image-wrapper">
                <a>
                  <img src={item.image} alt="project image" />
                </a>
              </div>
              <div className="overlay">
                {hoveredIndex === key && (
                  <div>
                    <p>{item.projectName}</p>
                    <a href={item.ProjectLink}>
                      <button onClick={item.ProjectLink}>Visit</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
