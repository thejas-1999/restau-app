import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Order = () => {
  const { cart, increaseQty, decreaseQty, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
    }, 800);
  };

  /* 🎉 SUCCESS SCREEN */
  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 text-center animate-success">
          <div className="text-6xl mb-4">🎉</div>

          <h1 className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">
            Order Placed!
          </h1>

          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Your delicious food is on the way 😋
          </p>

          <button
            onClick={() => navigate("/menu")}
            className="bg-green-600 hover:bg-green-700 active:scale-95 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  /* 🛒 EMPTY CART */
  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center animate-fade-up">
        <div className="text-6xl mb-4">🛒</div>

        <h2 className="text-2xl font-bold text-gray-700 mb-2">
          Your cart is empty
        </h2>

        <p className="text-gray-500 mb-6 max-w-sm">
          Looks like you haven’t added anything yet. Let’s fix that with some
          delicious food 😋
        </p>

        <button
          onClick={() => navigate("/menu")}
          className="bg-green-600 hover:bg-green-700 active:scale-95 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Back to Menu
        </button>
      </div>
    );
  }

  /* 🛒 ORDER PAGE */
  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 py-6 pb-36 animate-fade-up">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Your Order</h1>

      {/* Order Items */}
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow p-4 flex items-center gap-4 transition hover:shadow-md"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-sm sm:text-base">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm">₹{item.price}</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQty(item.id)}
                className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full active:scale-90 transition"
              >
                −
              </button>

              <span className="font-semibold w-5 text-center">
                {item.quantity}
              </span>

              <button
                onClick={() => increaseQty(item.id)}
                className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full active:scale-90 transition"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 BOTTOM TOTAL BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl p-4 flex justify-between items-center animate-slide-up">
        <div>
          <p className="text-xs text-gray-500">Total Amount</p>
          <p className="text-lg sm:text-xl font-bold">₹{totalPrice}</p>
        </div>

        <button
          onClick={placeOrder}
          className="bg-green-600 hover:bg-green-700 active:scale-95 text-white px-5 sm:px-6 py-3 rounded-xl font-semibold transition-all"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Order;
