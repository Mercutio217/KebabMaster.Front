import './App.css'
import About from './pages/About/About'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './pages/Menu/Menu';
import NoPage from './pages/NoPage/NoPage';
import Sidebar from './pages/Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import BasketModal from './pages/BasketModal/BasketModal';

function App() {
  // const { bar } = useSelector(state:  => state.isBasketVisible);
  const isBasketVisible = useSelector((state: RootState) => state.isBasketVisible);

  return (
    <>
      <div className='sidebar'>
        <Sidebar ></Sidebar>
      </div>
      <div className='content'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route index element={<Menu />} />

            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
        <BasketModal isVisible={isBasketVisible} key='dupa' />
      </div>

    </>

  )
}

export default App
