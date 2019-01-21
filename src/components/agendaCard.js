import React from "react";

import "./agenda.scss";

const AgendaCard = ({ image, schedule }) => (
  <div className="card">
    <div className="card-wrapper">
      <img className="card-image" src={image} alt="avatar" />
      <div className="card-information">
        <h2 className="schedule">{schedule}</h2>
        <p className="card-title">
          <i>Arquitectura de Apps escalables en Angular</i>
        </p>
        <p className="card-description">
          Aprenderemos como aplicar los patrones de diseño con los bloques de
          construcción de Angular para proyectos pensados en tener mas de 100
          componentes.
        </p>
        <a href="#">Slides</a>
        <a href="#">Video</a>
      </div>
    </div>
  </div>
);

export default AgendaCard;
