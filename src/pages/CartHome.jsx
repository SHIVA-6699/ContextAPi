import Cart from "../components/Cart";
import GetCartItems from "../components/GetCartItems";

const CartHome = () => {
  return (
    <div className="" style={{padding:"10px"}}>
      <h2>CartHome</h2>
      <div style={{display:"flex",flexDirection:"column",gap:"2rem"}}>

      <Cart/>
      <GetCartItems/>
      </div>
    </div>
  );
}

export default CartHome