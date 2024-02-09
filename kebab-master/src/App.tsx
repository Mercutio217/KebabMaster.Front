import './App.css'
import About from './pages/About/About'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './pages/Menu/Menu';
import NoPage from './pages/NoPage/NoPage';
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import BasketModal from './pages/BasketModal/BasketModal';
import Checkout from './pages/Checkout/Checkout';
import { NavigationMenu }  from './pages/NavigationMenu/NavigationMenu';
import Login from './pages/Login/Login';
import UserPanel from './pages/UserPanel/UserPanel';
function App() {
  const isBasketVisible = useSelector((state: RootState) => state.basket.isBasketVisible);

  return (
    <>
      <div className='content'>
        <BrowserRouter>
        <NavigationMenu />
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route index element={<Menu />} />
            <Route path="/menu" element={<Menu />} />

            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/userData" element={<UserPanel />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <BasketModal isVisible={isBasketVisible} key='dupa' />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
