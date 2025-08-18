import axios from "axios";
import React, { useContext } from "react";
import Swal from "sweetalert2";
import { Authcontext } from "../../AuthProvider/Authprovider";
import ProductCard from "../Home/FirstFeature/ProductCard.jsx";

export const Products = ({ products }) => {
  const { user } = useContext(Authcontext);
  const userEmail = user?.email;

  const handleWishlist = async (productId) => {
    console.log(productId, user?.email);
    try {
      const res = await axios.post(
        "http://localhost/Web-Engineering-Project-Github/BackEnd/fitflex-backend/api/add_wishlist.php",
        {
          user_email: user?.email,
          product_id: productId,
        }
      );

      if (res.data.status === "success") {
        Swal.fire("Product added successfully ");
      }
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  };

  const handleCartUpdate = () => {
    // This function will be called when cart is updated
    console.log("Cart updated from shop page");
  };

  return (
    <div className="pb-16 w-full">
      <div
        className="grid grid-cols-1 container mx-auto sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 
         "
      >
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            userEmail={userEmail}
            onCartUpdate={handleCartUpdate}
          />
        ))}
      </div>
    </div>
  );
};
