let state = {
  category: 'all',
  articles: [],
  page: 1
};

const listeners = [];

function setState(newState) {
  state = { ...state, ...newState };
  listeners.forEach(listener => listener());
}

export function getState() {
  return state;
}

export function setCategory(category) {
  setState({ category, page: 1, articles: [] });
}

export function addArticles(articles) {
  setState({ articles: [...state.articles, ...articles], page: state.page + 1 });
}

export function subscribe(listener) {
  listeners.push(listener);
  return () => {
    const index = listeners.indexOf(listener);
    console.log(index, listener)
    listeners.splice(index, 1);
  };
}