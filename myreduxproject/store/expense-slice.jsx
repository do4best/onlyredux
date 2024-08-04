import {createSlice} from "@reduxjs/toolkit";

export  const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState: {
ExpenseList:[{name:"apple",price:100},{name:"banana",price:100}],
    },
    reducers:{
        addExpenseAction:(currentSlice) => {console.log("This is strange")
        currentSlice.ExpenseList.push({"laptop":5000})}
    }
})

export const {addExpenseAction} = expenseSlice.actions;