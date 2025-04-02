import React from 'react';

export default function TransactionList({ transactions, onRemove }) {
  return (
    <div className="transaction-list">
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li onClick={() => onRemove(transaction.id)}>
            {transaction.text} - ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}


