// do something!
import { Nav, NewsList } from "./components/index.js";
const $root = document.querySelector("#root");

new Nav($root).render();
new NewsList($root);