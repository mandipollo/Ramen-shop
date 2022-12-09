import React from "react";
import classes from "../Content/menu.module.css";
import { loremIpsum } from "react-lorem-ipsum";

//import custom components
import Card, { CardTitle, CardDescription, CardPrice } from "../Card/Card";
import CardAdd from "../Card/CardAdd";
import Button from "../../Ui/Button";
import Input from "../../Ui/Input";

const Menu = props => {
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
					<Button>+</Button>
					<Input></Input>
					<Button>-</Button>
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
					<Button>+</Button>
					<Input></Input>
					<Button>-</Button>
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
					<Button>+</Button>
					<Input></Input>
					<Button>-</Button>
				</CardAdd>
			</Card>
		</div>
	);
};

export default Menu;
