import React from "react";

import "./App.css";
import NavigationComponent from "./Components/NavigationComponent";
import HomePage from "./Components/HomePage";
import CategoryComponent from "./Components/CategoryComponent";
import { Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Logout from "./Components/Logout";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<NavigationComponent  />
			</header>
		</div>
	);
}

export default App;
