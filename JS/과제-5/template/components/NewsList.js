// do something!
import { addArticles, getState, subscribe } from "../store.js";
import { API_KEY } from "../constant/api_key.js";

class NewsList {
  constructor(container) {
		this.render(container);
		this.newsList = document.querySelector('.news-list');
    this.observer = null;
    this.init();
  }

  async fetchArticles() {
    const state = getState();
		try {
			const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&category=${state.category === 'all' ? '' : state.category}&page=${state.page}&pageSize=${5}&apiKey=${API_KEY}`);
			addArticles(response.data.articles);			
		} catch (error) {
			console.error('error:', error);
		}
  }

  createNewsItem(article) {
    const newsItem = document.createElement("section");
    newsItem.className = "news-item";
		const imageUrl = article.urlToImage ? article.urlToImage : 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';
		const description = article.description ? article.description : "";

    newsItem.innerHTML = `
      <div class="thumbnail">
        <a href="${article.url}" target="_blank" rel="noopener noreferrer">
          <img src="${imageUrl}" alt="thumbnail" />
        </a>
      </div>
      <div class="contents">
        <h2>
          <a href="${article.url}" target="_blank" rel="noopener noreferrer">
            ${article.title}
          </a>
        </h2>
        <p>${description}</p>
      </div>
    `;

    return newsItem;
  }

  render(container) {
    container.innerHTML += `
		<div class="news-list-container">
    	<article class="news-list"></article>
    	<div class="scroll-observer">
      	<img src="img/ball-triangle.svg" alt="Loading..." />
    	</div>
  	</div>`;
  }

  showNewsList() {
    const state = getState();
    this.newsList.innerHTML = '';

    state.articles.forEach(article => {
      const newsItem = this.createNewsItem(article);
      this.newsList.appendChild(newsItem);
    });
  }

  setupInfiniteScroll() {
    this.observer = new IntersectionObserver(
      async ([entry], observer) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          await this.fetchArticles();
          observer.observe(document.querySelector(".scroll-observer"));
        }
      },
      { threshold: 1.0 }
    );

    this.observer.observe(document.querySelector(".scroll-observer"));
  }

	init() {
    subscribe(this.showNewsList.bind(this));
    this.setupInfiniteScroll();
  }
}

export default NewsList;
