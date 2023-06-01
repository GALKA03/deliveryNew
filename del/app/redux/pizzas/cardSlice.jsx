import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  pizzas: [],
    totalPizzas: 0,
  quantity:0,
};

const cardSlice = createSlice({
  name: "pizzaCard",
  initialState,
    reducers: {
        addPizza: (state, action) => {
            state.pizzas.push(action.payload);
            state.quantity += 1;
            state.totalPizzas += action.payload.price * action.payload.quantity
        },
        reset: (state) => {
            state = initialState
        }
  }
});
export const{addPizza, reset}= cardSlice.actions
export default cardSlice.reducer;