import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RetrieveProductsAction} from "../actions/EcommerceAction";
import ProductCard from "../components/ProductCard";

const ProductListComponent = () => {
  const dispatch = useDispatch();

  const Product = useSelector((state) => state.Product);
  const {products} = Product;
  useEffect(() => {
    dispatch(RetrieveProductsAction());
  }, [dispatch]);

  return (
    <div>
      <h2>Products</h2>
      <div>
        {products &&
          products.map((product) => <ProductCard product={product} />)}
      </div>
    </div>
  );
};

export default ProductListComponent;
