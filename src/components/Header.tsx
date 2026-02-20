// src/components/Header.tsx
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cart, clearCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // 🔐 logout
    clearCart();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/menu" className="text-2xl font-bold text-green-600 ">
          🍽️ Foodies
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link
            to="/menu"
            className={`font-medium cursor-pointer ${
              location.pathname === "/menu"
                ? "text-green-600"
                : "text-gray-600 hover:text-green-600"
            }`}
          >
            Menu
          </Link>

          <Link
            to="/orders"
            className="relative font-medium text-gray-600 hover:text-green-600 cursor-pointer"
          >
            Orders
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {/* 🔓 Logout Button */}
          <button
            onClick={handleLogout}
            className="ml-2 bg-red-500 cursor-pointer hover:bg-red-600 active:scale-95 text-white px-4 py-1.5 rounded-lg text-sm font-semibold transition"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
