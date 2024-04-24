import { createElement } from "../utility.js";
import "./home.css"

export function Home(body, content) {
	const homePage = createElement({ classes: ["home-page"], parent: content });
	const textPanel = createElement({
		classes: ["home-text-panel"],
		parent: homePage,
	});
	const welcomeText =
		"Welcome to RetroBar, where nostalgia meets nightlife in a symphony of pixels and pixels. Nestled in the heart of the city, RetroBar offers a unique experience marrying classic arcade gaming with a vibrant bar atmosphere. Step into a world where Pac-Man chomps alongside your cocktails and Space Invaders provide the backdrop to your night out.";
	
        createElement({
		type: "h2",
		classes: ["welcome-msg"],
		text: "Welcome to the RetroBar, \n where nostalgia and good drinks meet!",
		parent: textPanel,
	});

	createElement({
		type: "p",
		classes: ["welcome-text"],
		text: welcomeText,
		parent: textPanel,
	});

	createElement({
		type: "img",
		classes: ["home-img"],
		src: "https://images.unsplash.com/photo-1523843268911-45a882919fec?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		parent: homePage,
	});

    const btnsContainer = createElement({
        classes: ["buttons-container"],
        parent: textPanel
    })

    createElement({
        type: "button",
        classes: ["home-menu-btn", "home-btn"],
        text: "Browse menu",
        parent: btnsContainer
    })

    createElement({
        type: "button",
        classes: ["home-menu-btn", "home-btn"],
        text: "Make a reservation",
        parent: btnsContainer
    })

    createCarousel(body);
}

function createCarousel(body) {
    const carouselCtn = createElement({
        classes: ["container"],
        parent: body
    })

    const carouselView = createElement({
        classes: ["carousel-view"],
        parent: carouselCtn
    })

    const previousBtn = createElement({
        type: "button",
        id: "prev-btn",
        text: "<",
        parent: carouselView 
    })

    const itemList = createElement({
        classes: ["item-list"],
        parent: carouselView
    })

    for (let i = 0; i < 5; i++) {
        createElement({
            classes: ["item-card"],
            text: "Review n." + i,
            parent: itemList
        })
    }

    const nextBtn = createElement({
        type: "button",
        id: "next-btn",
        text: ">",
        parent: carouselView 
    })
}
