import React from "react";

import classes from "../Ui/button.module.css";

const Button = props => {
	return (
		<button className={`${classes.button} ${props.className}`}>
			{props.children}
		</button>
	);
};

export default Button;
