import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import OrderItem from '../../models/dtos/OrderItem';
import { redirect, useNavigate } from 'react-router';
import { RootState } from '../../store/store';

interface MenuProps { }

const Checkout: FC<MenuProps> = () => {

  const dispatch = useAppDispatch();
  const [response, setResponse] = useState('');
  let count = useAppSelector((st: RootState) => st.basket.count);
  let navigate = useNavigate();
  console.log(count);
  if (count < 1) {
    navigate("/menu");
  }

  const basket = useAppSelector(st => st.basket.value);
  const propertyValues = Object.values(basket) as OrderItem[];
  console.log(propertyValues);
  let sum: number = 0;
  if (propertyValues.length > 0) {
    sum = propertyValues.map(it => it.price * it.quantity)
      .reduce((prev, nxt) => prev + nxt);
  }

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    const response = await fetch(' http://localhost:5011/orders', {
      method: 'POST',
      body: JSON.stringify(  {
        email: "l.bielenin@gmail.com",
        address: {
          "streetName": "string",
          "streetNumber": 0,
          "flatNumber": 0
        },
        "orderItems": propertyValues
      }
      ),
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      }
    });
    
    if(response.status != 201) {
      setResponse('Created!')
    } else {
      console.log(response);
      setResponse('Error!')
    }


  }

  const mapped = propertyValues.map(({ name, price, quantity }) =>
    <li className="list-group-item">{name} - {quantity} {price * quantity}</li>)

  return (
    <div data-testid="Checkout">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" >Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <ul className="list-group list-group-flush">
        {mapped}
      </ul>
      <div>
        <h3>TOTAL: {sum}</h3>
        {response}
      </div>
    </div>
  );

}
export default Checkout;
