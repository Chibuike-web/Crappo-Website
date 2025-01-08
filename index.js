const menu = document.querySelector(".menu");
const mobileNav = document.querySelector(".mobile_nav");
const closenav = document.querySelector(".mobile_nav_close");
const cards = document.querySelectorAll(".card");

const body = document.body;
menu.addEventListener("click", (e) => {
	console.log("Click");
	mobileNav.classList.add("open");
	body.classList.add("no-scroll");
});
closenav.addEventListener("click", (e) => {
	mobileNav.classList.remove("open");
	body.classList.remove("no-scroll");
});

cards.forEach((card, index) => {
	card.addEventListener("click", (e) => {
		cards.forEach((c) => {
			c.classList.remove("active");
			const miningButton = c.querySelector(".mining");
			const arrow = c.querySelector(".arrow");
			arrow.classList.remove("hide");
			miningButton.classList.add("hide");
		});
		card.classList.add("active");
		const miningButton = card.querySelector(".mining");
		const arrow = card.querySelector(".arrow");
		miningButton.classList.remove("hide");
		arrow.classList.add("hide");
	});
});
