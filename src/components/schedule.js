import React from "react";
import AgendaCard from "./agendaCard";
import "./agenda.scss";

const agendaList = [
  {
    image: "http://i.pravatar.cc/302",
    schedule: "Martes- 05:30pm - 6:30pm",
    title: "Arquitectura de Apps escalables en Angular",
    description:
      "Aprenderemos como aplicar los patrones de diseño con los bloques de construcción de Angular para proyectos pensados en tener mas de 100 componentes.",
    slides: "",
    video: ""
  },
  {
    image: "http://i.pravatar.cc/300",
    schedule: "Miercoles- 06:30pm - 7:30pm",
    title: "Angular Material",
    description:
      "Aprenderemos como aplicar los patrones de diseño con los bloques de construcción de Angular para proyectos pensados en tener mas de 100 componentes.",
    slides: "",
    video: ""
  },
  {
    image: "http://i.pravatar.cc/301",
    schedule: "Martes- 08:30pm - 9:30pm",
    title: "De Reactive Forms y Otras Delicias",
    description:
      "Aprenderemos como aplicar los patrones de diseño con los bloques de construcción de Angular para proyectos pensados en tener mas de 100 componentes.",
    slides: "",
    video: ""
  }
];

const Schedule = () => (
  <section className="agenda">
    <h2>Agenda</h2>
    <div className="agenda-grid">
      {agendaList.map(item => (
        <div className="agenda-container">
          <AgendaCard image={item.image} schedule={item.schedule} />
        </div>
      ))}
    </div>
  </section>
);

export default Schedule;
