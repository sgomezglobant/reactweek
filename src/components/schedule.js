import React from 'react';
import ScheduledEvent from './scheduledEvent';
import data from '../data';
import '../styles/schedule.scss';

const Schedule = () => (
  <section className="agenda">
    <div className="agenda-header">
      <i className="icon ion-ios-time-outline" />
      <h3>Agenda</h3>
    </div>

    <div className="agenda-grid">
      {data.talks.map(item => (
        <div className="agenda-container">
          <ScheduledEvent
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
