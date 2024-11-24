function hamburgerAnimation() {
	let hamburger = document.querySelector("header nav .hamburger-menu");
	let hamburgerLines = document.querySelectorAll("header nav .hamburger-menu > *");
	let menu = document.querySelector("header ul.nav-menu");
	let menuLinks = document.querySelectorAll("header ul.nav-menu > li");
	let sections = document.querySelectorAll("section");

	hamburger.addEventListener("click", (e) => {
		if (menu.classList.contains("active") == false) {
			menu.classList.add("active");
			menu.classList.remove("inactive");

			menu.addEventListener("transitionend", (e) => {
				menuLinks.forEach((link) => {
					link.classList.add("active");
				});

				sections.forEach((section) => {
					section.style.display = "none";
				});
			});
		} else if (menu.classList.contains("active") == true) {
			menu.classList.remove("active");
			menu.classList.add("inactive");

			sections.forEach((section) => {
				section.style.display = "block";
			});

			menu.addEventListener("transitionend", (e) => {
				menuLinks.forEach((link) => {
					link.classList.remove("active");
				});

				sections.forEach((section) => {
					section.style.display = "block";
				});
			});
		}

		hamburgerLines.forEach((line) => {
			if (line.classList.contains("whiteBurger") == 0) {
				line.classList.remove("greenBurger");
				line.classList.add("whiteBurger");
			} else {
				line.classList.remove("whiteBurger");
				line.classList.add("greenBurger");
			}
		});
	});
}

hamburgerAnimation();
