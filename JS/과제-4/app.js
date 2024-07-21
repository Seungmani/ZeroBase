import Calendar from "./utils/calendar.js";

const $input = document.querySelector("#date-input");
const $calendar = document.querySelector(".calendar");

document.addEventListener("DOMContentLoaded", () => {
	Calendar.init();
});