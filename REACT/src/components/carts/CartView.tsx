import { useRecoilState, useRecoilValue } from "recoil";
import BreadCrumb from "../common/Breadcrumb";
import Confirm from "../common/Confirm";
import CartList from "./CartList";
import { useState } from "react";
import { addToCart, cartList, cartState, ICartState, removeFromCart } from "../../store/cart";
import { IProduct } from "../../store/products";
import CartEmptyView from "./CartEmptyView";
import CartPurchaseBtn from "./CartPurchaseBtn";
import React from "react";

const CartView = (): JSX.Element => {
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const [cart, setCart] = useRecoilState<ICartState>(cartState);
  const products = useRecoilValue<IProduct[]>(cartList);

  const increaseFromCartHandler = (id: string) => {
    const item = cart.items[id];
    if (item) {
      setCart(addToCart(cart, { ...item, count: item.count }));
    }
  };
  // store/cart.ts를 참고하세요.
  const removeFromCartHandler = (id: string) => {
    const item = cart.items[id];
    if (item) {
      setCart(removeFromCart(cart, { ...item, count: item.count }));
    }
  };

  return (
    <>
      <BreadCrumb category="홈" crumb="장바구니" />
      <div className="mt-6 md:mt-14 px-2 lg:px-0">
        {!products.length ? (
          <CartEmptyView />
        ) : (
          <div className="lg:flex justify-between mb-20">
            <CartList
              products={products}
              increaseFromCartHandler={increaseFromCartHandler}
              removeFromCartHandler={removeFromCartHandler}
              cart={cart}
            />
            <CartPurchaseBtn setIsConfirm={setIsConfirm} />
          </div>
        )}
      </div>
      {isConfirm ? <Confirm /> : null}
    </>
  );
};

export default React.memo(CartView);
