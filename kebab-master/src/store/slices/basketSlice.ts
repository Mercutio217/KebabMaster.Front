import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import MenuItem from "../../pages/Menu/MenuItem";
import OrderItem from "../../models/dtos/OrderItem";

const init: any = {};

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
      value: init,
      count: 0,
      isBasketVisible: false
    },
    reducers: {
      addItem: (state, { payload }: PayloadAction<MenuItem>) => {
        const prev = state.value[payload.id];
        if(prev != null) {
            state.value[payload.id] = {quantity: ++prev.quantity, menuItemId: payload.id } as OrderItem ;
        } else {
          state.value[payload.id] = {quantity: 1, menuItemId: payload.id} as OrderItem ;
        }
        state.count++;

      }
      ,
      removeItem: (state, { payload } : PayloadAction<string>) => {
        const prev = state.value[payload];
        if(prev != null) {
          if(prev.quantity > 1) {
            state.value[payload] = { quantity: --prev.quantity, menuItemId: prev.menuItemId } as OrderItem;
        } 
        delete state.value[payload];

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