import React from "react";
import "./navbar.css";

const NavBar = (props) => {
	return (
		<div className="navbar">
            
			<ol className="navbar-item">
            <h2>Expense Tracker</h2>
				<li>{props.Home}</li>
				<li>{props.about}</li>
				<li>{props.services}</li>
				<li>{props.contact}</li>
			</ol>
		</div>
	);
};

export default NavBar;
