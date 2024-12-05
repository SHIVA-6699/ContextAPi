import { createContext, useEffect, useState } from "react";

export const ContextApi = createContext();

const ThemeProvider = ({ children }) => {
  const [imageList, setImageList] = useState([]);
  useEffect(() => {
    async function handleData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/photos");
      const response = await data.json();
      setImageList(response.slice(0, 10));
    }
    handleData();
  }, []);
  return (
    <>
      <ContextApi.Provider value={imageList}>{children}</ContextApi.Provider>
    </>
  );
};

export default ThemeProvider;
