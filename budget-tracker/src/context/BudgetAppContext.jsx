import React, { createContext, useReducer, useContext } from "react";

// Initial state
const initialState = {
  balance: 50,
  transactions: [],
  theme: "light", // Default theme
  currency: "€",  // Default currency
  categories: ["salary", "food", "gasoline", "candies", "electricity"], // Add categories
};

// Reducer function
function budgetReducer(state, action) {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        balance: state.balance + action.payload.sum,
        transactions: [action.payload, ...state.transactions],
      };
    case "DELETE_TRANSACTION":
      const transactionToDelete = state.transactions[action.payload];
      return {
        ...state,
        balance: state.balance - transactionToDelete.sum,
        transactions: state.transactions.filter((_, index) => index !== action.payload),
      };
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case "CHANGE_CURRENCY":
      return {
        ...state,
        currency: action.payload,
      };
    default:
      return state;
  }
}

// Create context
const BudgetAppContext = createContext();

// Context provider component
export function BudgetAppProvider({ children }) {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  return (
    <BudgetAppContext.Provider value={{ state, dispatch }}>
      {children}
    </BudgetAppContext.Provider>
  );
}

// Custom hook to use the BudgetAppContext
export function useBudgetApp() {
  return useContext(BudgetAppContext);
}