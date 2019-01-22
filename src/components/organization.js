import React from 'react'
import data from '../data'
import '../styles/organization.scss'

const organization = () => (
  <section>
    <div className="title-container">
      <i className="icon ion-ios-star-outline"></i>
      <h3>{data.organization.title}</h3>
    </div>
  </section>
);

export default organization;
