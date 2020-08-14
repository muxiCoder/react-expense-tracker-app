import React, { useContext } from 'react'
import TransactionItem from '../context/TransactionItem'
import BalanceContext from '../context/BalanceContext'
import IncomeContext from '../context/IncomeContext'
import ExpenseContext from '../context/ExpenseContext'
import DescriptionContext from '../context/DescriptionContext'
import AmountContext from '../context/AmountContext'
import TypeContext from '../context/TypeContext'

export const Transaction = (props) =>
{
    let [transactions, setTransactions] = useContext(TransactionItem)
    let [balance, setBalance] = useContext(BalanceContext)
    let [income, setIncome] = useContext(IncomeContext)
    let [expense, setExpense] = useContext(ExpenseContext)
    let [descriptionValue, setDescriptionValue] = useContext(DescriptionContext)
    let [amountValue, setAmountValue] = useContext(AmountContext)
    let [typeValue, setTypeValue] = useContext(TypeContext)

    const delTransaction = (id) => {
        console.log(transactions);
        for(var i=0; i < transactions.length; i++) {
            if(transactions[i].id === id) {
                let amount = transactions[i].amount;
                if(transactions[i].type === 'plus') {
                    setBalance(prevBalance => parseInt(prevBalance) - parseInt(amount))
                    setIncome(prevIncome => parseInt(prevIncome) - parseInt(amount))
                }
                else {
                    setBalance(prevBalance => parseInt(prevBalance) + parseInt(amount))
                    setExpense(prevExpense => parseInt(prevExpense) - parseInt(amount))
                }
            }
        }
        const items = transactions.filter(transaction => transaction.id !== id)
        setTransactions(items); 
    }

    // const editTransaction = (id) => {
    //     for(var i=0; i < transactions.length; i++) {
    //         if(transactions[i].id === id) {
    //             setDescriptionValue(transactions[i].description)
    //             setAmountValue(transactions[i].amount)
    //             setTypeValue((transactions[i].type == "plus") ? "income" : "expense");
    //         }
    //     }
    // } 

    return(
    <li className={props.type}>
        {props.description} 
        <span>PKR {props.amount}</span>
        {/* <button className="edit-btn" onClick={() => editTransaction(props.id)}><i class="fa fa-pencil"></i></button> */}
        <button className="delete-btn" onClick={() => delTransaction(props.id)}><i class="fa fa-remove"></i></button>
    </li>
    );
}