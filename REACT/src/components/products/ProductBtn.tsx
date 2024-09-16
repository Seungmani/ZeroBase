import { useRecoilState } from "recoil";
import { addToCart, cartState, ICartInfo } from "../../store/cart";
type ProductBtnProps = {
	id ?: number;
}

const ProductBtn = ({id = 0}: ProductBtnProps):JSX.Element => {
	const [cart, setCart] = useRecoilState(cartState);
  
  const addToCartHandler = () => {
    if (id) {
      const cartItem: ICartInfo = {
        id: id,
        count: 1,
      };
      setCart(addToCart(cart, cartItem));
    }
  };

	return (
		<div className="card-actions">
			<button className="btn btn-primary" onClick={addToCartHandler}>장바구니에 담기</button>
			<a className="btn btn-outline ml-1" href="/cart">
				장바구니로 이동
			</a>
		</div>
	)
}

export default ProductBtn;