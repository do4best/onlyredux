import { configureStore } from "@reduxjs/toolkit"
import {expenseSlice} from "./expense-slice.jsx";

const store = configureStore({
    reducer: {
EXPENSE:expenseSlice.reducer
    }
})

export { store }