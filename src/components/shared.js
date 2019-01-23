import '../styles/shared.scss';
import data from '../data';
import React from 'react';
import PropTypes from 'prop-types'

const findPwaName = function renderMenuItem(item) {
    let result;
    if (item.name.includes("PWA")) {
        let itemName = item.name.split('PWA');
        result = <a className="main-menu__item" href={item.url} target={item.target}>{itemName[0]}<img className="main-menu__item--image" src={require(`../images/${item.image}`)} />{itemName[1]}</a>
    } else {
        result = <a className="main-menu__item--border" href={item.url} target={item.target}>{item.name}</a>
    }
    return result
}

const Shared = () => (
    <nav className="main-menu">
        {data.menu.map(item => { return ( <div>{findPwaName(item)}</div>)})}
    </nav>
);

findPwaName.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    })
}

export default Shared;
