import { useBudgetApp } from "../context/BudgetAppContext.jsx";

export default function Transaction({ reason, sum, category, onRemove }) {
  const { state } = useBudgetApp();

  return (
    <li className={`${sum > 0 ? 'income' : 'expense'} ${state.theme}`}>
      <span>{reason}</span>
      <span>{sum} {state.currency}</span>
      <span>{category}</span>
      <button onClick={onRemove}>Poista</button>
    </li>
  );
}