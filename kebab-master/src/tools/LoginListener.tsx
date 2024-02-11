import { useEffect } from "react";
import { useLocation } from "react-router";
import { useAppDispatch, useAppSelector } from "../hooks";
import TokenResponse from "../http/models/TokenResponse";
import { login, logout } from "../store/slices/userDataslice";

const LoginListener = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();

    useEffect(() => {        
        const storageValue = localStorage.getItem("userData"); 
        if(storageValue != null) {
            const parsed = JSON.parse(storageValue) as TokenResponse;

            if(new Date(parsed.expiresAt) < new Date()) {
                localStorage.removeItem("userData");
            } else {
                dispatch(login(parsed))
            }
        }
    }, [location]);

    return null;
}

export default LoginListener;