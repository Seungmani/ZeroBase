import { Link } from "react-router-dom";

const CartEmptyView = (): JSX.Element => {
	return (
	<>
		<div>
			<h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
			<Link to="/" className="btn btn-primary mt-10">
				담으러 가기
			</Link>
		</div>
	</>
	)
}

export default CartEmptyView;