import React from 'react'

export const AddTransaction = () =>
{
    return(
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input  type="text" 
                            id="description"
                    />
                </div>
                <div className="form-control" className="transactionAmountDiv">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input  type="number" 
                            id="transactionamount"
                    />
                </div>
                <div className="form-control" className="transactionTypeDiv">
                    <label htmlFor="transactionType">
                        Transaction Type
                    </label>
                    <select id="transactionamount">
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    );
}