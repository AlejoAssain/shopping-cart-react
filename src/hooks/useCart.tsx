import { useState } from "react";

import Item from "../interfaces/item.interface";
import ItemInCart from "../interfaces/item-in-cart.interface";
import CartState from "../interfaces/cart-state.interface";


const useCart = () => {
  const [ cart, setCart ] = useState<CartState>({
    items: [],
    isCartVisible: false
  });

  const addItemToCart = (item: Item) => {

    // check if the item is already in the cart
    if (cart.items.find(i => i.id === item.id)) {

      // sum 1 to the amount of the item added
      const newItemsInCart = cart.items.map(i => {
        if (i.id === item.id) {
          return {...i, amount: i.amount + 1};
        }

        return i;
      });

      setCart({
        ...cart,
        items: newItemsInCart
      });

      console.log(cart);

    // if the item is not in the cart, add it to the cart with an amount of 1
    } else {
      const newItemInCart : ItemInCart = {
        ...item,
        amount: 1
      }

      setCart({
        ...cart,
        items: [...cart.items, newItemInCart],
      });
    }

    console.log(cart);
    
  };

  const changeCartVisibility = () => {
    setCart({
      ...cart,
      isCartVisible: !cart.isCartVisible
    });
  };

  return {
    cart: cart, 
    addItemToCart: addItemToCart, 
    changeCartVisibility: changeCartVisibility
  };
}

export default useCart;
