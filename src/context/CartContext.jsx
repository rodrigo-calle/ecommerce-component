import React, { useState, createContext, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initalState = [];

  const [cartList, setCartList] = useState(initalState);

  const valuesToPass = {
    cartList,
    setCartList,
  };
  return (
    <CartContext.Provider value={valuesToPass}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext is generating an errorr');
  }
  return context;
};
