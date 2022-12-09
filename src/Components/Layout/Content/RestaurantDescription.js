import React from "react";
import { loremIpsum } from "react-lorem-ipsum";

import classes from "../Content/restaurantDescription.module.css";

const RestaurantDescription = props => {
	return <div className={classes.description}>{loremIpsum()}</div>;
};

export default RestaurantDescription;
