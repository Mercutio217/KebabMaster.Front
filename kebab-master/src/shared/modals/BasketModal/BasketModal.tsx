import React, { FC } from 'react';
import '../CommonModal.css';
import { useSelector } from 'react-redux';
import OrderItem from '../../../models/dtos/OrderItem';
import { useAppDispatch } from '../../../hooks';
import { switchBasket } from '../../../store/slices/basketSlice';
import { useNavigate } from 'react-router';
import { RootState } from '../../../store/store';

const BasketModal: FC = () => {

  const isBasketVisible = useSelector((state: RootState) => state.basket.isBasketVisible);

  let basketMap = useSelector((state: RootState) => state.basket.value);
  const propertyValues = Object.values(basketMap) as OrderItem[];
  const asList = propertyValues.map(item => <li className='list-group-item' key={item.menuItemId}>{item.name} - {item.quantity}</li>)
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); 
  const routeChange = () =>{
    dispatch(switchBasket());
    return navigate(`checkout`);
  };

  return (
    <div className='modal-background' style={{ display: isBasketVisible ? 'block' : 'none' }}>
    <div className="modal" tabIndex={-1} style={{ display: isBasketVisible ? 'block' : 'none' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Your Basket</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => dispatch(switchBasket())}></button>
          </div>
          <div className="modal-body">
            <ul className='list-group list-group-flush'>
              {asList}
            </ul>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={routeChange}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
    </div>


  );
};

export default BasketModal;
