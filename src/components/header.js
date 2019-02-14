import React from 'react';

import '../styles/header.scss';
import logo from '../images/reactweek-logo.png';

const Header = () => (
  <header className="rw-header">
    <h1>
      <img className="rw-header__logo" src={logo} alt="React Week" />
    </h1>
    <h2 className="rw-header__title">Medellín, Colombia <br/> <span>Globant</span></h2>
    <h3 className="rw-header__subtitle">Del 5 al 9 de Marzo</h3>
    <a
      className="rw-header__link cta-link"
      href="https://www.youtube.com/"
      rel="noopener noreferrer"
      target="_blank"
    >
      Livestream
    </a>
  </header>
);

export default Header;
