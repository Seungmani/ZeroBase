// do something!
import { CATEGORIES } from "../constant/constant.js"
import { setCategory } from '../store.js';

class Nav {
	constructor(container) {
    this.container = container;
  }

	render() {
    const nav = document.createElement('nav');
    nav.classList.add("category-list");

		const ul = document.createElement("ul");
		ul.innerHTML = CATEGORIES.map( (category) => `
			<li id="${category.id}" class="category-item${"all" === category.id ? ' active' : ''}">${category.name}</li>
		`).join('');

    nav.append(ul);
    this.container.append(nav);

    this.addEvent();
	}

  addEvent() {
    this.container.addEventListener('click', (event) => {
      const target = event.target;
      if (target && target.matches('.category-item')) {
        this.setActiveCategory(target.id);
        setCategory(target.id);
      }
    });
  }

  setActiveCategory(categoryId) {
    const currentActive = this.container.querySelector('.category-item.active');
    if (currentActive) {
      currentActive.classList.remove('active');
    }

    const newActive = this.container.querySelector(`#${categoryId}`);
    if (newActive) {
      newActive.classList.add('active');
    }
  }

}
export default Nav;