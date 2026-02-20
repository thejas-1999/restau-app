import type { Food } from "../constants/foods";

type Props = {
  food: Food;
  onAdd: () => void;
};

const RestauCard = ({ food, onAdd }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
      <img
        src={food.image}
        alt={food.name}
        className="h-50 w-full object-cover rounded-t-xl"
      />

      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg">{food.name}</h3>
        <p className="text-gray-600">₹{food.price}</p>
        <p className="text-sm">⭐ {food.rating}</p>

        <button
          onClick={onAdd}
          className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white py-1 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default RestauCard;
