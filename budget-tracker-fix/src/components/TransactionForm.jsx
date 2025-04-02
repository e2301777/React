import React, { useState } from 'react';

export default function TransactionForm({ onAdd }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    const transaction = {
      id: Math.random(),
      text: text,
      amount: amount
    };
    onAdd(transaction);
    setText("");
    setAmount("");
  };

  return (
    <form className="transaction-form">
      <div>
        <label>Text</label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div>
        <label>Amount</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <button type="submit" onClick={handleSubmit}>Add Transaction</button>
    </form>
  );
}

