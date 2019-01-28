import React from 'react';
import ScheduledEvent from './scheduledEvent';
import data from '../data';
import '../styles/schedule.scss';

const Schedule = () => (
  <section className="rw-agenda">
    <div className="rw-agenda__header">
      <i className="icon ion-ios-time-outline" />
      <h3>{data.schedule.title}</h3>
    </div>

    <div className="rw-agenda__grid">
      {data.schedule.talks.map((talk, index) => (
        <div className="rw-agenda__item" key={index}>
          <ScheduledEvent
            image={talk.image}
            schedule={talk.schedule}
            title={talk.title}
            description={talk.description}
            video={talk.video}
            slides={talk.slides}
            repository={talk.repository}
          />
        </div>
      ))}
    </div>
  </section>
);

export default Schedule;
