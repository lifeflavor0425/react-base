import React from "react";
import "./ExpenseItem.css";
import { MdEdit, MdDelete } from "react-icons/md";

const ExpenseItem = ({ expense, handelDelete }) => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{expense.charge}</span>
        <span className="amount"> {expense.amount}</span>
      </div>
      <div>
        <button className="edit-btn">
          <MdEdit />
        </button>
        <button
          className="clear-btn"
          onClick={() => {
            handelDelete(expense.id);
          }}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
