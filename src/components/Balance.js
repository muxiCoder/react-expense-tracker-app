import React, { useContext } from 'react'
import BalanceContext from '../context/BalanceContext';

export const Balance = () =>
{
    let balance = useContext(BalanceContext)
    return(
        <div>
            <h4>Current Balance</h4>
            <h1 id="balance">Rs. {balance}</h1>
        </div>
    );
}