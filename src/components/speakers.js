import React from "react";
import resources from "./../data/resources";
import SpeakerItem from './speakerItem'
import "./../styles/speakers.css";

// Speakers component

const Speakers = () => (
  <section className="speakers">
    <header className="speakers-details">
      <h2 className="speakers-details__title">Speakers</h2>
    </header>
    <main className="speakers-grid">
      {resources.speakers.map(({id, ...speaker}) => <SpeakerItem key={id} {...speaker} />)}
    </main>
  </section>
);

export default Speakers;
