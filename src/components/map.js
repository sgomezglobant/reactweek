import React from 'react';

import data from '../data';
import "./../styles/map.scss";

const Map = () => (
  <section className="rw-map">
    <h2 className="rw-map__title">{data.map.title}</h2>
    <p>{data.map.direction}</p>
    <iframe
      title={data.map.direction}
      width="100%"
      height="350"
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4181158594156!2d-75.56576458467441!3d6.208452828466616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428280de19245%3A0xc0db84ec9131700a!2sVizcaya+Centro+de+Negocios!5e0!3m2!1ses!2sco!4v1549249368871"
      // src="https://www.openstreetmap.org/export/embed.html?bbox=-75.56533813476564%2C6.207023769201901%2C-75.56179761886598%2C6.2094822627699555&amp;layer=mapnik"
    />
  </section>
);

export default Map;
