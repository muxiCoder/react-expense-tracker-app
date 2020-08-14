import React, { useContext } from 'react'
import IncomeContext from '../context/IncomeContext'
import ExpenseContext from '../context/ExpenseContext'

export const AccountSummary = () =>
{
    const income = useContext(IncomeContext)
    const expense =  useContext(ExpenseContext)
    return(
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">
                    Rs. {income}
                </p>
            </div>
            <div>
                <h4>Expense</h4> 
                <p className="money minus">
                    Rs. {expense}
                </p>
            </div>
        </div>
    );
}