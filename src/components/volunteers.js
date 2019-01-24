import React from 'react';

import data from '../data';
import '../styles/volunteers.scss';


const Volunteers = () => (
  <section className="volunteers-container">
    <div className="volunteers-title">
      <i className="icon ion-beer"></i>
      <h3>{data.volunteers.volunteersTitle}</h3>
    </div>  
    <div className="volunteers-list">
      {
        data.volunteers.volunteersList.map( person => {
          return (
          <div className="volunteers-item">
            <img src={person.url} width="100px;" alt={person.altImg}/>
            <b>{person.name}</b>
          </div>

          )
        })
      }
      
    </div>
      
  </section>
);

export default Volunteers;
