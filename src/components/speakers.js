import React from "react";
import resources from "./../data/";
import SpeakerItem from './speakerItem'
import "./../styles/speakers.scss";

// Speakers component

const Speakers = () => (
  <section className="rw-speakers">
    <header className="rw-speakers__details">
      <h2 className="rw-speakers__title">Speakers</h2>
    </header>
    <main className="rw-speakers-grid">
      {resources.speakers.map(({id, ...speaker}) => <SpeakerItem key={id} {...speaker} />)}
    </main>
  </section>
);

export default Speakers;
