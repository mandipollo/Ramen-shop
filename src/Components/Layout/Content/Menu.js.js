import React, { useContext } from "react";
import classes from "../Content/menu.module.css";

//import custom components
import ContextMenu from "../../Context/ContextMenu";
import Card, { CardTitle, CardDescription, CardPrice } from "../Card/Card";
import CardAdd from "../Card/CardAdd";
import CardShow from "../Card/CardShow";
import Button from "../../Ui/Button";

const Menu = props => {
	const { menu1, setMenu1, menu2, setMenu2, menu3, setMenu3, setTotalNu } =
		useContext(ContextMenu);

	const incrementMenu1Handler = props => {
		setMenu1(menu1 + 1);
		setTotalNu(menu1 + menu2 + menu3);
		console.log(`menu1`);
	};

	const decrementMenu1Handler = props => {
		if (menu1 <= 0) return;
		setMenu1(menu1 - 1);
		setTotalNu(menu1 + menu2 + menu3);
	};
	const incrementMenu2Handler = props => {
		setMenu2(menu2 + 1);
		setTotalNu(menu1 + menu2 + menu3);
		console.log(`menu2`);
	};

	const decrementMenu2Handler = props => {
		if (menu2 <= 0) return;
		setMenu2(menu2 - 1);
		setTotalNu(menu1 + menu2 + menu3);
	};

	const incrementMenu3Handler = props => {
		setMenu3(menu3 + 1);
		setTotalNu(menu1 + menu2 + menu3);
		console.log(`menu3`);
	};

	const decrementMenu3Handler = props => {
		if (menu3 <= 0) return;
		setMenu3(menu3 - 1);
		setTotalNu(menu1 + menu2 + menu3);
	};

	return (
		<div className={classes.menu}>
			<Card>
				<CardTitle>Otoko Ramen</CardTitle>
				<CardDescription>
					Ramen (/ˈrɑːmən/) (拉麺, ラーメン or らーめん, rāmen, IPA: [ɾaꜜːmeɴ])
					is a Japanese noodle dish. It consists of Chinese-style wheat noodles
					(or 中華麺, chūkamen) served in a broth; common flavors are soy sauce
					and miso, with typical toppings including sliced pork (chāshū), nori
					(dried seaweed), menma (bamboo shoots), and scallions.
				</CardDescription>
				<CardAdd>
					<CardPrice className={classes[`menu-price`]}>Price: 31£</CardPrice>
					<Button onClick={incrementMenu1Handler}>+</Button>
					<CardShow>{menu1}</CardShow>
					<Button onClick={decrementMenu1Handler}>-</Button>
				</CardAdd>
			</Card>
			<Card>
				<CardTitle>Miso Ramen</CardTitle>
				<CardDescription>
					Miso ramen is a Japanese noodle soup. It is called Miso Ramen because
					its broth is made from miso along with chicken stock, vegetables, and
					ground pork. This kind of ramen soup is thick and rich. The noodles
					should be fresh and are best when springy, chewy, and yellow.
				</CardDescription>
				<CardAdd>
					<CardPrice className={classes[`menu-price`]}>Price: 41£</CardPrice>
					<Button onClick={incrementMenu2Handler}>+</Button>
					<CardShow>{menu2}</CardShow>
					<Button onClick={decrementMenu2Handler}>-</Button>
				</CardAdd>
			</Card>
			<Card>
				<CardTitle>Tusukemen</CardTitle>
				<CardDescription>
					While ramen contains cooked noodles in a bowl of piping hot soup,
					tsukemen noodles are boiled and chilled, then placed in a separate
					bowl from the soup. The cooling process of the noodles is the main
					difference between tsukemen and ramen.
				</CardDescription>
				<CardAdd>
					<CardPrice className={classes[`menu-price`]}>Price: 11£</CardPrice>
					<Button onClick={incrementMenu3Handler}>+</Button>
					<CardShow>{menu3}</CardShow>
					<Button onClick={decrementMenu3Handler}>-</Button>
				</CardAdd>
			</Card>
		</div>
	);
};

export default Menu;
