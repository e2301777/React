import { createPortal } from "react-dom";
import { useBudgetApp } from "../context/BudgetAppContext.jsx";

export default function Confirmation({ message, onConfirm, onCancel }) {
  const { state } = useBudgetApp();

  return createPortal(
    <div className="confirmation-overlay">
      <div className={`confirmation ${state.theme}`}>
        <p>{message}</p>
        <div className="confirmation-buttons">
          <button onClick={onConfirm}>Confirm</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>,
    document.getElementById("confirmation-root")
  );
}
