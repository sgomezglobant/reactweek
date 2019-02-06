import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = props => {
  let result;
  if (props.item.name.includes('PWA')) {
    let itemName = props.item.name.split('PWA');
    result = (
      <a
        className="main-menu__item"
        href={props.item.url}
        target={props.item.target}
      >
        {itemName[0]}
        <img
          className="main-menu__item--image"
          src={require(`../images/${props.item.image}`)}
          alt={props.item.name}
        />
        {itemName[1]}
      </a>
    );
  } else {
    result = (
      <a
        className="main-menu__item"
        href={props.item.url}
        target={props.item.target}
      >
        {props.item.name}
      </a>
    );
  }
  return result;
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
};

export default MenuItem;
