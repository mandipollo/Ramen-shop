import React from "react";
import classes from "./cardPrice.module.css";

const CardAdd = props => {
	return <div className={classes.cardAdd}>{props.children}</div>;
};

export default CardAdd;
