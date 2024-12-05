import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({children}) => {
  const [cartitems, setCartitems] = useState(() => {
    const storedItems = localStorage.getItem("cart-items");
    return storedItems ? JSON.parse(storedItems) : [];
  });
  const addItems = (listitems) => {
    const {item, price, quntity}=listitems;
    if(item ==="" || price=="" || quntity==="") return
    setCartitems((prev) => [
      ...prev,
      {
        item: item,
        price: price,
        quntity: quntity,
        id: cartitems.length + 1,
      },
    ]);
};
useEffect(()=>{

    localStorage.setItem("cart-items",JSON.stringify(cartitems))
},[cartitems])
  const deleteItems = (id) => {
    const newItems = cartitems.filter((item) => item.id != id);
    setCartitems(newItems);
  };

  const editItems=(id,updatedItem)=>{
    console.log(updatedItem)
    setCartitems((prev) =>
      prev.map(
        (item) =>
          item.id === id
            ? {
                ...item, // Keep existing properties
                item: updatedItem.item, // Update title
                price: updatedItem.price, // Update price
                quntity: updatedItem.quntity, // Update quantity
              }
            : item // Return unchanged items
      )
    );
  }
  return (
     <CartContext.Provider value={{cartitems,addItems,deleteItems,editItems}}>
        {children}
     </CartContext.Provider>
  );
};

