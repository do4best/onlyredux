import {createSlice} from "@reduxjs/toolkit";

export  const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState: {
        income:1000,
ExpenseList:[],
    },
    reducers:{
        addExpenseAction:(currentSlice,action) => {console.log(action)
        currentSlice.ExpenseList.push(action.payload);}
    ,
    setIncomeAction:(currentSlice,action) => {console.log(action)
        currentSlice.income=action.payload;}
},
})

export const {addExpenseAction,setIncomeAction} = expenseSlice.actions;