import React, { FC } from 'react';
import './BasketModal.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import OrderItem from '../../models/dtos/OrderItem';
import { useAppDispatch } from '../../hooks';
import { switchBasket } from '../../store/slices/basketSlice';

interface BaskeModalProps {
  isVisible: boolean;
}

const BasketModal: FC<BaskeModalProps> = (props: BaskeModalProps) => {

  let basketMap = useSelector((state: RootState) => state.value);
  const propertyValues = Object.values(basketMap) as OrderItem[];
  const asList = propertyValues.map(item => <li className='list-group-item list-group-item-action'>{item.name} - {item.quantity}</li>)
  const dispatch = useAppDispatch();

  return (
    <div className='modal-background' style={{ display: props.isVisible ? 'block' : 'none' }}>
    <div className="modal" tabIndex={-1} style={{ display: props.isVisible ? 'block' : 'none' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => dispatch(switchBasket())}></button>
          </div>
          <div className="modal-body">
            <ul className='list-group'>
              {asList}
            </ul>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">Checkout</button>
          </div>
        </div>
      </div>
    </div>
    </div>


  );
};

export default BasketModal;
