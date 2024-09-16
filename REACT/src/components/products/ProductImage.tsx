type ProductImageProps = {
	src ?: string;
	title ?: string;
}
const ProductImage = ({src = "", title = ""} : ProductImageProps): JSX.Element => {
	return(
		<figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
			<img
				src={src}
				alt={title}
				className="object-contain w-full h-72"
			/>
		</figure>
	)
}

export default ProductImage;