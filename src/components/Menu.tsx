import RestauCard from "./RestauCard";
import OrderSidebar from "./OrderSidebar";
import * as foodsModule from "../constants/foods";
import { useCart } from "../context/CartContext";

const Menu = () => {
  const { foods } = foodsModule;
  const { cart, addToCart, isCartOpen, closeCart } = useCart();

  const hasCart = cart.length > 0;

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 py-6">
      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:flex gap-6">
        {/* MENU */}
        <div className={`transition-all ${hasCart ? "flex-1" : "w-full"}`}>
          <h1 className="text-2xl font-bold mb-6">Restaurant Menu</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {foods.map((food) => (
              <RestauCard
                key={food.id}
                food={food}
                onAdd={() => addToCart(food)}
              />
            ))}
          </div>
        </div>

        {/* SIDEBAR (DESKTOP ONLY) */}
        {hasCart && (
          <div className="w-80 shrink-0">
            <OrderSidebar />
          </div>
        )}
      </div>

      {/* MOBILE LAYOUT */}
      <div className="lg:hidden relative">
        {/* MENU */}
        <div onClick={isCartOpen ? closeCart : undefined}>
          <h1 className="text-2xl font-bold mb-6">Restaurant Menu</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {foods.map((food) => (
              <RestauCard
                key={food.id}
                food={food}
                onAdd={() => addToCart(food)}
              />
            ))}
          </div>
        </div>

        {/* BACKDROP */}
        {isCartOpen && (
          <div onClick={closeCart} className="fixed inset-0 bg-black/40 z-40" />
        )}

        {/* SIDEBAR (MOBILE DRAWER) */}
        {hasCart && isCartOpen && <OrderSidebar />}
      </div>
    </div>
  );
};

export default Menu;
