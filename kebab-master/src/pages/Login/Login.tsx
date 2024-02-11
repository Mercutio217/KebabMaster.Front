import React, { FC, useState } from 'react';
import TokenResponse from '../../http/models/TokenResponse';
import { useAppDispatch } from '../../hooks';
import { login } from '../../store/slices/userDataslice';
import { useNavigate } from 'react-router';
import { apiLogin } from '../../http/apiActions';
import './Login.css';
import { setErrorMessage } from '../../store/slices/commonSlice';

interface LoginProps { }

const Login: FC<LoginProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loginUser = (result: TokenResponse) => {
    dispatch(login(result));
    localStorage.setItem("userData", JSON.stringify(result));
    navigate('/menu');
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    apiLogin(
      email,
      password,
      (result: TokenResponse) => loginUser(result),
      () => dispatch(setErrorMessage("Invalid password")),
      () =>  dispatch(setErrorMessage("Invalid user credentials")))
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Login;

