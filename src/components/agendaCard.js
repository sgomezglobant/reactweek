import React from 'react'

import './agenda.scss'

const AgendaCard = () => (
 <div className="card">
    <div className="card-wrapper">
        <img className="card-image" src="http://i.pravatar.cc/300" alt="avatar"/>
        <div className="card-information">
            <h3 className="schedule">Martes- 05:30pm - 6:30pm</h3>
            <p className="card-title">Arquitectura de Apps escalables en Angular</p>
            <p>Aprenderemos como aplicar los patrones de diseño con los bloques de construcción de Angular para proyectos pensados en tener mas de 100 componentes.</p>
            <a href="#">Slides</a>
            <a href="#">Video</a>
        </div>
    </div>
  </div>
)



export default AgendaCard