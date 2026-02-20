import RestauCard from "./RestauCard";
import * as foodsModule from "../constants/foods";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const { foods } = foodsModule;
  const { cart, addToCart } = useCart();
  const navigate = useNavigate();

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 py-6 pb-32 animate-fade-in">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {foods.map((food) => (
          <div
            key={food.id}
            className="transform transition hover:-translate-y-1 hover:scale-[1.01]"
          >
            <RestauCard food={food} onAdd={() => addToCart(food)} />
          </div>
        ))}
      </div>

      {totalCount > 0 && (
        <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50 animate-pop-in">
          <button
            onClick={() => navigate("/orders")}
            className="w-[90%] sm:w-auto cursor-pointer bg-green-800 hover:bg-green-900 active:scale-95 text-white px-8 py-3 rounded-full shadow-xl font-semibold transition-all"
          >
            View Orders ({totalCount})
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
