
const MENU = document.getElementById("menu-list2");
const NAV = document.getElementById("nav2-vsbl");





MENU.addEventListener("click", function () {

    NAV.classList.toggle("hide-navigation");
    NAV.classList.remove("hide-menu");
});

const CLOSENAV = document.getElementById("menu-close3");
const SCDNAV = document.getElementById("contains-menu");


CLOSENAV.addEventListener("click", function () {
    SCDNAV.classList.add("hide-menu");
    NAV.classList.toggle("hide-navigation");
});