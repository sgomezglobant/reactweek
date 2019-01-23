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

        <div className="volunteers-item">
          <img src="https://avatars3.githubusercontent.com/u/18565471?v=4" width="100px;" alt="Angela Ordoñez"/><br />
          <sub><b>Angela Ordoñez</b></sub>
        </div>

        <div className="volunteers-item">
          <img src="https://avatars1.githubusercontent.com/u/20705054?v=4" width="100px;" alt="Sebastian Gomez"/><br />
          <sub><b>Sebastian Gomez</b></sub>
        </div>

        <div className="volunteers-item">
          <img src="https://avatars1.githubusercontent.com/u/11787339?v=4" width="100px;" alt="Jhonatan Uribe"/><br />
          <sub><b>Jhonatan Uribe</b></sub>
        </div>
        <div className="volunteers-item">
          <img src="https://avatars3.githubusercontent.com/u/1750884?v=4" width="100px;" alt="Jorge Ivan Morales"/><br />
          <sub><b>Jorge Ivan Morales</b></sub>
        </div>

        <div className="volunteers-item">
          <img src="https://avatars1.githubusercontent.com/u/8124929?v=4" width="100px;" alt="Omar"/><br />
          <sub><b>Omar</b></sub>
        </div>

        <div className="volunteers-item">
          <img src="https://avatars0.githubusercontent.com/u/315504?v=4" width="100px;" alt="Andres"/><br />
          <sub><b>Andres</b></sub>
        </div>
      </div>
    </div>
      
  </footer>
);

export default Volunteers;
