import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import OrderItem from "../../models/dtos/OrderItem";
import MenuItemModel from "../../models/dtos/MenuItemModel";

const init: any = {};

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
      value: init,
      count: 0,
      isBasketVisible: false
    },
    reducers: {
      addItem: (state, { payload }: PayloadAction<MenuItemModel>) => {
        const prev = state.value[payload.id];
        if(prev != null) {
            state.value[payload.id] = {quantity: ++prev.quantity, name: payload.name,menuItemId: payload.id, price: payload.price } as OrderItem ;
        } else {
          state.value[payload.id] = {quantity: 1, name: payload.name, menuItemId: payload.id, price: payload.price} as OrderItem ;
        }
        state.count++;

      },
      removeItem: (state, { payload } : PayloadAction<string>) => {
        const prev = state.value[payload];
        if(prev != null) {
          if(prev.quantity > 1) {
            state.value[payload] = { quantity: --prev.quantity, name: prev.name, menuItemId: prev.menuItemId } as OrderItem;
        } else {
          delete state.value[payload];
        }

        state.count--;
        }
         
      },
      switchBasket:(state) => {
        state.isBasketVisible = !state.isBasketVisible;
      }
    }
  });

export const { addItem, removeItem, switchBasket } = basketSlice.actions;
export { basketSlice };