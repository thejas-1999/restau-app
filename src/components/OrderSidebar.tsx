import { useState } from "react";
import { useCart } from "../context/CartContext";

const OrderSidebar = () => {
  const { cart, increaseQty, decreaseQty, clearCart, closeCart } = useCart();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const placeOrder = () => {
    setOrderPlaced(true);

    setTimeout(() => {
      clearCart(); // clear items
      closeCart(); // close sidebar
      setOrderPlaced(false);
    }, 1200);
  };

  /* 🎉 SUCCESS MESSAGE */
  if (orderPlaced) {
    return (
      <aside
        className="
          fixed inset-y-0 right-0
          w-64 sm:w-72 md:w-80
          lg:static lg:w-full
          bg-green-50 shadow-xl
          rounded-l-2xl lg:rounded-2xl
          p-6
          z-50
          flex flex-col items-center justify-center
        "
      >
        <div className="text-5xl mb-3">🎉</div>
        <h2 className="text-xl font-bold text-green-600">Order Placed!</h2>
        <p className="text-sm text-gray-600 mt-1">Enjoy your meal 😋</p>
      </aside>
    );
  }

  /* 🛒 ORDER SIDEBAR */
  return (
    <aside
      className="
        fixed inset-y-0 right-0
        w-64 sm:w-72 md:w-80
        lg:static lg:w-full
        bg-white shadow-xl
        rounded-l-2xl lg:rounded-2xl
        p-3 sm:p-4
        z-50
      "
    >
      <h2 className="text-xl font-bold mb-4">Your Order</h2>

      {/* Items */}
      <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-3 border-b pb-2">
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 rounded object-cover"
            />

            <div className="flex-1">
              <p className="font-medium text-sm">{item.name}</p>
              <p className="text-xs text-gray-500">₹{item.price}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => decreaseQty(item.id)}
                className="w-6 h-6 bg-gray-200 rounded-full active:scale-90"
              >
                −
              </button>

              <span className="text-sm font-semibold">{item.quantity}</span>

              <button
                onClick={() => increaseQty(item.id)}
                className="w-6 h-6 bg-gray-200 rounded-full active:scale-90"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-4 border-t pt-4 flex justify-between">
        <span className="font-semibold">Total</span>
        <span className="font-bold text-green-600">₹{totalPrice}</span>
      </div>

      {/* Place Order */}
      <button
        onClick={placeOrder}
        className="mt-4 w-full bg-green-600 hover:bg-green-700 active:scale-95 text-white py-2 rounded-xl font-semibold transition"
      >
        Place Order
      </button>
    </aside>
  );
};

export default OrderSidebar;
