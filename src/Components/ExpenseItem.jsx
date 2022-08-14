import React from "react";
import './expense_item.css'

const ExpenseItem = (props) => {
	const month = props.date.toLocaleString("en-us", { month: "long" });
	const year = props.date.getFullYear();
	const day = props.date.toLocaleString("en-us", { day: "2-digit" });
	return (
		<div className="expense-item">
			<div className="expense-item_date">
				<p> {month} -</p>
				<p> {year} -</p>
				<p> {day} </p>
			</div>
			<div className="expense-item_description">
				<h2>{props.Title}</h2>
				<div className="expense-item_price">
					<h2>{props.Amount}</h2>
				</div>
			</div>
		</div>
	);
};

export default ExpenseItem;
console.log("ExpensItem");
