import React, { FC, useEffect, useState } from 'react';
import BasketModal from '../BasketModal/BasketModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import MenuItem from './MenuItem';
import MenuItemModel from '../../models/dtos/MenuItemModel';
import './Menu.css';

interface MenuProps {}

const Menu: FC<MenuProps> = () => {

  const init: MenuItemModel[] = [];
  const [listMenu, setListMenu] = useState(init);
  let visible = useSelector((state: RootState) => state.isBasketVisible);

  useEffect(() => {
    fetch('https://localhost:7011/Orders/menu')
      .then(response => response.json())
      .then(js => js as MenuItemModel[])
      .then(casted => setListMenu(casted))
      .catch(error => console.error(error));
  }, [])

  const arrayDataItems = listMenu.map((course) => <MenuItem key={course.id} item={course} />);
   
  return (
    <div data-testid="Menu">
      <ul className="list-group menu-list">
        {arrayDataItems}
      </ul>
      {/* <BasketModal isVisible={visible}/> */}
    </div>
  );
  
}
export default Menu;
