import React from "react";
import { useBudgetApp } from "../context/BudgetAppContext.jsx";

export default function Header() {
  const { state } = useBudgetApp();

  return (
    <header>
      <h1>Budget Tracker</h1>
      <h2>Saldo: {state.balance} {state.currency}</h2>
    </header>
  );
}