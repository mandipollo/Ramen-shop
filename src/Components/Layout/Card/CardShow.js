import React from "react";

import classes from "./cardShow.module.css";

const CardShow = props => {
	return <div className={classes.quantity}>{props.children}</div>;
};

export default CardShow;
