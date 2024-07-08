// do something!
const $toggle = document.querySelector(".toggle");
const $nav = document.querySelector("nav");
const $preload = document.querySelector(".preload");

// nav 상태 저장 
const saveNavOpenState = (isOpen) => {
	localStorage.setItem('sidenavState', isOpen ? 'open' : 'closed');
}

// nav 상태 불러오기
const getNavState = () => {
	return localStorage.getItem("sidenavState");
}

const changeNavState = () => {
	$nav.classList.toggle("active");
	saveNavOpenState($nav.classList.contains("active"));
};

const showNav = (state) => {
	if (state === "open") $nav.classList.add("active");
  else $nav.classList.remove("active");
}

const initialSetting = () => {
	document.body.style.visibility = "visible";
	requestAnimationFrame(() => {
		document.body.classList.remove("preload");
	});
}

document.addEventListener("DOMContentLoaded", () => {
	const openState = getNavState();
	showNav(openState);
	initialSetting();
});

$toggle.addEventListener("click", changeNavState);
