import React, { useState } from "react";
import Transaction from "./Transaction.jsx";
import Confirmation from "./Confirmation.jsx";
import { useBudgetApp } from "../context/BudgetAppContext.jsx";

export default function TransactionList() {
  const { state, dispatch } = useBudgetApp();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [transactionToDelete, setTransactionToDelete] = useState(null);

  function handleDelete(index) {
    setTransactionToDelete(index);
    setShowConfirmation(true);
  }

  function confirmDelete() {
    dispatch({ type: "DELETE_TRANSACTION", payload: transactionToDelete });
    setShowConfirmation(false);
    setTransactionToDelete(null);
  }

  function cancelDelete() {
    setShowConfirmation(false);
    setTransactionToDelete(null);
  }

  return (
    <>
      <ul id="transaction-list">
        {state.transactions.map((transaction, index) => (
          <Transaction
            key={index}
            reason={transaction.reason}
            sum={transaction.sum}
            onRemove={() => handleDelete(index)}
          />
        ))}
      </ul>
      {showConfirmation && (
        <Confirmation
          message="Are you sure you want to delete this transaction?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </>
  );
}