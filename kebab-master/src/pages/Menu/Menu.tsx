import React, { FC, useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import MenuItemModel from '../../models/dtos/MenuItemModel';
import './Menu.css';
import { apiGetMenu } from '../../http/apiActions';
import { useAppDispatch } from '../../hooks';
import { setErrorMessage } from '../../store/slices/commonSlice';

interface MenuProps {}

const Menu: FC<MenuProps> = () => {

  const dispatch = useAppDispatch();
  const init: MenuItemModel[] = [];
  const [listMenu, setListMenu] = useState(init);
  useEffect(() => {
    apiGetMenu(
      (casted:MenuItemModel[]) => setListMenu(casted),
      () => dispatch(setErrorMessage("Problem with connection to the server! ")))
  },[]);

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
