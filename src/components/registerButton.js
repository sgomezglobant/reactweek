import React from 'react';
import './../styles/registerButton.scss';

const RegisterButton = ({ to }) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://www.eventbrite.com/e/react-week-medellin-2019-tickets-55239292210#tickets"
    className="cta-link"
  >
    Registrate aquí
  </a>
);

export default RegisterButton;
