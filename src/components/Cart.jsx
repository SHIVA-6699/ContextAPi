import { useContext, useState } from "react";
import { CartContext } from "../Context/CartApi";

const Cart = () => {
  const [item, setItem] = useState({ item: "", price: "", quntity: "" });
  const {addItems}=useContext(CartContext)
  function handleSubmit(e) {
    e.preventDefault();
    addItems(item);
    setItem({item:"",price:"",quntity:""})
  }
  return (
    <div>
      <h1>Add Cart Items</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Item Name:</label>
        <input
          type="text"
          onChange={(e) => setItem({ ...item, item: e.target.value })}
        />
        <label htmlFor="">Item Price</label>
        <input
          type="number"
          onChange={(e) => setItem({ ...item, price: e.target.value })}
        />
        <label htmlFor="">Item Quantity</label>
        <input
          type="number"
          name=""
          id=""
          onChange={(e) => setItem({ ...item, quntity: e.target.value })}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default Cart;
