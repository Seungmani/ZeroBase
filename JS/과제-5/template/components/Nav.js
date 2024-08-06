// do something!
import { CATEGORIES } from "../constant/constant.js"
import { state } from '../store.js';

class Nav {
  constructor($container) {
    this.$container = $container;
    this.render();
    this.bindEvents();
  }

  render() {
    this.$container.innerHTML = `
      <ul>
      ${CATEGORIES
        .map(
          ({ name, text }) =>
            `<li id="${name}" class="category-item ${state.category === name ? 'active' : ''}">${text}</li>`
        )
        .join('')}
      </ul>`;
  }

  bindEvents() {
    this.$container.onclick = ({ target }) => {
      if (!target.matches('.category-item:not(.active)')) return;

      this.$container.querySelector('.active').classList.remove('active');
      target.classList.add('active');

      state.category = target.id;
    };
  }
}

export default Nav;
