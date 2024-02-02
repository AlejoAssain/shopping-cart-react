import CartState from "../interfaces/cart-state.interface";


type Props = {
  cart: CartState;
};

const CartDetails = (props: Props) => {

  return (
    <div className="cart-details">
      <ul className="cart-list">
        {props.cart.items.map(x => (
          <li key={x.name} className="cart-item">
            <img alt={x.name} src={x.img} width="50" height="32"></img>
            {x.name} <span>{x.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default CartDetails;