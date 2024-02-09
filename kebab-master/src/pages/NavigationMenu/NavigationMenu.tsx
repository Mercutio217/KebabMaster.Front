import { FC, useState } from "react";
import './NavigationMenu.css'
import { useLocation, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useAppDispatch } from "../../hooks";
import { switchBasket } from "../../store/slices/basketSlice";

export const NavigationMenu: FC = () => {
    const navigate = useNavigate();
    const token = useSelector((st: RootState) => st.userData.token);
    const isBasketBtnVisible = useSelector((st: RootState) => st.basket.count) > 0;
    const dispatch = useAppDispatch();

    const userSettings = token != '' ?
        <button className="btn btn-secondary" type="button" onClick={() => navigate('/userData')}>
            User Settings
        </button> :
        <button className="btn btn-secondary" type="button" onClick={() => navigate('/login')}>
            Login
        </button>;

    return (
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
    );
};

