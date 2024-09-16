import { Routes, Route } from "react-router-dom";
import { memo, useMemo } from "react";
import { useRecoilValueLoadable } from "recoil";
import { productsList } from "../store/products";
import Error from "../views/Error";
import Index from "../views/Index";
import Fashion from "../views/Fashion";
import Accessory from "../views/Accessory";
import Digital from "../views/Digital";
import ProductsLoad from "../components/products/ProductsLoad";
import Product from "../views/Product";
import Cart from "../views/Cart";

const Router = (): JSX.Element => {
  const products = useRecoilValueLoadable(productsList); // recoil state에서 products list 가져오기

  const fashionProducts = useMemo(
    () =>
      products.state === "hasValue"
        ? products.contents.filter(
            (product) => product.category === "men's clothing" || product.category === "women's clothing"
          )
        : [],
    [products]
  );

  const electronicsProducts = useMemo(
    () =>
      products.state === "hasValue" ? products.contents.filter((product) => product.category === "electronics") : [],
    [products]
  );

  const jeweleryProducts = useMemo(
    () => (products.state === "hasValue" ? products.contents.filter((product) => product.category === "jewelery") : []),
    [products]
  );

  if (products.state === "loading") {
    return <ProductsLoad limit={4} />;
  }

  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Index products={products.contents} />} />
      <Route path="/fashion" element={<Fashion fashionProducts={fashionProducts} />} />
      <Route path="/accessory" element={<Accessory jeweleryProducts={jeweleryProducts} />} />
      <Route path="/digital" element={<Digital electronicsProducts={electronicsProducts} />} />
      <Route path="/product/:id" element={<Product products={products.contents} />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default memo(Router);
