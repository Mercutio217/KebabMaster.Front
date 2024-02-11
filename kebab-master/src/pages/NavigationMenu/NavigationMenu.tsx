import { FC, useState } from "react";
import './NavigationMenu.css'
import { useLocation, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useAppDispatch } from "../../hooks";
import { clearBasket, switchBasket } from "../../store/slices/basketSlice";
import { logout } from "../../store/slices/userDataslice";

export const NavigationMenu: FC = () => {
    const navigate = useNavigate();
    const token = useSelector((st: RootState) => st.userData.token);
    const isBasketBtnVisible = useSelector((st: RootState) => st.basket.count) > 0;
    const dispatch = useAppDispatch();
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const logoutAction = () => {
        localStorage.removeItem('userData');
        dispatch(clearBasket())
        dispatch(logout());
    }

    const userSettings = token != '' ?
        <span><div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
                User Settings
            </button>
            {isDropdownVisible &&
                <div className="dropdown-menu options-menu" aria-labelledby="dropdownMenuButton" onMouseLeave={() => setIsDropdownVisible(false)}>
                    <a className="dropdown-item">Profile</a>
                    <a className="dropdown-item" onClick={()=> navigate('/orders')}>My Orders</a>
                    <a className="dropdown-item" onClick={logoutAction} >Logout </a>
                </div>
            }

        </div></span> :
        <button className="btn btn-secondary dropdown-toggle" type="button" onClick={() => navigate('/login')}>
            Login
        </button>;

    return (
        <div className="nav-container">
            <div className="dropdown-container">
                <button className="btn btn-secondary" type="button" onClick={() => navigate('/menu')} >
                    Menu
                </button>
                <button className="btn btn-secondary" type="button" onClick={() => navigate('/about')} >
                    About
                </button>
                {userSettings}
                {isBasketBtnVisible &&
                    <button className="btn btn-secondary" type="button" onClick={() => dispatch(switchBasket())} >
                        Basket
                    </button>
                }
            </div>
        </div>
    );
};

