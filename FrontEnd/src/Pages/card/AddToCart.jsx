import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { Authcontext } from "../../AuthProvider/Authprovider";

export default function CartDrawer() {
  const {user}=useContext(Authcontext)
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const userEmail = user?.email;

  useEffect(() => {
    axios
      .post(
        "http://localhost/Web-Engineering-Project-Github/BackEnd/fitflex-backend/api/get_cart.php",
        { user_email: userEmail },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        if (res.data.status === "success") {
          setCartItems(res.data.cart);
        } else {
          console.error("Cart API error:", res.data.message);
        }
      })
      .catch((err) => console.error("Cart fetch error:", err));
  }, []);

  return (
    <div className="relative">
      {/* Navbar */}
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center"
        >
          <IoMdCart /> ({cartItems.length})
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
        className={`fixed top-0 right-0 h-full w-80 bg-gray-200 py-12
           shadow-lg z-50 transform transition-transform duration-300 ${
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
          {cartItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 border-b pb-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold">{item.name}</h3>
                <p className="text-gray-500 text-sm">
                  {item.quantity} × ${item.price}
                </p>
              </div>
              <p className="font-bold">
                ${(item.quantity * item.price).toFixed(2)}
              </p>
            </div>
          ))}

          {cartItems.length === 0 && (
            <p className="text-center text-gray-500">Cart is empty</p>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <div className="flex justify-between font-bold mb-4">
            <span>Total</span>
            <span>
              $
              {cartItems
                .reduce(
                  (total, item) => total + item.quantity * item.price,
                  0
                )
                .toFixed(2)}
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
