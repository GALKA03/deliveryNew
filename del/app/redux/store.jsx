import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./pizzas/cardSlice"

export default configureStore({
    reducer: {
        pizzaCard: cardReducer
    }
})