import React from 'react'
import { Transaction } from './Transaction'

export const TransactionHistory = () =>
{
    return(
        <div>
            <h3>
                Transaction History
            </h3>
            <ul className="list">
                <Transaction transactionType="plus" />
                <Transaction transactionType="minus" />
            </ul>
        </div>
    );
}