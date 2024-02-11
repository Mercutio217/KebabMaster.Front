import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { FC, useState } from "react";
import { RootState } from "../../store/store";

const Profile: FC = () => {
  const userData = useSelector((state: RootState) => state.userData)
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  if(userData.token === ''){
    navigate('/menu');
  }
  const [ name, setName ] = useState(userData.userData.name);
  const [ surname, setSurname ] = useState(userData.userData.name);
  const [ userName, setUserName ] = useState(userData.userData.name);

  if (userData.userData.id == null) {
    navigate('/');
  }
  let hasChanged = false;

  const changeHandler = (value: string, setFunction: Function) => {
    hasChanged = true;
    setFunction(value);
  }

  return (
    <div data-testid="Checkout" id="checkout-container">

      <div className="input-group mb-3 input-group-sm">
        <div className="input-group-prepend">
          <span className="input-group-text">Username</span>
        </div>
        <input type="text" className="form-control" aria-label="Default" value={userName} onChange={(event) => changeHandler(event.target.value, setUserName)} aria-describedby="inputGroup-sizing-default" />
      </div>

      <div className="input-group mb-3 input-group-sm">
        <div className="input-group-prepend">
          <span className="input-group-text">Name</span>
        </div>
        <input type="text" className="form-control" aria-label="Default" value={name} onChange={(event) => changeHandler(event.target.value, setName)} aria-describedby="inputGroup-sizing-default" />
      </div>
      <div className="input-group mb-3 input-group-sm">
        <div className="input-group-prepend">
          <span className="input-group-text">Surname</span>
        </div>
        <input type="text" className="form-control" aria-label="Default"value={surname} onChange={(event) => changeHandler(event.target.value, setSurname)} aria-describedby="inputGroup-sizing-default" />
      </div>
      <button className='btn btn-primary' disabled={!hasChanged}>Update Profile order</button>
    </div>
  );
};

export default Profile;