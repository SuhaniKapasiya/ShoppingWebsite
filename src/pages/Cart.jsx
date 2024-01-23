import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
 
   const {cart} = useSelector((state) => state)
  const [totalAmount,setTotalAmount] = useState(0);  
 
 useEffect(()=>{
  setTotalAmount(cart.reduce((acc, curr) => acc + curr.price,0));
 },[cart]) ;

  return (
    <div className=" flex  justify-around">
      <div className="">
        {cart.length > 0 ? (
          <div>
            <div>
              {cart.map((item, index) => {
                return <CartItem key={item.id} item={item} itemIndex={index} />;
              })}
            </div>
          </div>
        ) : (
          <div>
            <h1>Cart Empty</h1>
            <Link to={"/"}>
              <button>Shop Now</button>
            </Link>
          </div>
        )}
      </div>

      <div className="">
        <div>
          <div className="text-green-700 font-semibold text-sm">Your CART</div>
          <div className="text-green-700 font-extrabold text-4xl">SUMMARY</div>
          <p className="text-black text-bold">
            <span>Total Item : {cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col">
          <p>
            Total Amount :
            <span className="text-dark-black">${totalAmount.toFixed(2)}</span>
          </p>
          <button className="bg-green-700 text-white px-20 py-2 mt-4 rounded-md">
            CheckOut Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
