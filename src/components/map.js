import React from 'react';

import data from '../data';
import "./../styles/map.scss";

const Map = () => (
  <section className="map">
    <h2 className="map__title">{data.map.title}</h2>
    <p>{data.map.direction}</p>
    <iframe
      title={data.map.direction}
      width="100%"
      height="350"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      src="https://www.openstreetmap.org/export/embed.html?bbox=-75.56533813476564%2C6.207023769201901%2C-75.56179761886598%2C6.2094822627699555&amp;layer=mapnik"
    />
  </section>
);

export default Map;
