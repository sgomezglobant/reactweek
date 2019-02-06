import React from 'react';

import Sponsors from './sponsors';
import Communities from './communities';
import '../styles/organization.scss';

const organization = () => (
  <section className="rw-organization rw-section">
    <div className="rw-organization__content rw-section__content">
      <Sponsors />
      <Communities />
    </div>
  </section>
);

export default organization;
