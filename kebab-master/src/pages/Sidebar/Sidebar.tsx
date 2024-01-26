import React, { FC, useState } from 'react';
import './Sidebar.css';
import {  useSelector } from 'react-redux';
import store, { RootState,  } from '../../store/store';
import { switchBasket } from '../../store/slices/basketSlice';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  // const [ count, setCount ] = useState(0);
   
  const productCount = useSelector((state: RootState) => state.count);

  ;
  const clickAction = () => store.dispatch(switchBasket());
  // const clickAction = () => useAppDispatch();

  return (
    <div>
      <span>
        <a className="active" href="/">Menu</a>
        <a href="/about">About</a></span>
        <button id="myBtn" onClick={clickAction}>BASKET</button>
      <span>
        Basket Count: {productCount}
      </span>
    </div> 

  );
};

export default Sidebar;
