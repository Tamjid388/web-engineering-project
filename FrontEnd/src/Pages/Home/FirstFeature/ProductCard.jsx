// ProductCard.jsx
import React from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <div>
      <Link to={`/shop/product-details/${product.id}`}>
        <div className="border object-cover border-gray-300 hover:border-black p-4 hover:shadow-lg transition relative group overflow-hidden">
          <div className="absolute top-4 right-4 cursor-pointer">
            <Heart size={20} className="text-gray-600 hover:text-red-500" />
          </div>

          {product.version && (
            <div className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-0.5 rounded-sm">
              {product.version}
            </div>
          )}

          {product.isNew && (
            <span className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-1 rounded">
              NEW
            </span>
          )}

          {/* Product Image with zoom on hover */}
          <div className="overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover mb-4 transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Product Details */}
          <div className="text-sm text-gray-500 uppercase">{product.brand}</div>
          <div className="font-semibold text-lg mb-1">{product.name}</div>
          <div className="text-sm text-gray-500">{product.category}</div>

          {/* Price + Cart Icon */}
          <div className="mt-4 flex items-center justify-between">
            <span className="font-bold">${product.price}</span>
            <ShoppingBag size={20} className="text-gray-800 cursor-pointer" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;