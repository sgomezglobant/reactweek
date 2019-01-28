import '../styles/menu.scss';
import MenuItem from './menuItem';
import data from '../data';
import React from 'react';

const Menu = () => (
  <nav className="main-menu">
    {
      data.menu.map((item, index) => {
        return (
          <MenuItem key={index} item={item} />
        )
      })
    }
  </nav>
);

export default Menu;