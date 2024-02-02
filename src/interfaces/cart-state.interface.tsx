import ItemInCart from "./item-in-cart.interface";

interface CartState {
  items: ItemInCart[];
  isCartVisible: boolean;
};

export default CartState;
