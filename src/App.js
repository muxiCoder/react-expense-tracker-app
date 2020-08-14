import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { AccountSummary } from './components/AccountSummary'
import { TransactionHistory } from './components/TransactionHistory'
import { AddTransaction } from './components/AddTransaction'
import TransactionItem from './context/TransactionItem'
import BalanceContext from './context/BalanceContext'
import IncomeContext from './context/IncomeContext'
import ExpenseContext from './context/ExpenseContext'
import DescriptionContext from './context/DescriptionContext'
import AmountContext from './context/AmountContext';
import TypeContext from './context/TypeContext';

function App() {
  let transactionItems = []
  const items = useState(transactionItems);
  const balance = useState('0.00');
  const income = useState('0.00');
  const expense = useState('0.00');
  const description = useState('');
  const amount = useState('');
  const type = useState('income');

  return (
    <TransactionItem.Provider value={items}>
      <BalanceContext.Provider value={balance}>
        <div className="App">
          <Header />
          <div className="container">
            <IncomeContext.Provider value={income}>
              <ExpenseContext.Provider value={expense}>
                <DescriptionContext.Provider value={description}>
                  <AmountContext.Provider value={amount}>
                    <TypeContext.Provider value={type}>
                      <Balance />
                      <AccountSummary />
                      <TransactionHistory />
                      <AddTransaction />
                    </TypeContext.Provider>
                  </AmountContext.Provider>
                </DescriptionContext.Provider>
              </ExpenseContext.Provider>
            </IncomeContext.Provider>
          </div>
        </div>
      </BalanceContext.Provider>
    </TransactionItem.Provider>
  );
}

export default App;
