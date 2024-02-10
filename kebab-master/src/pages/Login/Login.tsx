import React, { FC, useState } from 'react';
import TokenResponse from '../../http/models/TokenResponse';
import { useAppDispatch } from '../../hooks';
import { login } from '../../store/slices/userDataslice';
import { useNavigate } from 'react-router';
import apiLogin from '../../http/httpService';


interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    apiLogin(email, password, 
      
      (result: TokenResponse) => {
      dispatch(login(result));
      navigate('/menu');
    }, 
    () => setErrorMsg("Invalid password"),
    ()=> setErrorMsg("Error"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"   onChange={(event) => setEmail(event.target.value)}/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      <div>{errorMsg}</div>
    </form>
  );
};

export default Login;

