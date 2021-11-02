import React, { useEffect, useState } from "react";
import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import { Box } from "@material-ui/system";
import api from "../Services/api";

const Home = () => {
  const [itens, setItens] = useState();

  useEffect(() => {
    api.get("/stock")
      .then(resp => setItens(resp.data))
      .catch(err => console.log(`erro: ${err.message}`))
  })

  return(
    <div>
      <ul>
        list
      </ul>
    </div>
  )
}

export default Home;