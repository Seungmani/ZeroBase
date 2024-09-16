import { useMemo } from "react";
import { IProduct } from "../store/products";
import Slider from "../components/common/Slider";
import ItemList from "../components/products/ItemList";
import "../assets/css/custom.css";

const Index = ({ products }: { products: IProduct[] }): JSX.Element => {
  const fashionProducts = useMemo(
    () =>
      products.filter((product) => product.category === "men's clothing" || product.category === "women's clothing"),
    [products]
  );
  const jeweleryProducts = useMemo(() => products.filter((product) => product.category === "jewelery"), [products]);
  const electronicsProducts = useMemo(
    () => products.filter((product) => product.category === "electronics"),
    [products]
  );

  return (
    <>
      <Slider />
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">패션</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list" data-scroll="true">
          {fashionProducts.slice(0, 4).map((product) => (
            <ItemList key={product.title} product={product} />
          ))}
        </div>
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">액세서리</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list" data-scroll="true">
          {jeweleryProducts.slice(0, 4).map((product) => (
            <ItemList key={product.title} product={product} />
          ))}
        </div>
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">디지털</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list" data-scroll="true">
          {electronicsProducts.slice(0, 4).map((product) => (
            <ItemList key={product.title} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Index;
