import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext"
import { Expense } from "../../types/types";
import { isNewExpression } from "typescript";

const AddExpenseForm = () => {
  // Exercise: Consume the AppContext here
    const {expenses, setExpenses} = useContext(AppContext)

  // Exercise: Create name and cost to state variables
    const [name, setName] = useState<string>("");
    const [cost, setCost] = useState<string>("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Exercise: Add add new expense to expenses context array
    const newCost = parseInt(cost)

    const newExpense : Expense = {
      id : String(expenses.length) as string,
      name : name as string,
      cost : newCost
    }
    setExpenses(expenses => [...expenses, newExpense])
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required
            placeholder = "input a name"
            type="text"
            className="form-control"
            id="name"
            data-testid = "name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            // HINT: onChange={}
          ></input>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            required
            placeholder = "input a cost"
            type="number"
            className="form-control"
            id="cost"
            data-testid = "cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            // HINT: onChange={}
          ></input>
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
