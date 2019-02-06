import React from 'react';
import PropTypes from 'prop-types';

const organizationItem = ({ item }) => {
  return (
    <a className="rw-organization-item" href={item.url} name={item.name}>
      <img src={item.image} alt={item.name} />
    </a>
  );
};

organizationItem.propTypes = {
  item: PropTypes.object
};

export default organizationItem;
