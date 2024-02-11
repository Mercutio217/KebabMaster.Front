import React, { FC, useEffect, useState } from 'react';
import { Order } from '../../models/dtos/Order';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import OrderItem from './OrderItem';
import { useLocation, useNavigate } from 'react-router';
import { apiGetOrders } from '../../http/apiActions';
import { useAppDispatch } from '../../hooks';
import { setErrorMessage } from '../../store/slices/commonSlice';


interface MyOrdersProps { }

const MyOrders: FC<MyOrdersProps> = () => {
  const init: Order[] = [];
  const [orders, setOrders] = useState(init);
  const userData = useSelector((state: RootState) => state.userData)
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  console.log(orders);
  if (userData.userData.id == null) {
    navigate('/');
  }

  useEffect(() => {
    apiGetOrders(
      userData.userData.id,
      userData.token,
      (apiOrders: Order[]) => setOrders(apiOrders),
      () => dispatch(setErrorMessage("Authorization problem!")),
      () => dispatch(setErrorMessage("Error!")))
  },[]);

  const mapped = orders.map(ord => <OrderItem key={ord.id} {...ord} />);

  return (
    <div data-testid="Menu">
      {mapped.length > 0 ?
        <div className="list-group">
          {mapped}
        </div> :
        <h2> You don't have any orders!</h2>
      }

    </div>
  );
};

export default MyOrders;
