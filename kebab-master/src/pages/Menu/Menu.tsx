import React, { FC, useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import BasketModal from '../BasketModal/BasketModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';



interface MenuProps {}

const Menu: FC<MenuProps> = () => {

  const init: MenuItem[] = [];
  const [listMenu, setListMenu] = useState(init);
  let visible = useSelector((state: RootState) => state.isBasketVisible);

  useEffect(() => {
    fetch('https://localhost:7011/Orders/menu')
      .then(response => response.json())
      .then(js => js as MenuItem[])
      .then(casted => setListMenu(casted))
      .catch(error => console.error(error));
  }, [])

  const arrayDataItems = listMenu.map((course) => <MenuItem key={course.id} item={course} />);
   
  return (
    <div data-testid="Menu">
      <h2></h2>Menu Component
      <ul className="list-group">
        {arrayDataItems}
      </ul>
      <BasketModal isVisible={visible}/>
    </div>
  );
  
}
export default Menu;
