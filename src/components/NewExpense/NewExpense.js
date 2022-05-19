import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [count, setCount] = useState(0);
  const fieldEntryHandler = (value) => {
    setCount((clickCount) => {
      return clickCount + 1;
    });
    setCount(value);
  };

  if (count !== 0) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSubmitCheck={fieldEntryHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      </div>
    );
  }

  return (
    <div className="new-expense">
      <button onClick={fieldEntryHandler}>Add Expenses</button>
    </div>
  );
};

export default NewExpense;
