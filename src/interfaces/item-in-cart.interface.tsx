import Item from "./item.interface";

interface ItemInCart extends Item {
  amount: number;
}

export default ItemInCart;