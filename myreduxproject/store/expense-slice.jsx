import {createSlice} from "@reduxjs/toolkit";

export  const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState: {
ExpenseList:[{name:"apple",price:100},{name:"banana",price:100}],
    },
    reducers:{
        addExpenseAction:(currentSlice,action) => {console.log(action)
        currentSlice.ExpenseList.push(action.payload);}
    }
})

export const {addExpenseAction} = expenseSlice.actions;