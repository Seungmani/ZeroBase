import { Link } from "react-router-dom";
import { IProduct } from "../../store/products";

const ItemList = ({product}: {product: IProduct}) => {
	return (
			<Link className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal" to={`/product/${product.id}`}>
				<figure className="flex h-80 bg-white overflow-hidden">
					<img src={product.image} alt="상품 이미지" className="transition-transform duration-300" />
				</figure>
				<div className="card-body bg-gray-100 dark:bg-gray-700">
					<p className="className-title text-base">{product.title}</p>
					<p className="text-base">${product.price}</p>
				</div>
			</Link>
	)
}

export default ItemList;

