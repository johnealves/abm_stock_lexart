import React, { useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);

  const value = {
    productsList,
    setProductsList,
  }

  return (
    <Context.Provider value={ value }>
      { children }
    </Context.Provider>
  )
}

export default Provider;
