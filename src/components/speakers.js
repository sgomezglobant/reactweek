import React from "react";
import resources from "./../data/";
import SpeakerItem from './speakerItem'
import "./../styles/speakers.scss";

// Speakers component

const Speakers = () => (
  <section className="speakers">
    <header className="speakers__details">
      <h2 className="speakers__title">Speakers</h2>
    </header>
    <main className="speakers-grid">
      {resources.speakers.map(({id, ...speaker}) => <SpeakerItem key={id} {...speaker} />)}
    </main>
  </section>
);

export default Speakers;
