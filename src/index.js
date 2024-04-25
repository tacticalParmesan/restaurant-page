import { createElement } from "./utility.js";
import { Home } from "./modules/home.js";
import { About } from "./modules/about.js";
import "./style.css";

const content = document.querySelector("#content");
const body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", () => {
	About(content);
	footer();
});

const footer = () =>
	createElement({
		type: "footer",
		text: "Restaurant page project by @tacticalParmesan | Odin Project 2024",
		parent: body,
	});
