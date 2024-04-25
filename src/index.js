import { createElement } from "./utility.js";
import { Home } from "./modules/home.js";
import { About } from "./modules/about.js";
import "./style.css";

const PageRouter = function() {
	const content = document.querySelector("#content");
	const body = document.querySelector("body");
	const pages = {
		"Home": () => Home(content),
		"About": () => About(content)
	}


	function loadLanding() {
		document.addEventListener("DOMContentLoaded", () => {
			loadTabSwitching();
			Home(content);
			footer();
		});
	}

	function switchPage(pageName) {
		wipePage();
		pages[pageName]()
	}

	function wipePage() {
		content.removeChild(content.firstChild);
	}

	function loadTabSwitching() {
		const navButtons = document.querySelectorAll("nav > button");
		navButtons.forEach((btn) => {
			btn.addEventListener("mousedown", (clickEvent) =>{
				switchPage(clickEvent.target.textContent)
			})
		})
	}

	const footer = () =>
	createElement({
		type: "footer",
		text: "Restaurant page project by @tacticalParmesan | Odin Project 2024",
		parent: body,
	});

	return {loadLanding, wipePage}
}();

PageRouter.loadLanding()
