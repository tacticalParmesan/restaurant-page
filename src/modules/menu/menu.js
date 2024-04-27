import { createElement } from "../../utility.js";
import { Carousel } from "../../components/carousel.js";
import { Card } from "../../components/card.js";
import "./menu.css";

export function Menu(content) {
	const menuPage = createElement({ classes: ["menu-page"], parent: content });

	const menuTitle = createElement({
		type: "h2",
		classes: ["menu-title"],
		text: "Menu",
		parent: menuPage,
	});

	const foodTitle = createElement({
		type: "h2",
		classes: ["food-menu", "info-title"],
		text: "Food selection",
		parent: menuPage,
	});
	const foodCarousel = Carousel(menuPage, "menu", () =>
		console.log("Data loaded"), 830
	);

	const drinksTitle = createElement({
		type: "h2",
		classes: ["drinks-menu", "info-title"],
		text: "Drinks selection",
		parent: menuPage,
	});
	const drinksCarousel = Carousel(menuPage, "menu", () =>
		console.log("Data loaded"), 830
	);

	const gamesTitle = createElement({
		type: "h2",
		classes: ["games-menu", "info-title"],
		text: "Games selection",
		parent: menuPage,
	});

	const gamesCarousel = Carousel(menuPage, "menu", () =>
		console.log("Data loaded"), 830
	);

	for (let i = 0; i < 10; i++) {
		Card(
			foodCarousel,
			"https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"Mario Burger",
			"Italian Cheese, fine ground beef and salty bacon will make you jump on a thousand turtles!",
			"9£"
		);
	}

	for (let i = 0; i < 10; i++) {
		Card(
			drinksCarousel,
			"https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"Mario Burger",
			"Italian Cheese, fine ground beef and salty bacon will make you jump on a thousand turtles!",
			"9£"
		);
	}

	for (let i = 0; i < 10; i++) {
		Card(
			gamesCarousel,
			"https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			"Mario Burger",
			"Italian Cheese, fine ground beef and salty bacon will make you jump on a thousand turtles!",
			"9£"
		);
	}
}
