import React from 'react';
import resources from './../data/';
import SpeakerItem from './speakerItem';
import { MicIcon } from './icons';
import './../styles/speakers.scss';

// Speakers component

const Speakers = () => (
  <section className="rw-section">
    <span className="rw-section__icon">
      <MicIcon />
    </span>
    <h3 className="rw-section__title">Speakers</h3>
    <div className="rw-section__content">
      <div className="rw-speakers-grid">
        {resources.speakers.map(({ id, ...speaker }) => (
          <SpeakerItem key={id} {...speaker} />
        ))}
      </div>
    </div>
  </section>
);

export default Speakers;
