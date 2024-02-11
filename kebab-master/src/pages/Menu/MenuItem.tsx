import React, { FC } from 'react';
import MenuItemModel from '../../models/dtos/MenuItemModel';
import store from '../../store/store';
import { addItem, removeItem } from '../../store/slices/basketSlice';
import { useAppSelector } from '../../hooks';
 
const MenuItem: FC<{ id: string, name: string, price: number } > = (props: { id: string, name: string, price: number }) => {

  const model = { id: props.id, name: props.name, price:props.price } as MenuItemModel; 

  const add = () => store.dispatch(addItem(model))
  const remove = () => store.dispatch(removeItem(props.id))
  var selector = useAppSelector(st => st.basket.value[props.id]);

  return <li key={props.id} className="list-group-item list-flex">
    <span>{props.name} - {props.price}</span>
    <div>
      <button type="button" className="btn btn-success" onClick={add}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-file-plus" viewBox="0 0 16 16">
          <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5z" />
        </svg>
      </button>
      {selector != null && <span>{selector.quantity}</span>}
      {selector != null &&      
      <button type="button" className="btn btn-danger" onClick={remove}>
        <svg xmlns="http://www.w3.org/2000/svg"  width="25" height="25s" fill="currentColor" className="bi bi-file-minus" viewBox="0 0 16 16">
          <path d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5" />
        </svg>
      </button>}
    </div>
  </li>
}

export default MenuItem;
 