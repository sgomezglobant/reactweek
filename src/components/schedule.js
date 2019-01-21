import React from 'react';
import AgendaCard from './agendaCard';
import data from '../data';
import '../styles/schedule.scss';

const Schedule = () => (
  <section className="agenda">
    <h2>Agenda</h2>
    <div className="agenda-grid">
      {data.talks.map(item => (
        <div className="agenda-container">
          <AgendaCard
            image={item.image}
            schedule={item.schedule}
            title={item.title}
            description={item.description}
            video={item.video}
            slides={item.slides}
            repository={item.repository}
          />
        </div>
      ))}
    </div>
  </section>
);

export default Schedule;
