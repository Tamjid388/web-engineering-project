import { ShoppingCart, Heart } from "lucide-react";
import React, { useContext } from "react";
import { Link } from "react-router";
import { Authcontext } from "../../AuthProvider/Authprovider";
import axios from "axios";
import Swal from "sweetalert2";

export const Products = ({ products }) => {
const {user}=useContext(Authcontext)




 const handleWishlist = async (productId) => {
  console.log(productId,user?.email);
  try {
    const res = await axios.post("http://localhost/Web-Engineering-Project-Github/BackEnd/fitflex-backend/api/add_wishlist.php", {
      user_email: user?.email, 
      product_id: productId
    });

    if (res.data.status === "success") {
      Swal.fire("Product added successfully ");
    }
  } catch (error) {
    console.error("Error adding to wishlist:", error);
  }
};

  return (
    <div className="pb-16 w-full">
      <div
        className="grid grid-cols-1 container mx-auto sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 
         "
      >
        {products?.map((product) => (
          <div
            
            key={product.id}
            className="card bg-base-100   shadow-sm  group rounded-none border border-gray-300 hover:border-black"
          >
            <figure className="h-[350px] relative border border-gray-100  overflow-hidden">
              <img
                loading="lazy"
                className="h-full w-full object-cover"
                src={product.image}
                alt="Shoes"
              />
              <div className="space-x-1 absolute bottom-[-40px] group-hover:bottom-2 transition-all duration-300">
             
                  <button className="btn bg-black text-white border-none">
                    <ShoppingCart />
                  </button>
               
            
                  <button
                  onClick={()=>handleWishlist(product.id)}
                  
                  className="btn bg-black text-white border-none">
                    <Heart />
                  </button>
               
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.category}</h2>
              <h2 className="card-title">{product.name}</h2>
              <p>{product.price}$</p>
              <div className="">
                <Link
                  to={`/shop/product-details/${product.id}`}
                  className="btn bg-black text-white"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
