import '../styles/header.scss';

import React from 'react';

const Header = () => (
    <header className="rw-header">
        <span className="rw-header__subtitle">
            5 de Marzo - 9 de Marzo, Globant Medellin - Colombia
        </span>
        <h1 className="rw-header__title">
            Developer Week:<i className="rw-header__react-icon" /> React
        </h1>
        <a
            className="rw-header__link"
            href="https://www.youtube.com/"
            target="_blank"
        >
            Livestream
        </a>
    </header>
);

export default Header;
