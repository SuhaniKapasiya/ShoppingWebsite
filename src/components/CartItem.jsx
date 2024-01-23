import toast from "react-hot-toast";
import { remove } from "../redux/Slices/CartSlice";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  return (
    <div className="mt-7">
      <div className="flex ">
        <div className="h-[180px] mr-4">
          <img
            src={item.image}
            className="h-full w-full object-cover rounded"
            alt={item.title}
          />
        </div>

        <div className="flex flex-col justify-between mb-6 ">
          <div>
            <h1 className="text-gray-700 font-semibold text-lg text-left truncate   w-72 mb-10 ">
              {item.title}
            </h1>
            <h1 className="w-40 text-gray-600 font-normal text-[10px] text-left mt-2">
              {item.description.split(" ").slice(0, 10).join(" ") + "..."}
            </h1>
          </div>
          <br></br>
          <div className="flex justify-between gap-5 mt-1 ">
            <div>
              <p className="text-green-600 font-semibold">${item.price}</p>
            </div>
            <div
              className="rounded-full bg-red-200 p-2 hover:bg-red-300"
              nClick={removeFromCart}
            >
              <RiDeleteBinLine className="text-red-500" />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t h-1 w-full my-4 border-gray-800" />
    </div>
  );
};

export default CartItem;
