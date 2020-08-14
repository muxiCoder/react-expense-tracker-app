import React, { useContext } from 'react'
import { Transaction } from './Transaction'
import TransactionItem from '../context/TransactionItem'

export const TransactionHistory = () =>
{
    let [transactions, setTransactions] = useContext(TransactionItem);
    return(
        <div>
            <h3>
                Transaction History
            </h3>
            <ul className="list">
                {transactions.map(transaction =>(
                    <Transaction 
                        id={transaction.id}
                        description={transaction.description} 
                        type={transaction.type} 
                        amount={transaction.amount} 
                    />
                )).reverse()}
            </ul>
        </div>
    )
}