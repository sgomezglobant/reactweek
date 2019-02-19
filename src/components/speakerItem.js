import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby';
import './../styles/speakerItem.scss';

// Speakears item component
const sanitizeName = (name) => {
  const nameChanged = name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return nameChanged;
}

const activateDescription = (event) => {
  closeDescription();
  const node = event.target.parentElement;
  const id = node.getAttribute("href");
  const el = document.getElementById(id.substring(1));
  el.classList.add('speakers-grid__description--is-active');
}

const closeDescription = () => {
  const node = document.getElementsByClassName('speakers-grid__description--is-active');
  if (node.length) {
    window.history.pushState(null, null, '#');
    node[0].classList.remove('speakers-grid__description--is-active');
  }
  return;
}

const SpeakerItem = ({
  pic,
  name,
  description,
  github,
  facebook,
  twitter,
  linkedin,
}) => {
  return (
    <article className="speakers-grid__item">
      <a className="speakers-grid__clickable" href={"#name-" + sanitizeName(name)} onClick={activateDescription}>
        <figure className="speakers-grid__figure">
          <img
            className="speakers-grid__img"
            src={withPrefix(`speakers/${pic}`)}
            alt="Foto del speaker"
          />
          <figcaption className="speakers-grid__name">
            <span>{name}</span>
          </figcaption>
        </figure>
      </a>
      <div className="speakers-grid__description" id={`name-${sanitizeName(name)}`}>
        <img className="speakers-grid__description__image" src={withPrefix(`speakers/${pic}`)} alt="Foto del speaker"/>
        <p className="speakers-grid__description__name">{name}</p>
        <button className="speakers-grid__description__close" onClick={closeDescription}>close</button>
        <p className="speakers-grid__description__text">{description}</p>
        <div className="speakers-grid__social">
          {!!github && (
            <a
              href={github}
              className="speakers-grid__link speakers-grid__link--github"
            >
              Github
            </a>
          )}
          {!!facebook && (
            <a
              href={facebook}
              className="speakers-grid__link speakers-grid__link--facebook"
            >
              Facebook
            </a>
          )}
          {!!twitter && (
            <a
              href={twitter}
              className="speakers-grid__link speakers-grid__link--twitter"
            >
              Twitter
            </a>
          )}
          {!!linkedin && (
            <a
              href={linkedin}
              className="speakers-grid__link speakers-grid__link--linkedin"
            >
              linkedin
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

SpeakerItem.propTypes = {
  pic: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  linkedin: PropTypes.string,
};

export default SpeakerItem;
