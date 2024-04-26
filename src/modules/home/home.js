import { createElement } from "../../utility.js";
import { PageRouter } from "../../index.js";
import "./home.css";

const homeData = (function () {
	const welcomeText =
		"Welcome to RetroBar, where nostalgia meets nightlife in a symphony of pixels and pixels. Nestled in the heart of the city, RetroBar offers a unique experience marrying classic arcade gaming with a vibrant bar atmosphere. Step into a world where Pac-Man chomps alongside your cocktails and Space Invaders provide the backdrop to your night out.";

	const reviews = {
		reviewOne: {
			customer: "Adam",
			reviewText:
				"Had a blast at RetroBar! The selection of arcade games is amazing, brought back so many memories. Spent hours playing classics like Pac-Man and Mario. Can't wait to come back and beat my high score!",
		},
		reviewTwo: {
			customer: "Daisuke",
			reviewText:
				"RetroBar serves up some seriously delicious themed drinks! The Sonic Spritz was a refreshing hit, and the Pikachu Punch packed a real electrifying punch. Perfect way to level up your night out!",
		},
		reviewThree: {
			customer: "Aurora",
			reviewText:
				"Forget bar snacks, RetroBar's food is next level! The burgers were juicy, the fries crispy, and don't even get me started on the loaded nachos. A tasty fuel for all those intense gaming sessions!",
		},
		reviewFour: {
			customer: "Liam",
			reviewText:
				"Located right in the heart of the city, RetroBar is so convenient! Easy to find and perfect for meeting up with friends. Plus, being central means you can explore more of the city after your gaming fix!",
		},
		reviewFive: {
			customer: "Tyron",
			reviewText:
				"Stepping into RetroBar feels like a trip back in time! The retro decor and cozy atmosphere create the perfect ambiance for gaming nostalgia. It's like being transported to the '80s, but with better drinks!",
		},
		reviewSix: {
			customer: "Bethany",
			reviewText:
				"Huge shoutout to the staff at RetroBar! Their passion and expertise for retro games are unmatched. From recommending the best games to offering tips and tricks, they truly enhance the gaming experience. Top-notch service with a smile!",
		},
	};

	return { welcomeText, reviews };
})();

export function Home(content) {
	const homePage = createElement({ classes: ["home-page"], parent: content });

	const upperHome = createElement({
		classes: ["upper-part"],
		parent: homePage,
	});

	const textPanel = createElement({
		classes: ["home-text-panel"],
		parent: upperHome,
	});

	createElement({
		type: "h2",
		classes: ["welcome-msg"],
		text: "Welcome to the RetroBar, \n where nostalgia and good drinks meet!",
		parent: textPanel,
	});

	createElement({
		type: "p",
		classes: ["welcome-text"],
		text: homeData.welcomeText,
		parent: textPanel,
	});

	createElement({
		type: "img",
		classes: ["home-img"],
		src: "https://images.unsplash.com/photo-1523843268911-45a882919fec?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		parent: upperHome,
	});

	const btnsContainer = createElement({
		classes: ["buttons-container"],
		parent: textPanel,
	});

	createElement({
		type: "button",
		classes: ["home-menu-btn", "home-btn"],
		text: "Browse menu",
		parent: btnsContainer,
	});

	createElement({
		type: "button",
		classes: ["home-book-btn", "home-btn"],
		text: "Make a reservation",
		parent: btnsContainer,
	});

	createCarousel(homePage);
	loadButtonsFunctionality();
}

function createCarousel(page) {
	const carouselCtn = createElement({
		classes: ["container"],
		parent: page,
	});

	const carouselView = createElement({
		classes: ["carousel-view"],
		parent: carouselCtn,
	});

	const previousBtn = createElement({
		type: "button",
		id: "prev-btn",
		text: "◀",
		parent: carouselView,
	});

	const itemList = createElement({
		classes: ["item-list"],
		parent: carouselView,
	});

	const nextBtn = createElement({
		type: "button",
		id: "next-btn",
		text: "▶",
		parent: carouselView,
	});

	ReviewsCarousel();
}

const ReviewsCarousel = function () {
	const prevBtn = document.querySelector("#prev-btn");
	const nextBtn = document.querySelector("#next-btn");
	const itemList = document.querySelector(".item-list");

	const itemWidth = 600;
	const padding = 16;
	const scrollValue = itemWidth + padding;

	prevBtn.addEventListener("mousedown", () => {
		itemList.scrollLeft -= scrollValue;
	});

	nextBtn.addEventListener("mousedown", () => {
		itemList.scrollLeft += scrollValue;
	});

	for (let r in homeData.reviews) {
		const review = homeData.reviews[r];
		createElement({
			classes: ["item-card"],
			text: "✪✪✪✪✪ " + review.reviewText + "     " + "- " + review.customer,
			parent: itemList,
		});
	}
};

function loadButtonsFunctionality() {
	const homeMenuButton = document.querySelector(".home-menu-btn");
	homeMenuButton.addEventListener("mousedown", () =>
		PageRouter.switchPage("Menu")
	);

	const homeBookButton = document.querySelector(".home-book-btn");
	homeBookButton.addEventListener("mousedown", () =>
		PageRouter.switchPage("Contact")
	);
}
