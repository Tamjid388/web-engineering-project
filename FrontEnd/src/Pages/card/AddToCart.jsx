import { useState } from "react";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

export default function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const cartItems = [
    { id: 1, name: "Product 1", price: 20, qty: 1, img: "https://via.placeholder.com/50" },
    { id: 2, name: "Product 2", price: 35, qty: 2, img: "https://via.placeholder.com/50" },
  ];

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="">
        
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center "
        >
          <IoMdCart />  ({cartItems.length})
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button onClick={() => setIsOpen(false)}>
            <FaTimes className="text-gray-500 hover:text-black" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-140px)]">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border-b pb-2">
              <img src={item.img} alt={item.name} className="w-12 h-12 object-cover rounded" />
              <div className="flex-1">
                <h3 className="text-sm font-semibold">{item.name}</h3>
                <p className="text-gray-500 text-sm">
                  {item.qty} × ${item.price}
                </p>
              </div>
              <p className="font-bold">${item.qty * item.price}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <div className="flex justify-between font-bold mb-4">
            <span>Total</span>
            <span>
              $
              {cartItems.reduce((total, item) => total + item.qty * item.price, 0)}
            </span>
          </div>
          <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
