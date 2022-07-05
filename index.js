import { showNavigation } from "./modules/navigation.js";

const nav = document.querySelector('.navbar');
nav.addEventListener('click', e => {
    e.preventDefault();
    showNavigation(e.target.id, e.target.target);
});
