type ProductPriceProps = {
	price ?: number;
}

const ProductPrice = ({price = 0}: ProductPriceProps): JSX.Element => {
	return (
		<p className="mt-2 mb-4 text-3xl">{price}</p>
	)
}

export default ProductPrice;