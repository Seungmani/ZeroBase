type ProductDescriptionProps = {
	title ?: string;
	description ?: string;
}

const ProductDescription = ({title = "", description = ""}: ProductDescriptionProps): JSX.Element => {
	return (
		<>
	  	<h2 className="card-title">
				{title}<span className="badge badge-accent ml-2">NEW</span>
			</h2>
			<p>
				{description}
			</p>
		</>
	)
}

export default ProductDescription;