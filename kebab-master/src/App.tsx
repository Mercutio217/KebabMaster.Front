import './App.css'
import About from './pages/About/About'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Menu from './pages/Menu/Menu';
import NoPage from './pages/NoPage/NoPage';
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import BasketModal from './pages/modals/BasketModal/BasketModal';
import Checkout from './pages/Checkout/Checkout';
import { NavigationMenu } from './pages/NavigationMenu/NavigationMenu';
import Login from './pages/Login/Login';
import UserPanel from './pages/UserPanel/UserPanel';
import Header from './pages/Header/Header';
import ErrorModal from './pages/modals/ErrorModal/ErrorModal';
import { useEffect } from 'react';
import LoginListener from './tools/LoginListener';
import MyOrders from './pages/MyOrders/MyOrders';
import SuccessModal from './pages/modals/SuccessModal/SuccessModal';

function App() {
  const style: React.CSSProperties = {
    margin: 0,
    backgroundColor: 'grey',
    height: '100%',
    width: '100%'
  }

  return (
    <>
      <div style={style}>
        <BrowserRouter>
        <LoginListener />
          <Header />
          <NavigationMenu />
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route index element={<Menu />} />
            <Route path="/menu" element={<Menu />} />

            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/userData" element={<UserPanel />} />
            <Route path="/orders" element={<MyOrders />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <BasketModal key='basket' />
          <SuccessModal key='success' />
          <ErrorModal key='error-modal' />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
