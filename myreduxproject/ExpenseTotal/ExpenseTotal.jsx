import s from "./style.module.css";
import {useSelector} from "react-redux";

export function ExpenseTotal(props) {
    const income = useSelector(state => state.EXPENSE.income);
    const ExpenseList = useSelector((store)=>store.EXPENSE.ExpenseList);
    const totalExpanditure = ExpenseList.reduce((acc, cur) => {
        return Number.parseFloat(acc) + Number.parseFloat(cur.price);
    },0)
    const remaining = income - totalExpanditure
  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>{totalExpanditure} $</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{remaining} $</div>
      </div>
    </div>
  );
}
