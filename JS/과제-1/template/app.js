// do something!
const $toggle = document.querySelector(".toggle");
const $nav = document.querySelector("nav");
const $preload = document.querySelector(".preload");

// 토글 클릭 이벤트
const clickToggle = () => {
  $nav.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", () => {
  $nav.classList.toggle("active");
  document.body.style.visibility = "visible";
	document.body.classList.remove("preload");
});

$toggle.addEventListener("click", clickToggle);
