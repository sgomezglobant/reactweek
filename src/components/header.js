import React from 'react';
import data from '../data';

import '../styles/header.scss';
import logo from '../images/reactweek-logo.png';

const Header = () => (
  <header className="rw-header">
    <h1 className="rw-header__title">Globant Medellín - Colombia</h1>
    <h2 className="rw-header__subtitle">Del 5 al 9 de Marzo</h2>
    <img className="rw-header__logo" src={logo} alt="React Week" />
    {data.livestream && (
      <a
        className="rw-header__link cta-link"
        href={data.livestream}
        rel="noopener noreferrer"
        target="_blank"
      >
        Livestream
      </a>
    )}
    {data.eventbriteLink && !data.livestream && (
      <a
        className="rw-header__link cta-link"
        href={data.eventbriteLink}
        rel="noopener noreferrer"
        target="_blank"
      >
        Registrate Aquí
      </a>
    )}
  </header>
);

export default Header;
