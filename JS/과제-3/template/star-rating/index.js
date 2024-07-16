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

	const $stars = container.querySelectorAll(".bx");

  // 별점을 클릭했을 때 이벤트 핸들러
  const handleRating = (event) => {
    const value = event.target.dataset.value;
    if (value) {
      // 별점 상태 업데이트
      $stars.forEach(star => {
        star.classList.toggle('selected', star.dataset.value <= value);
      });

      // rating-change 이벤트 생성 및 발생
      const customEvent = new CustomEvent('rating-change', {
        detail: value
      });
      container.dispatchEvent(customEvent);
    }
  };

  // 별점 호버 이벤트 핸들러
  const handleHover = (event) => {
    const value = event.target.dataset.value;
    if (value) {
      // 호버된 별점 상태 업데이트
      $stars.forEach(star => {
        star.classList.toggle('hovered', star.dataset.value <= value);
      });
    }
  };

  // 별점 호버 아웃 이벤트 핸들러
  const handleHoverOut = () => {
    // 호버 상태 제거
    $stars.forEach(star => {
      star.classList.remove('hovered');
    });
  };

  // 클릭 이벤트 리스너 추가
  container.addEventListener('click', handleRating);

  // 호버 이벤트 리스너 추가
  container.addEventListener('mouseover', handleHover);
  container.addEventListener('mouseout', handleHoverOut);
};

export default StarRating;
