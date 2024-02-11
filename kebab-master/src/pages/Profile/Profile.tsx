import { useNavigate } from "react-router";
import { apiGetOrders } from "../../http/apiActions";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { FC, useState } from "react";
import { RootState } from "../../store/store";
import { Order } from "../../models/dtos/Order";
import OrderItem from "../MyOrders/OrderItem";

interface MyOrdersProps { }

const Profile: FC<MyOrdersProps> = () => {
  const init: Order[] = [];
  const [orders, setOrders] = useState(init);
  const userData = useSelector((state: RootState) => state.userData)
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  console.log(orders);
  if (userData.userData.id == null) {
    navigate('/');
  }

//   useEffect(() => {
//     apiGetOrders(
//       userData.userData.id,
//       userData.token,
//       (apiOrders: Order[]) => setOrders(apiOrders),
//       () => dispatch(setErrorMessage("Authorization problem!")),
//       () => dispatch(setErrorMessage("Error!")))
//   },[]);


  return (
    <div data-testid="Checkout" id="checkout-container">

      <div className="input-group mb-3 input-group-sm">
        <div className="input-group-prepend">
          <span className="input-group-text">Username</span>
        </div>
        <input type="text" className="form-control" aria-label="Default" value={isLogged ? userData.userData.email : ''} readOnly={isLogged} onChange={(event) => setEmail(event.target.value)} aria-describedby="inputGroup-sizing-default" />
      </div>

      <div className="input-group mb-3 input-group-sm">
        <div className="input-group-prepend">
          <span className="input-group-text">Name</span>
        </div>
        <input type="text" className="form-control" aria-label="Default" onChange={(event) => setStreetName(event.target.value)} aria-describedby="inputGroup-sizing-default" />
      </div>
      <div className="input-group mb-3 input-group-sm">
        <div className="input-group-prepend">
          <span className="input-group-text">Surname</span>
        </div>
        <input type="text" className="form-control" aria-label="Default" onChange={(event) => setStreetName(event.target.value)} aria-describedby="inputGroup-sizing-default" />
      </div>
      <button className='btn btn-primary'>Update Profile order</button>
    </div>
  );
};

// export default MyOrders;
