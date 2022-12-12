import React from "react";
import { useState } from "react";

// import components
import ContextMenu from "./Components/Context/ContextMenu";
import Header from "./Components/Layout/Header/Header";
import RestaurantDescription from "./Components/Layout/Content/RestaurantDescription";
import Menu from "./Components/Layout/Content/Menu.js";

// import css module
import classes from "../src/app.module.css";

const App = props => {
	const [menu1, setMenu1] = useState(0);

	const [menu2, setMenu2] = useState(0);

	const [menu3, setMenu3] = useState(0);

	return (
		<div className={classes.app}>
			<ContextMenu.Provider
				value={{ menu1, setMenu1, menu2, setMenu2, menu3, setMenu3 }}
			>
				<Header />
				<RestaurantDescription />
				<Menu />
			</ContextMenu.Provider>
		</div>
	);
};

export default App;
