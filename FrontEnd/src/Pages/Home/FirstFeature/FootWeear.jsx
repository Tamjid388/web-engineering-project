import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";

const FootWeear = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/products.json")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="my-10 container mx-auto">
      <div className="uppercase text-center mb-8">
        <p className=" text-sm text-gray-500"> Find What is</p>
       
        <p className="lg:text-5xl text-2xl font-semibold ">Trending Now</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 ">
        {products.slice(0,8).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FootWeear;
