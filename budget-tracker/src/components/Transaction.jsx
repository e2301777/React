import { useBudgetApp } from "../context/BudgetAppContext.jsx";

export default function Transaction({ reason, sum, onRemove }) {
  const { state } = useBudgetApp();

  return (
    <li className={`${sum > 0 ? 'income' : 'expense'} ${state.theme}`}>
      {reason} {sum}
      <button onClick={onRemove}>Poista</button>
    </li>
  );
}