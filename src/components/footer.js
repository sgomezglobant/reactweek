import React from 'react';
import RegisterButton from './../components/registerButton'

import '../styles/footer.css';

const Footer = () => (
  <footer className="rw-footer">
    <h3>¡No te lo pierdas!</h3>
    <RegisterButton to={"https://www.eventbrite.com/e/react-week-medellin-2019-tickets-55239292210#tickets"} />
  </footer>
);

export default Footer;
