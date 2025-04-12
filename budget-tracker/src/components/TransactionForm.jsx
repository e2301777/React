import { useState } from "react";
import { useBudgetApp } from "../context/BudgetAppContext.jsx";

export default function TransactionForm() {
  const { dispatch } = useBudgetApp();
  const [inputs, setInputs] = useState({ reason: "", sum: 0 });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const sum = parseFloat(inputs.sum);
    const newTransaction = { reason: inputs.reason, sum };
    dispatch({ type: "ADD_TRANSACTION", payload: newTransaction });
    setInputs({ reason: "", sum: 0 });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        name="reason"
        value={inputs.reason}
        onChange={handleChange}
        placeholder="Reason"
      />
      <label htmlFor="sum">Sum:</label>
      <input
        type="text"
        name="sum"
        value={inputs.sum}
        onChange={handleChange}
        placeholder="Sum"
      />
      <button>Add Transaction</button>
    </form>
  );
}

