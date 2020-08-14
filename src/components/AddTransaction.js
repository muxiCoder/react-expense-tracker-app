import React, { useContext, useState } from 'react'
import TransactionItem from '../context/TransactionItem'
import BalanceContext from '../context/BalanceContext'
import IncomeContext from '../context/IncomeContext'
import ExpenseContext from '../context/ExpenseContext'
import DescriptionContext from '../context/DescriptionContext'
import AmountContext from '../context/AmountContext'
import TypeContext from '../context/TypeContext'

export const AddTransaction = () =>
{
    let [balance, setBalance] = useContext(BalanceContext)
    let [income, setIncome] = useContext(IncomeContext)
    let [expense, setExpense] = useContext(ExpenseContext)
    let [transactions, addTransaction] = useContext(TransactionItem)
    let [descriptionValue, setDescriptionValue] = useContext(DescriptionContext)
    let [amountValue, setAmountValue] = useContext(AmountContext)
    let [typeValue, setTypeValue] = useContext(TypeContext)

    const resetFields = () => {
        setDescriptionValue('');
        setAmountValue('');
        setTypeValue('income');
    }
    const AddTransaction = () => {
        if(typeValue == 'income') {
            typeValue = 'plus';
            setIncome(prevIncome => parseInt(prevIncome) + parseInt(amountValue))
            setBalance(prevBalance => parseInt(prevBalance) + parseInt(amountValue)) 
        }
        else {
            typeValue = 'minus';
            setExpense(prevExpense => Math.abs(parseInt(prevExpense) + parseInt(amountValue)))
            setBalance(prevBalance => parseInt(prevBalance) - parseInt(amountValue))  
        }
        addTransaction([ ...transactions, {
            id: transactions.length + 1,
            description: descriptionValue,
            type: typeValue,
            amount: amountValue
        }])
        resetFields();
    }

    return(
        <div>
            <h3>Add New Transaction</h3>
            <div className="form-control">
                <label htmlFor="description">
                    Description
                </label>
                <input  type="text" 
                    id="description"
                    value={descriptionValue}
                    onChange={e => setDescriptionValue(e.target.value)}
                />
            </div>
            <div className="form-control" className="transactionAmountDiv">
                <label htmlFor="transactionamount">
                    Transaction Amount
                </label>
                <input  type="number" 
                    id="transactionamount"
                    value={amountValue}
                    onChange={e => {setAmountValue(e.target.value)}}
                />
            </div>
            <div className="form-control" className="transactionTypeDiv">
                <label htmlFor="transactionType">
                    Transaction Type
                </label>
                <select id="transactionType" value={typeValue} onChange={e => setTypeValue(e.target.value)}>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </div>
            <button className="btn_active btn-active-add-width" onClick={AddTransaction}>Add Transaction</button>
        </div>
    );
}