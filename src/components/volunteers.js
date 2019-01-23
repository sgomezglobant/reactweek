import React from 'react';

import data from '../data';
import '../styles/volunteers.scss';


const Volunteers = () => (
  <footer>
    <div className="volunteers-container">
      <div className="title-container">
        <i className="icon ion-beer"></i>
        <h3>{data.volunteers.volunteersTitle}</h3>
      </div>  
      <div className="volunteers-list">
        {
          data.volunteers.volunteersList.map( person => {
            return (
            <div className="volunteers-item">
              <img src={person.url} width="100px;" alt={person.image}/><br />
              <div><sub><b>{person.name}</b></sub></div>
            </div>

            )
          })
        }
        
      </div>
    </div>
      
  </footer>
);

export default Volunteers;
