import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { DeliveryPolicy } from "../../Components/ProductDetail/DeliveryPolicy";
import { Reviews } from "../../Components/ProductDetail/Reviews";
import { Authcontext } from "../../AuthProvider/Authprovider";
import Swal from "sweetalert2";

export const ProductDetails = () => {
    const { user } = useContext(Authcontext);
     const userEmail = user?.email;
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost/Web-Engineering-Project-Github/BackEnd/fitflex-backend/api/get_product_by_id.php?id=${id}`)
      .then((res) => {
        if (res.data.error) {
          setProduct(null);
        } else {
          setProduct(res.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Product fetch error:", err);
        setProduct(null);
        setLoading(false);
      });
  }, [id]);


  // Cart
  const handleAddToCart = (productId) => {
    if (!userEmail) {
     Swal.fire("Please login to add items to your cart.");
      return;
    }

    axios
      .post(
        "http://localhost/Web-Engineering-Project-Github/BackEnd/fitflex-backend/api/add_to_cart.php",
        {
          user_email: userEmail,
          product_id: productId,
          quantity: count,
        }
      )
      .then((res) => {
        if (res.data.status === "success") {
          Swal.fire("Item added to cart!");
        } else {
          Swal.fire(res.data.message || "Failed to add to cart");
        }
      })
      .catch((err) => {
        console.error("Add to cart error:", err);
        Swal.fire("Something went wrong!");
      });
  };

  if (loading)
    return <h1 className="text-center text-2xl mt-10">Loading Product...</h1>;
  if (!product)
    return <h1 className="text-center text-2xl mt-10">Product Not Found</h1>;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Product Info Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="w-full h-full flex justify-center items-center border rounded-xl shadow-sm p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto max-h-[500px] object-contain rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
          <p className="text-gray-600 text-lg">{product.description}</p>

          <div className="text-2xl font-semibold text-black">
            ${Number(product.price).toFixed(2)}
          </div>

          <div className="space-y-1 text-sm md:text-base text-gray-700">
            <p>
              <span className="font-semibold">Category:</span> {product.category}
            </p>
            <p>
              <span className="font-semibold">Brand:</span> {product.brand}
            </p>
            <p>
              <span className="font-semibold">Stock:</span>{" "}
              {product.stock > 0 ? product.stock : "Out of Stock"}
            </p>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
            <div className="flex items-center border rounded-md overflow-hidden">
              <button
                onClick={decrease}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-xl font-bold"
              >
                -
              </button>
              <span className="px-6 text-lg">{count}</span>
              <button
                onClick={increase}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-xl font-bold"
              >
                +
              </button>
            </div>

            <button
              onClick={()=>handleAddToCart(product.id)}
            className="w-full md:w-auto px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300">
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="mt-16">
        <DeliveryPolicy product={product} />
      </div>

      <div className="mt-10">
        <Reviews product={product} />
      </div>
    </div>
  );
};
