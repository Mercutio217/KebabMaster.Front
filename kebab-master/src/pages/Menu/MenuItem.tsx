import React, { FC, useEffect, useState } from 'react';
import MenuItem from '../../models/dtos/MenuItem';
import store from '../../store/store';
import { addItem, removeItem } from '../../store/slices/basketSlice';

const MenuItem: FC<{ item:MenuItem }> = (props: { item:MenuItem }) => {
    const { id, name, price } = props.item;

    const add = () => store.dispatch(addItem(props.item)) 
    const remove = () => store.dispatch(removeItem(props.item.id)) 
    
    return <li key={id} className="list-group-item list-flex">
      <span>{name} - {price}</span>
      <span><button onClick={add}>plus</button></span>
      <span><button onClick={remove}>minus</button></span>
      
    </li>
}

export default MenuItem;

