// MENU BURGER

const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".navLinks");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


//CAROUSEL - SECTION 5

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--soutiens-elements-displayed");
const marqueeContent = document.querySelector("ul.soutiensContent");

root.style.setProperty("--soutiens-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
