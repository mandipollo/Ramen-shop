import React from "react";
import classes from "../Card/card.module.css";

const Card = props => {
	return (
		<div className={`${classes.card} ${props.className}`}>{props.children}</div>
	);
};

export const CardTitle = props => {
	return (
		<div className={`${classes[`card-items`]} ${props.className}`}>
			{props.children}
		</div>
	);
};

export const CardDescription = props => {
	return (
		<div className={`${classes[`card-items`]} ${props.className}`}>
			{props.children}
		</div>
	);
};

export const CardPrice = props => {
	return (
		<div className={`${classes[`card-items`]} ${props.className}`}>
			{props.children}
		</div>
	);
};

export default Card;
