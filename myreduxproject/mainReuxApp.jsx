
import s from "../style.module.css";
import {ExpenseInput} from "./ExpenseInput/ExpenseInput.jsx";
import {List} from "./List/List.jsx";
import ExpenseList from "./containers/ExpenseList/ExpenseList.jsx";
import {IncomeInput} from "./IncomeInput/IncomeInput.jsx";
import {ExpenseTotal} from "./ExpenseTotal/ExpenseTotal.jsx";
import {Logo} from "./Logo/Logo.jsx";
function MainReuxApp() {
    return (
        <>
            <div className={s.main_container}>
                <div className={`row ${s.header}`}>
                    <div className={`col-3`}>
                        <Logo title={"Spending the Amount"} subtitle={"Track your money"}/>
                    </div>
                    <div className={`col-9 ${s.income_input}`}>
                        <IncomeInput/>
                    </div>
                </div>
                <div className={`row ${s.workspace}`}>
                    <div className={`col-12  ${s.expense_input}`}>
                       <ExpenseInput/>
                    </div>
                    <div className={`col-11 col-md-6 col-lg-4 ${s.expense_list}`}>
                 <ExpenseList/>
                        <div className={`col-12 ${s.expense_total}`}>
                            <ExpenseTotal/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainReuxApp;