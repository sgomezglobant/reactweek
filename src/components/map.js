import React from 'react';

import { MarkerIcon } from './icons';
import data from '../data';
import './../styles/map.scss';

const Map = () => (
  <section className="rw-map">
    <div className="rw-map__info">
      <div className="rw-map__info__header">
        <MarkerIcon />
        <h3 className="rw-map__info__header__title">{data.map.title}</h3>
      </div>
      <h4 className="rw-map__info__name">{data.map.name}</h4>
      <h5 className="rw-map__info__address">{data.map.address}</h5>
    </div>
    <iframe
      title={data.map.name}
      width="100%"
      height="450"
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
      src="https://www.openstreetmap.org/export/embed.html?bbox=-75.56533813476564%2C6.207023769201901%2C-75.56179761886598%2C6.2094822627699555&amp;layer=mapnik"
    />
  </section>
);

export default Map;
