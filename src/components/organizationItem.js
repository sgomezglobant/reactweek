import React from 'react'
import PropTypes from 'prop-types'

const organizationItem = props => {
  return (
    <a className="sponsor-url" href={props.item.url} name={props.item.name}>
      <img src={require(`../images/${props.item.image}`)} alt={props.item.name}></img>
    </a>
  )
}

organizationItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
}

export default organizationItem