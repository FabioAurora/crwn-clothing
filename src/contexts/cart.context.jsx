import { createContext, useState } from "react";
import CartItem from "../Components/CartItem/CartItem";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(CartItem => CartItem.id === productToAdd.id)
  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map(CartItem => CartItem.id === productToAdd.id
      ? {...CartItem, quantity: CartItem.quantity + 1}
      : CartItem
      );
  };
  // return new array with modified cartItems/ new cart item
  //[{...productToAdd, quantity: 1}]
  return [...cartItems, {...productToAdd, quantity: 1}];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
