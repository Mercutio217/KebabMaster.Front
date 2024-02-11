import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import OrderItem from '../../models/dtos/OrderItem';
import { useNavigate } from 'react-router';
import { RootState } from '../../store/store';
import { apiSubmitOrder } from '../../http/apiActions';
import { setErrorMessage, setSuccessMessage } from '../../store/slices/commonSlice';
import OrderRequest from '../../http/models/OrderRequest';
import './Checkout.css';
import OrderUserRequest from '../../http/models/OrderUserRequest';

interface MenuProps { }

const Checkout: FC<MenuProps> = () => {

  const [email, setEmail] = useState('');
  const [streetName, setStreetName] = useState('');
  const [streetNumber, setStreetNumber] = useState(0);
  const [flatNumber, setFlatNumber] = useState(0);
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state: RootState) => state.userData);
  const isLogged = userData.token !== '';
  if (isLogged) {
    setEmail(userData.userData.email);
  }
  const trySetStreetNumber = (toParse: string) => {
    const int = parseInt(toParse);
    if (!isNaN(int) && int > 0) {
      setStreetNumber(int);
    }
  };

  const trySetFlatNumber = (toParse: string) => {
    const int = parseInt(toParse);
    if (!isNaN(int) && int > 0) {
      setFlatNumber(int);
    }
  };

  let count = useAppSelector((st: RootState) => st.basket.count);
  let navigate = useNavigate();
  if (count < 1) {
    navigate("/menu");
  }

  const basket = useAppSelector(st => st.basket.value);
  const basketVaues = Object.values(basket) as OrderItem[];
  let sum: number = 0;
  if (basketVaues.length > 0) {
    sum = basketVaues.map(it => it.price * it.quantity)
      .reduce((prev, nxt) => prev + nxt);
  }

  const order = !isLogged ?
    {
      address: {
        flatNumber: flatNumber,
        streetName: streetName,
        streetNumber: streetNumber
      },
      email: email,
      orderItems: basketVaues
    } as OrderRequest :
    {
      address: {
        flatNumber: flatNumber,
        streetName: streetName,
        streetNumber: streetNumber
      },
      email: userData.userData.email,
      orderItems: basketVaues,
      id: userData.userData.id

    } as OrderUserRequest;

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    apiSubmitOrder(order, userData.token,
      () => dispatch(setSuccessMessage("Order Completed Successfully")),
      () => dispatch(setErrorMessage("Something went wrong, try again. If problem persists, please contact support.")));
  }

  const isActive =
    ((email != null && email !== '') || isLogged) &&
    streetName != null && streetName !== '' &&
    streetNumber > 0;

  const mapped = basketVaues.map(({ name, price, quantity }) =>
    <li className="list-group-item">{name} - {quantity}  Price: {price * quantity}</li>)

  return (
    <div data-testid="Checkout" id="checkout-container">

      <div className="input-group mb-3 input-group-sm">
        <div className="input-group-prepend">
          <span className="input-group-text">Email</span>
        </div>
        {isLogged ?
          <input type="text" className="form-control" aria-label="Default" value={userData.userData.email} readOnly onChange={(event) => setEmail(event.target.value)} aria-describedby="inputGroup-sizing-default" />
          :
          <input type="text" className="form-control" aria-label="Default" onChange={(event) => setEmail(event.target.value)} aria-describedby="inputGroup-sizing-default" />

        }
      </div>

      <div className="input-group mb-3 input-group-sm">
        <div className="input-group-prepend">
          <span className="input-group-text">Street Name</span>
        </div>
        <input type="text" className="form-control" aria-label="Default" onChange={(event) => setStreetName(event.target.value)} aria-describedby="inputGroup-sizing-default" />
      </div>

      <div className="input-group mb-3 input-group-sm">
        <div className="input-group-prepend">
          <span className="input-group-text">Street Number</span>
        </div>
        <input type="number" min={0} className="form-control" aria-label="Default" onChange={(event) => trySetStreetNumber(event.target.value)} aria-describedby="inputGroup-sizing-default" />
      </div>

      <div className="input-group mb-3 input-group-sm">
        <div className="input-group-prepend">
          <span className="input-group-text">Flat Number</span>
        </div>
        <input type="number" min={0} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={(event) => trySetFlatNumber(event.target.value)} />
      </div>
      <div>

      </div>
      <ul className="list-group">
        <li className="list-group-item"> Orderered Items </li>
        {mapped}
      </ul>
      <div>
        <h3>TOTAL: {sum}</h3>
      </div>
      <button className='btn btn-primary' disabled={!isActive} onClick={handleSubmit}>Submit order</button>
    </div>
  );

}
export default Checkout;
