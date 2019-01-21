import React from "react";
import PropTypes from "prop-types"
import "./speakerItem.css";


const SpeakerItem = ({pic, name, description, github, facebook, twitter}) => (
  <article className="speakers-grid__item">
    <figure className="speakers-grid__figure">
      <img className="speakers-grid__img" src={pic} alt="Foto del speaker" />
      <figcaption className="speakers-grid__name">{name}</figcaption>
    </figure>
    <div className="speakers-grid__description">
      <p className="speakers-grid__text">{description}</p>
      <div className="speakers-grid__social">
        <a href={github} className="speakers-grid__link" />
        <a href={facebook} className="speakers-grid__link" />
        <a href={twitter} className="speakers-grid__link" />
      </div>
    </div>
  </article>
)

SpeakerItem.propTypes = {
  pic: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired
}

export default SpeakerItem;