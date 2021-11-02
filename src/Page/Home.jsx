import React, { useContext, useEffect, useState } from "react";
import ItemStockLi from "../Component/ItemStockLi";
import productsMock from "../products";
import api from "../Services/api";
import "../Css/home.css";
import { Button, List, ListItem } from "@material-ui/core";
import Context from "../Context/Context";

const Home = () => {
  const { productsList, setProductsList } = useContext(Context);

  useEffect(() => {
    setProductsList(productsMock)
    // api.get("/stock")
    //   .then(resp => setProducts(resp.data))
    //   .catch(err => console.log(`erro: ${err.message}`))
  })

  return(
    <div>
      <List>
        <ListItem>
          <span>_id</span>
          <span>Quantity</span>
          <span>Product name</span>
          <span>Price</span>
        </ListItem>
        { productsList.map((item, i) => <ItemStockLi item={ item } key={ i } />) }
      </List>
    </div>
  )
}

export default Home;