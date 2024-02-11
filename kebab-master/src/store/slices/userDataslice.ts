import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import TokenResponse from "../../http/models/TokenResponse";
import UserData from "../../http/models/UserData";

const initRoles:string[] = [];
const initUserData:UserData = {
    id: "",
    email: "",
    userName: "",
    name: "",
    surname: ""
};
const initState = {
    token: '',
    expiresAt: '',
    roles:initRoles,
    userData: initUserData
};
const userDataSlice = createSlice({
    name: 'userDataSlice',
    initialState: initState,
    reducers: {
      login: (state, { payload }: PayloadAction<TokenResponse>) => state = {...payload},
      logout: (state) => state = initState,
  }});

export const { login, logout } = userDataSlice.actions; 
export default userDataSlice;
