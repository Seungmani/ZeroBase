// do something!
const makeStars = (num, div) => {
	const star = document.createElement('span');
	star.className = 'star-rating-container';

  for (let i = 0; i < num; i++) {
    star.innerHTML += `<i class='bx bxs-star' data-value=${i + 1}></i>`;
  }

	div.appendChild(star);
};

const StarRating = (container) => {
  makeStars(Number(container.dataset.maxRating), container);

};

export default StarRating;
