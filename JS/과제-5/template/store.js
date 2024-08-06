let state = null;
let listeners = [];

const createState = initialState => {
  state = new Proxy(initialState, {
    set(target, key, newState) {
      if (target[key] === newState) return false;

      target[key] = newState;
      listeners.forEach(component => component.render()); // re-rendering

      return true;
    },
  });

  return state;
};

const subscribe = newListener => {
  if (!listeners.includes(newListener)) listeners = [...listeners, newListener];

  // 구독 해지 함수
  return () => {
    listeners = listeners.filter(listener => listener !== newListener);
  };
};

const store = {
  state,
  createState,
  subscribe,
};

export default store;
export { state, createState, subscribe };
