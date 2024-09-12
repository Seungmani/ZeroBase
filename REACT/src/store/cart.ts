import { atom, selector } from "recoil";
import { CART_ITEM } from "../constants/category";
import { IProduct, productsList } from "./products";

export interface ICartInfo {
  readonly id: number;
  readonly count: number;
}

export interface ICartItems {
  readonly id: string;
  readonly title: string;
  readonly price: number;
  readonly count: number;
  readonly image: string;
}

export interface ICartState {
  readonly items?: Record<string | number, ICartInfo>;
}

export const cartState = atom<ICartState>({
  key: "cart",
  default: {},
  effects: [
    ({ setSelf, onSet }) => {
      localStorage.getItem(CART_ITEM) && setSelf(JSON.parse(localStorage.getItem(CART_ITEM) as string));
      onSet((value) => localStorage.setItem(CART_ITEM, JSON.stringify(value)));
    },
  ],
});

export const cartList = selector({
  key: "cartList",
  get: ({ get }) => {
    const cart = get(cartState);

    try {
      const products = get(productsList);
      if (!cart.items || !products.length) return [];

      return Object.entries(cart.items)
        .map(([id, { count }]) => {
          const product = products.find((p) => p.id === Number(id));
          if (product) {
            return {
              ...product,
              count,
            };
          }
          return null;
        })
        .filter((item) => item !== null) as IProduct[] & { count: number }[];
    } catch (error) {
      console.error("cartList Error:", error);
      return [];
    }
  },
});

export const addToCart = (cart: ICartState, item: ICartInfo): ICartState => {
  const updatedCart = { ...cart.items };

  if (updatedCart[item.id]) {
    updatedCart[item.id] = { ...updatedCart[item.id], count: updatedCart[item.id].count + 1 };
  } else {
    updatedCart[item.id] = item;
  }

  return { items: updatedCart };
};

// removeFromCart는 참고 하세요.
export const removeFromCart = (cart: ICartState, item: ICartInfo) => {
  const tempCart = { ...cart.items };
  if (tempCart[item.id].count === 1) {
    delete tempCart[item.id];
  } else {
    tempCart[item.id] = { ...tempCart[item.id], count: tempCart[item.id].count - 1 };
  }

  return { items: tempCart };
};

export const cartTotalPrice = selector({
  key: "cartTotalPrice",
  get: ({ get }) => {
    const cart = get(cartState);

    try {
      const products = get(cartList);
      if (!cart.items || !products.length) return 0;
      return products.reduce((acc, cur) => acc + cur.price * cart.items[cur.id].count, 0);
    } catch (e) {
      console.error("cartTotalPrice Error:", e);
      return 0;
    }
  },
});

export const cartTotalCount = selector({
  key: "cartTotalCount",
  get: ({ get }) => {
    const cart = get(cartState);

    try {
      const products = get(cartList);
      if (!cart.items || !products.length) return 0;
      return products.reduce((acc, cur) => acc + cart.items[cur.id].count, 0);
    } catch (e) {
      console.error("cartTotalCount Error:", e);
      return 0;
    }
  },
});
