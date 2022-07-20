import { Button, Card, CardActions, CardContent, Grid } from "@material-ui/core";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Categoria from "../../../models/Categoria";
import { busca } from "../../../service/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import CardCategoria from "../../Cards/cardCategoria/CardCategoria";

function ListaCategoria() {

  const [categorias, setCategorias] = useState<Categoria[]>([])

  let navigate = useNavigate()

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  async function getCategorias() {
    await busca(`/categorias`, setCategorias, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getCategorias()
  }, [categorias.length])

    return (
      <>
        <Box display = "flex" flexWrap="wrap" gap="48px">
        {categorias.map(categoria =>{
            return ( <CardCategoria key={categoria.id}
              id={categoria.id}
              classeCategoria={categoria.classeCategoria}
              modProdCategoria={categoria.modProdCategoria}
              frescorCategoria={categoria.frescorCategoria}
            />)
          })}
          </Box>
      </>
    )

}


export default ListaCategoria;
