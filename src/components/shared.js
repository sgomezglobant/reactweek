import '../styles/shared.scss';
import data from '../data';
import React from 'react';
import PropTypes from 'prop-types'

const findPwaName = function renderMenuItem(item){
    let result;
    if(item.name.includes("PWA")){
        let itemName = item.name.split('PWA');
        result = <a href={item.url} target={item.target}>{itemName[0]}<img src={require(`../images/${item.image}`)} />{itemName[1]}</a>
    } else{
        result = <a href={item.url} target={item.target}>{item.name}</a>
    }
    return result
}

const Shared = () => (
    <nav className="rw-shared-fixed">
        <ul>
            {data.menu.map(item => {
                return (
                    <li>{findPwaName(item)}</li>
                )
            })}
        </ul>
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
