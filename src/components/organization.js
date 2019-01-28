import React from 'react'

import OrganizationItem from './organizationItem'
import data from '../data'
import '../styles/organization.scss'

const organization = () => (
  <section className="rw-sponsors">
    <div className="rw-sponsors__title">
      <i className="icon ion-ios-star-outline"></i>
      <h3>{data.organization.sponsorsTitle}</h3>
    </div>
    <div className="rw-sponsors__list">
      {
        data.organization.sponsors.map((sponsor, index) => {
          return (
            <OrganizationItem key={index} item={sponsor} />
          )
        })
      }
    </div>
  </section>
);

export default organization;
