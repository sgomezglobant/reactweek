import React from 'react';

import OrganizationItem from './organizationItem';
import data from '../data';
import '../styles/sponsors.scss';

const organization = () => (
  <section className="rw-sponsors">
    <h3 className="rw-section__title">{data.organization.sponsorsTitle}</h3>
    <div className="rw-sponsors__list">
      {data.organization.sponsors.map(sponsor => {
        return <OrganizationItem key={sponsor.name} item={sponsor} />;
      })}
    </div>
  </section>
);

export default organization;
