import { Address } from "../../models/dtos/Address";
import OrderItem from "../../models/dtos/OrderItem";

export default interface OrderRequest {
    email: string;
    address: Address;
    orderItems: OrderItem[];
}