import React, { FC } from 'react';
import MenuItemModel from '../../models/dtos/MenuItemModel';
import store from '../../store/store';
import { addItem, removeItem } from '../../store/slices/basketSlice';
import { useAppSelector } from '../../hooks';
import { Order } from '../../models/dtos/Order';
 
const OrderItem: FC<Order> = (props: Order) => {

  return (
    <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{props.dateCreated} </h5>
      {props.orderItems.map(item => <small>{item.name} - {item.quantity}</small>)}
      <small>3 days ago</small>
    </div>
    <p className="mb-1">Some placeholder content in a paragraph.</p>
    <small>And some small print.</small>
    </a>

  )
}

export default OrderItem;
 