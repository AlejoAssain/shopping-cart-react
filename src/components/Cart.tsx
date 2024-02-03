import CartState from "../interfaces/cart-state.interface";
import BubbleAlert from "./BubbleAlert"
import CartDetails from "./CartDetails"


type Props = {
  cart: CartState;
  changeCartVisibility: () => {};
  isCartVisible: boolean; 
}

const Cart = (props: Props) => {
  const { cart, changeCartVisibility, isCartVisible } = props;
  // using the reduce function calculate the total amount of items of the cart
  const totalCartAmount = cart.items.reduce((acc, item) => acc + item.amount, 0)
  
  return (
    <div>
    <span className="bubble">
      {totalCartAmount !== 0 ? (<BubbleAlert value={totalCartAmount}/>) : ""}
    </span>
    <button className="cart" onClick={changeCartVisibility}>
        Cart
    </button>
      {isCartVisible ? (<CartDetails cart={cart}/>) : null }
    </div>
  )
}

export default Cart;