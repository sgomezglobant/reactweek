import '../styles/menu.scss';
import MenuItem from './menuItem';
import React from 'react';

const Menu = ({ menu, isFixed }) => (
  <nav className={`main-menu ${isFixed && 'main-menu--fixed'}`}>
    <div className="main-menu__content container">
      {menu.map((item, index) => {
        return <MenuItem key={index} item={item} />;
      })}
    </div>
  </nav>
);

export default Menu;
