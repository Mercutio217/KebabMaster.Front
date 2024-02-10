import React, { FC, useEffect, useState } from 'react';
import { Order } from '../../models/dtos/Order';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import OrderItem from './OrderItem';


interface MyOrdersProps { }

const MyOrders: FC<MyOrdersProps> = () => {
  const init: Order[] = [];
  const [orders, setOrders] = useState(init);
  const id = useSelector((state: RootState) => state.userData.userData.id)

  useEffect(() => {
    fetch(`https://localhost:7011/Orders/${id}`)
      .then(response => response.json())
      .then(js => js as Order[])
      .then(casted => setOrders(casted))
      .catch(error => console.log(error));
  }, []);

const mapped = orders.map(ord => <OrderItem {...ord} />);

  return (
    <div data-testid="Menu">
      <div className="list-group">
        {mapped}
      </div>
    </div>
  );
};

export default MyOrders;
