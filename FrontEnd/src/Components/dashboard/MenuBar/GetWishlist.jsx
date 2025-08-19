import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Authcontext } from "../../../AuthProvider/Authprovider";

export const GetWishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const {user}=useContext(Authcontext)
  const userEmail = user?.email;

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await axios.post(
          "http://localhost/Web-Engineering-Project-Github/BackEnd/fitflex-backend/api/get_wishlist.php",
          { email: userEmail }
        );

        if (res.data.status === "success") {
          setWishlist(res.data.wishlist || []);
        } else {
          Swal.fire("Error", res.data.message || "Failed to fetch wishlist", "error");
        }
      } catch (error) {
        console.error("API Error:", error);
        Swal.fire("Error", "Something went wrong while fetching wishlist", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto my-16 text-center">
        Loading...
      </div>
    );
  }

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto my-16 text-center">
        Your wishlist is empty.
      </div>
    );
  }

  return (
    <div className="container mx-auto my-16">
      <h1 className="text-2xl font-bold mb-6">Your Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="card bg-base-100 shadow-sm border border-gray-300 rounded p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover mb-2"
            />
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className="text-gray-600">{product.category} | {product.brand}</p>
            <p className="text-gray-500 text-sm my-1">{product.description}</p>
            <p className="font-bold">
              ${product.price}{" "}
              {product.discount > 0 && (
                <span className="text-red-500 ml-1">-{product.discount}%</span>
              )}
            </p>
            <p className="text-sm text-gray-600">Stock: {product.stock}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
};
