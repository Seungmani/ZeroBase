// do something!
import { saveState, getState } from './state.js';
const $toggle = document.querySelector(".toggle");
const $nav = document.querySelector("nav");

let isOpen;

window.addEventListener("DOMContentLoaded", () => {
	const state = getState();
	isOpen = state === null ? false : state.isOpen;
	$nav.classList.toggle("active", isOpen);
	document.body.style.visibility = "visible";
});

window.addEventListener('beforeunload', () => {
  saveState({isOpen});
});


$toggle.addEventListener("click", () => {
	isOpen = !isOpen;
	// document.body.classList.remove('preload');
  $nav.classList.toggle('active', isOpen);
});
