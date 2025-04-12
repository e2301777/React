import { useEffect } from "react";
import { useState } from "react";
import { BudgetAppProvider, useBudgetApp } from "./context/BudgetAppContext.jsx";
import Header from "./components/Header.jsx";
import TransactionForm from "./components/TransactionForm.jsx";
import TransactionList from "./components/TransactionList.jsx";
import Settings from "./components/Settings.jsx";

import "./App.css";
import "./index.css";

function AppContent() {
  const { state } = useBudgetApp();
  const [showSettings, setShowSettings] = useState(false);

  // Apply the theme class to the body
  useEffect(() => {
    document.body.className = state.theme; // Set the theme class on the body
  }, [state.theme]);

  return (
    <div className={`container ${state.theme}`}>
      <Header />
      <TransactionForm />
      <TransactionList />
      <button onClick={() => setShowSettings(true)}>Settings</button>
      {showSettings && <Settings onClose={() => setShowSettings(false)} />}
    </div>
  );
}

function App() {
  return (
    <BudgetAppProvider>
      <AppContent />
    </BudgetAppProvider>
  );
}

export default App;
