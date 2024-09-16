import Rating from "../components/products/Rating";
import ProductDescription from "../components/products/ProductDescription";
import ProductPrice from "../components/products/ProductPrice";
import ProductImage from "../components/products/ProductImage";
import BreadCrumb from "../components/common/Breadcrumb";
import { useParams } from "react-router-dom";
import { IProduct } from "../store/products";
import { useMemo } from "react";
import { Category } from "../constants/category";
import ProductBtn from "../components/products/ProductBtn";

const Product = ({ products }: { products: IProduct[] }): JSX.Element => {
  const { id } = useParams();
  const product = useMemo(() =>products.filter((product) => product.id === Number(id)), [id, products]);

  return (
    <>
		<section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <div>
        <BreadCrumb category={Category[product[0].category]} crumb={product[0].title} />
        <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
          <ProductImage src={product[0].image} title={product[0].title}/>
          <div className="card-body px-1 lg:px-12">
            <ProductDescription title={product[0].title} description={product[0].description}/>
            <Rating rate={product[0].rating.rate} count={product[0].rating.count} />
            <ProductPrice price={product[0].price}/>
            <ProductBtn id={product[0].id}/>
          </div>
        </div>
      </div>
		</section>
    </>
  );
};

export default Product;
