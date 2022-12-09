import React from "react";

// import components
import Header from "./Components/Layout/Header/Header";
import RestaurantDescription from "./Components/Layout/Content/RestaurantDescription";
import Menu from "./Components/Layout/Content/Menu.js";

// import css module
import classes from "../src/app.module.css";

const App = props => {
	return (
		<div className={classes.app}>
			<Header />
			<RestaurantDescription />
			<Menu />
		</div>
	);
};

export default App;
