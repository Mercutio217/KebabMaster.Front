import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks";
import { FC, useState } from "react";
import { RootState } from "../../store/store";
import { apiUpdateUserData } from "../../http/apiActions";
import { setErrorMessage, setSuccessMessage } from "../../store/slices/commonSlice";

const Profile: FC = () => {
  const userData = useSelector((state: RootState) => state.userData)
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  if(userData.token === ''){
    navigate('/menu');
  }
  const [ name, setName ] = useState(userData.userData.name);
  const [ surname, setSurname ] = useState(userData.userData.surname);
  const [ userName, setUserName ] = useState(userData.userData.userName);

  if (userData.userData.id == null) {
    navigate('/');
  }
  let hasChanged = false;

  const changeHandler = (value: string, setFunction: Function) => {
    hasChanged = true;
    setFunction(value);
  }

  const updateData = () => {    
    apiUpdateUserData({
      id: userData.userData.id,
      name: userData.userData.name,
      surname: userData.userData.surname,
      userName: userData.userData.userName
    }, userData.token, 
    () => dispatch(setSuccessMessage('Data updated successfully!')),
    (msg: string) => dispatch(setErrorMessage(msg)),
    (msg: string) => dispatch(setErrorMessage(msg)));
  }

  return (
    <div data-testid="Checkout" id="checkout-container">

      <div className="input-group mb-3 input-group-sm">
        <div className="input-group-prepend">
          <span className="input-group-text">Username</span>
        </div>
        {userName}
      </div>

      <div className="input-group mb-3 input-group-sm">
        <div className="input-group-prepend">
          <span className="input-group-text">Name</span>
        </div>
        <p>{name}</p>
        <input type="text" readOnly className="form-control" aria-label="Default" value={name} onChange={(event) => changeHandler(event.target.value, setName)} aria-describedby="inputGroup-sizing-default" />
      </div>
      <div className="input-group mb-3 input-group-sm">
        <div className="input-group-prepend">
          <span className="input-group-text">Surname</span>
        </div>
        {userName}
      </div>
    </div>
  );
};

export default Profile;