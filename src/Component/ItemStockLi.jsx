import React, { useContext } from "react";
import { Button, ListItem } from "@material-ui/core";
import Context from "../Context/Context";
import "../Css/itemStockLi.css"

const ItemStockLi = ({ item }) => {
  const { productsList } = useContext(Context);

  const handleDeleteItem = () => {
    console.log(typeof productsList)
    
  }

  return(
    <ListItem>
      <span>{ item._id }</span>
      <span>{ item.quantity }</span>
      <span>{ item.product.name }</span>
      <span>{ item.price }</span>
      <Button 
        variant="contained"
        sx={{ background: "#6D767E", m: 0.5 }}
      >
        Select
      </Button>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#DB2943", m: 0.5 }}
        onClick={ handleDeleteItem }
      >
        Delete
      </Button>
    </ListItem>
  )
}

export default ItemStockLi