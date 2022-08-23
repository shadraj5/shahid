import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { navMenus } from './config';
import './Navbar.scss';
import Mysvg from '../../helpers/Svg';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link to={'/'} className="navbar__container__logo">
          {/* <FaReact size={30} />*/}
          <Mysvg />
        </Link>
        <ul
          className={
            click ? 'navbar__container__menu active' : 'navbar__container__menu'
          }
        >
          {navMenus.map((item, key) => (
            <li
              key={key}
              className="navbar__container__menu__item"
              onClick={handleClick}
            >
              <Link
                to={item.to}
                className="navbar__container__menu__item__links active"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          {click ? <HiX size={30} /> : <FaBars size={30}></FaBars>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
