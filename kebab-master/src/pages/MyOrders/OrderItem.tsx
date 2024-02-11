import React, { FC } from 'react';
import { Order } from '../../models/dtos/Order';

const OrderItem: FC<Order> = (props: Order) => {

  return (
    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start mb-2">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1"> Created: {new Date(props.dateCreated).toLocaleString()}</h5>
      </div>
      <p className="mb-1">Order list:</p>
      {props.orderItems.map(item => <p className="mb-1">{item.menuItem.name} - {item.quantity}y </p>)}
      <small>Address: {props.address.streetName} {props.address.streetNumber}</small>
    </a>

  )
}

export default OrderItem;
