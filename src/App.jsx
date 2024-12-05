import { useContext, useEffect, useRef, useState } from "react";
import Context from "./ContextApi";
import { ContextApi } from "./Context/DataFetchApi";
function App() {
  const url = "https://picsum.photos/200/300";
  const [index, setIndex] = useState(0);
  const value=useContext(ContextApi);
  console.log(value)
  return(
    <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"space-evenly"}}>
    {value.map((value,index)=>{
      return (
        <div key={index}>
          <img src={value.url} width={300} height={300} />
          <h3>{value.title}</h3>
        </div>
      );
    })}
    </div>
  )
}
export default App;
