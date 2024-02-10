import React, { FC, useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import MenuItemModel from '../../models/dtos/MenuItemModel';
import './Menu.css';

interface MenuProps {}

const Menu: FC<MenuProps> = () => {

  const init: MenuItemModel[] = [];
  const [listMenu, setListMenu] = useState(init);

  useEffect(() => {
    fetch('https://localhost:7011/Orders/menu')
      .then(response => response.json())
      .then(js => js as MenuItemModel[])
      .then(casted => setListMenu(casted))
      .catch(error => console.error(error));
  }, [])

  const arrayDataItems = listMenu.map(({id, name, price}) => <MenuItem key={id} id={id} name={name} price={price} />);
   
  return (
    <div data-testid="Menu" id='menu-container'>
      <ul className="list-group menu-list">
        {arrayDataItems}
      </ul>
    </div>
  );
  
}
export default Menu;
