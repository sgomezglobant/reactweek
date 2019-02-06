import React from 'react';

import ScheduledEvent from './scheduledEvent';
import { ClockIcon } from './icons';
import data from '../data';
import '../styles/schedule.scss';

const Schedule = () => (
  <section className="rw-section rw-section--gray">
    <ClockIcon />
    <h3 className="rw-section__title">{data.schedule.title}</h3>
    <div className="rw-section__content">
      <div className="rw-agenda">
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
      </div>
    </div>
  </section>
);

export default Schedule;
