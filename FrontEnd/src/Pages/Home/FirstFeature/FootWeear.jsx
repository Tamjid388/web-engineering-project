import axios from "axios";
import { useEffect, useState, useContext } from "react";
import ProductCard from "./ProductCard.jsx";
import { Authcontext } from "../../../AuthProvider/Authprovider";

const FootWeear = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(Authcontext);
  const userEmail = user?.email;

  useEffect(() => {
    axios
  .get("http://localhost/Web-Engineering-Project-Github/BackEnd/fitflex-backend/api/get_products.php")
  .then((res) => {
    setProducts(res.data);
    console.log(res.data);
  })
  .catch((error) => {
    console.log("Error fetching products:", error);
  });

  }, []);

  const handleCartUpdate = () => {
    // This function will be called when cart is updated
    console.log("Cart updated, you can refresh cart data here if needed");
  };

  return (
    <div className="my-10 container mx-auto">
      <div className="uppercase text-center mb-8">
        <p className=" text-sm text-gray-500"> Find What is</p>
       
        <p className="lg:text-5xl text-2xl font-semibold ">Trending Now</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 ">
        {products.slice(0,8).map((product, index) => (
          <ProductCard 
            key={index} 
            product={product} 
            userEmail={userEmail}
            onCartUpdate={handleCartUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default FootWeear;
