import React from 'react';

import data from '../data';
import '../styles/volunteers.scss';


const Volunteers = () => (
  <section className="rw-volunteers">
    <div className="rw-volunteers__title">
      <i className="icon ion-bonfire"></i>
      <h3>{data.volunteers.volunteersTitle}</h3>
    </div>  
    <div className="rw-volunteers__list">
      {
        data.volunteers.volunteersList.map( (person, index) => {
          return (
          <div className="rw-volunteers__item" key={index}>
            <img src={person.url} alt={person.altImg}/>
            <b>{person.name}</b>
          </div>

          )
        })
      }
      
    </div>
      
  </section>
);

export default Volunteers;
