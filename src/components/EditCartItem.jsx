import { useContext, useState } from "react";
import { CartContext } from "../Context/CartApi";

const EditCartitem = ({data,onClose}) => {
  const [item, setItem] = useState(data);
  const { editItems } = useContext(CartContext);
  
  function handleSubmit(e) {
    e.preventDefault();
    // addItems(item);
       editItems(item.id, item)

    setItem({ item: "", price: "", quntity: "" });
    onClose();
  }
  return (
    <div
      className=""
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignContent:"center",
        alignItems:"center"
      }}
    >
      <h1>Add Cart Items</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Item Name:</label>
        <input
          type="text"
          onChange={(e) => setItem({ ...item, item: e.target.value })}
          value={item.item}
        />
        <label htmlFor="">Item Price</label>
        <input
          type="number"
          onChange={(e) => setItem({ ...item, price: e.target.value })}
          value={item.price}
        />
        <label htmlFor="">Item Quantity</label>
        <input
          type="number"
          name=""
          value={item.quntity}
          id=""

          onChange={(e) => setItem({ ...item, quntity: e.target.value })}
        />
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
};

export default EditCartitem;
