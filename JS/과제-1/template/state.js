const KEY = "state";

export const saveState = (state) => {
	if (typeof state !== "object") throw new TypeError('매개변수 state에는 객체가 전달되어야 합니다.');
	localStorage.setItem(KEY, JSON.stringify(state));
}

export const getState = () => {
	return JSON.parse(localStorage.getItem(KEY));
}