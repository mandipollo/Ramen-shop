import React from "react";

import classes from "../Header/header.module.css";
import Button from "../../Ui/Button";

const Header = props => {
	return (
		// <div className={classes.header}>
		// 	<Button className={classes.link}>MENU</Button>
		// 	<Button className={classes.link}>LOCATION</Button>
		// 	<Button className={classes.link}>BLOG</Button>
		// 	<Button className={classes.link}>ABOUT</Button>
		// 	<Button className={classes.highlight}>ORDER ONLINE</Button>
		// </div>

		<div className={classes.header}>
			<button className={classes.link}>MENU</button>
			<button className={classes.link}>LOCATION</button>
			<button className={classes.link}>BLOG</button>
			<button className={classes.link}>ABOUT</button>
			<button className={classes.highlight}>ORDER ONLINE</button>
		</div>
	);
};

export default Header;
