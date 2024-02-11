import './App.css'
import About from './pages/About/About'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './pages/Menu/Menu';
import NoPage from './pages/NoPage/NoPage';
import 'bootstrap/dist/css/bootstrap.css';
import BasketModal from './shared/modals/BasketModal/BasketModal';
import Checkout from './pages/Checkout/Checkout';
import { NavigationMenu } from './shared/navBar/NavigationMenu/NavigationMenu';
import Login from './pages/Login/Login';
import UserPanel from './pages/UserPanel/UserPanel';
import Header from './pages/Header/Header';
import ErrorModal from './shared/modals/ErrorModal/ErrorModal';
import LoginListener from './tools/LoginListener';
import MyOrders from './pages/MyOrders/MyOrders';
import SuccessModal from './shared/modals/SuccessModal/SuccessModal';
import Profile from './pages/Profile/Profile';

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
            <Route path='profile' element={<Profile />}/>
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
