import React from "react";
import { useRecoilValue } from "recoil";
import { cartTotalPrice } from "../../store/cart";

const CartPurchaseBtn = ({setIsConfirm}): JSX.Element => {
	const totalPrice = useRecoilValue<number>(cartTotalPrice);
	const handlePurchaseClick = () => {
    setIsConfirm(true);
  };

	return (
		<div className="self-start shrink-0 flex items-center mt-10 mb-20">
			<span className="text-xl md:text-2xl">총 : ${totalPrice}</span>
			<label htmlFor="confirm-modal" className="modal-button btn btn-primary ml-5" onClick={handlePurchaseClick}>구매하기</label>
		</div>
	)
}

export default React.memo(CartPurchaseBtn);