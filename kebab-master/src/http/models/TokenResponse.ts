import UserData from "./UserData";

export default interface TokenResponse {
    token:string;
    expiresAt:string;
    roles: string[];
    userData:UserData;
}