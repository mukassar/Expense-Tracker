
import ExpenseItem from "./Components/ExpenseItem";
import LoginForm from "./Components/LoginForm";
import NavBar from "./Components/NavBar";

function App() {
	let expenseDate = new Date(2022, 8, 12);
	let expenseTitle = "Car Expense";
	let expenseAmount = 200;

	return (
		<div className="App">
			<NavBar Home="Home" about="about us" services="Services" contact='Contact Us'></NavBar>
			<ExpenseItem date={expenseDate} Title={expenseTitle} Amount={expenseAmount}/>
			<LoginForm/>
		</div>
	);
}

export default App;
