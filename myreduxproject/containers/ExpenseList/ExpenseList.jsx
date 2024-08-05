import React from 'react';
import {useSelector} from "react-redux";
import {store} from "../../store/index.js";
import {List} from "../../List/List.jsx";

function ExpenseList(props) {
    const expanseList = useSelector((store)=>store.EXPENSE.ExpenseList);

    return <List items={expanseList}/>
}

export default ExpenseList;