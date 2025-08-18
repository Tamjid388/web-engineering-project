import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import axios from "axios";

export default function CartDrawer({ userEmail }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (!userEmail) return;

    const fetchCart = async () => {
      try {
        const res = await axios.get(
          "http://localhost/Web-Engineering-Project-Github/BackEnd/fitflex-backend/api/get_cart.php",
          { params: { user_email: userEmail } }
        );

        // Ensure cartItems is always an array
        const items = Array.isArray(res.data) ? res.data : [];
        setCartItems(items);
      } catch (err) {
        console.error("Error fetching cart:", err);
        setCartItems([]); // fallback to empty array
      }
    };

    fetchCart();
  }, [userEmail]);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  return (
    <div className="relative">
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-1"
      >
        <IoMdCart size={20} /> ({cartItems.length})
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button onClick={() => setIsOpen(false)}>
            <FaTimes className="text-gray-500 hover:text-black" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-140px)]">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b pb-2"
              >
                <img
                  src={item.img}
                  alt={item.product_name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold">
                    {item.product_name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {item.qty} × ${item.price}
                  </p>
                </div>
                <p className="font-bold">${item.qty * item.price}</p>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <div className="flex justify-between font-bold mb-4">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
