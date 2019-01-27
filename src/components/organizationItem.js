import React from 'react'
import PropTypes from 'prop-types'

const organizationItem = ({ item }) => {
  return (
    <a className="sponsor-url" href={item.url} name={item.name}>
      <img src={item.image} alt={item.name}></img>
    </a>
  )
}

organizationItem.propTypes = {
  item: PropTypes.object
}

export default organizationItem