import { Address } from "./Address";
import OrderItem from "./OrderItem";

export interface Order {
    id: string;
    email: string;
    dateCreated: string;
    userId: string | null;
    address: Address;
    orderItems: OrderItem[];
}