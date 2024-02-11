import MenuItemModel from "./MenuItemModel";

export default interface OrderItem {
    menuItemId:string;
    name:string;
    price:number;
    quantity:number;
    menuItem: MenuItemModel;
}