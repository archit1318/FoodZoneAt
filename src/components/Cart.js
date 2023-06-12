
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="font-bold text-3xl" >
      <h1>Cart items -{cartItems.length}</h1>
    </div>
  );
};
export default Cart;
