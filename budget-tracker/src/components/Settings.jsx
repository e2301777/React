import { createPortal } from "react-dom";
import { useBudgetApp } from "../context/BudgetAppContext.jsx";

export default function Settings({ onClose }) {
  const { state, dispatch } = useBudgetApp();

  function toggleTheme() {
    dispatch({ type: "TOGGLE_THEME" });
  }

  function changeCurrency(e) {
    dispatch({ type: "CHANGE_CURRENCY", payload: e.target.value });
  }

  return createPortal(
    <div className="settings-overlay">
      <div className={`settings ${state.theme}`}>
        <h2>Settings</h2>
        <div className="setting">
          <h3>Currency</h3>
          <select value={state.currency} onChange={changeCurrency}>
            <option value="€">Euro (€)</option>
            <option value="$">Dollar ($)</option>
            <option value="£">Pound (£)</option>
          </select>
        </div>
        <div className="setting">
          <h3>Theme</h3>
          <button onClick={toggleTheme}>
            {state.theme === "light" ? "Switch to Dark" : "Switch to Light"}
          </button>
        </div>
        <div className="settings-buttons">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>,
    document.getElementById("settings-root")
  );
}