import { useState, useRef, useEffect } from "react";
import { useBudgetApp } from "../context/BudgetAppContext.jsx";

export default function TransactionForm() {
  const { state, dispatch } = useBudgetApp();
  const [inputs, setInputs] = useState({ reason: "", sum: 0, category: "salary" });
  const descriptionRef = useRef(null); // Ref for the description input

  // Auto-focus on the description input when the form appears
  useEffect(() => {
    descriptionRef.current.focus();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const sum = parseFloat(inputs.sum);
    const newTransaction = { reason: inputs.reason, sum, category: inputs.category };
    dispatch({ type: "ADD_TRANSACTION", payload: newTransaction });
    setInputs({ reason: "", sum: 0, category: "salary" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        name="reason"
        value={inputs.reason}
        onChange={handleChange}
        placeholder="Enter description..."
        ref={descriptionRef} // Attach the ref to the input
      />
      <label htmlFor="sum">Amount:</label>
      <input
        type="number"
        name="sum"
        value={inputs.sum}
        onChange={handleChange}
        placeholder="Enter amount..."
      />
      <label htmlFor="category">Category:</label>
      <select
        name="category"
        value={inputs.category}
        onChange={handleChange}
      >
        {state.categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button>Add Transaction</button>
    </form>
  );
}

