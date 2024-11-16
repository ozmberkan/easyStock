import { useState } from "react";
import { useSelector } from "react-redux";
import NoData from "~/components/NoData/NoData";

const Products = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <div className="w-full h-full flex">
      {products.length > 0 ? (
        <div className="flex flex-wrap items-start justify-start gap-2">
          {products.map((product, i) => (
            <div key={i} className="bg-green-500 text-white p-2 rounded">
              {product}
            </div>
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default Products;
