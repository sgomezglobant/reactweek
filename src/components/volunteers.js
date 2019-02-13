import React from 'react';

import data from '../data';
import { ReactIcon } from './icons';
import '../styles/volunteers.scss';

const Volunteers = () => (
  <section className="rw-section rw-section--black">
    <ReactIcon />
    <h3 className="rw-section__title">{data.volunteers.volunteersTitle}</h3>
    <div className="rw-section__content">
      <div className="rw-volunteers__list">
        {data.volunteers.volunteersList.map((person, index) => {
          return (
            <div className="rw-volunteers__item" key={index}>
              <img src={person.url} alt={person.altImg} />
              <span>{person.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Volunteers;
