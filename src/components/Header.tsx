import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cart, clearCart, openCart } = useCart();

  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    clearCart();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between">
        <Link to="/menu" className="text-2xl font-bold text-green-600">
          🍽️ Foodies
        </Link>

        <nav className="flex items-center gap-6">
          <span
            onClick={openCart}
            className="relative font-medium text-gray-600 hover:text-green-600 cursor-pointer"
          >
            Orders
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </span>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg text-sm font-semibold"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
