import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { DeliveryPolicy } from "../../Components/ProductDetail/DeliveryPolicy";


export const ProductDetails = () => {
  const { id } = useParams()
  console.log(id);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get("/products.json")
      .then((response) => {
        const found = response.data.find((item) => item.id.toString() === id);
        setProduct(found);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h1>Product Loading</h1>
  return (
    <div className="my-16 text-center space-y-2 ">



      <div className=" mx-auto my-16 p-4 grid grid-cols-1
          md:grid-cols-2 gap-8 items-center">
        {/* Left - Main Image */}
        <div className="w-full border border-gray-300">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-xl "
          />
        </div>

        {/* Right - Product Details */}
        <div className="space-y-4  text-start">
          <h2 className="text-5xl font-extrabold text-start">{product.name}</h2>
          <p className="text-gray-600 text-start text-xl">{product.description}</p>
          <h4 className="font-bold text-2xl">
            ${product.price}
          </h4>


          <div className="text-gray-700 space-y-1">
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Stock:</strong> {product.stock}</p>


          </div>
          <div className="space-x-2 flex items-center">
            <div className=" border-black flex items-center my-3">
              <button onClick={increase}
                className="btn text-lg font-bold"
              >+</button>

              <p className="px-2">{count}</p>

              <button onClick={decrease}
                className="btn text-lg font-bold"
              >-</button>
            </div>
            <button className="btn  btn-outline w-full bg-black text-white">Add To Cart</button>
          </div>
        


        </div>
      </div>
      <DeliveryPolicy/>



    </div>
  )
}
