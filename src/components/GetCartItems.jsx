import { useContext, useState } from "react";
import { CartContext } from "../Context/CartApi";
import EditCartitem from "./EditCartItem";

const GetCartItems = () => {
  const { cartitems, deleteItems, editItems } = useContext(CartContext);
  const [edit, setEdit] = useState(false);

  console.log(cartitems);
  function handleEdit() {
    setEdit(true);
  }
  function onClose()
  {
    setEdit(false)
  }
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {cartitems.map((item, value) => {
        return (
          <div
            key={value}
            style={{
              border: "1px solid red",
              width: "fit-content",
              padding: "10px",
            }}
          >
            <h3>{item.item}</h3>
            <div className="" style={{ display: "flex", columnGap: "1rem" }}>
              <p>Price : {item.price}</p>
              <p>Quantity : {item.quntity}</p>
            </div>
            <button onClick={() => deleteItems(item.id)}>Delete Item</button>
            <button onClick={() => handleEdit(item.id)}>Edit Item</button>
            {edit && (
              <div
                className=""
                style={{
                  position: "absolute",
                  
                  top: "0",
                  left: "0",
                  background: "black",
                  opacity: "0.5",
                }}
              >
                <EditCartitem data={item} onClose={onClose} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default GetCartItems;
