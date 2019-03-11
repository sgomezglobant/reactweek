import React from "react";
import data from "../data";

import "../styles/header.scss";
import logo from "../images/reactweek-logo.png";

const Header = () => (
  <header className="rw-header">
    <h1>
      <img className="rw-header__logo" src={logo} alt="React Week" />
    </h1>
    <h2 className="rw-header__title">
      Medellín, Colombia <br /> <span>Globant</span>
    </h2>
    <h3 className="rw-header__subtitle">Del 5 al 9 de Marzo</h3>
    {data.livestream && (
      <a
        className="rw-header__link cta-link"
        href={data.livestream}
        rel="noopener noreferrer"
        target="_blank"
      >
        Memorias
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
