<<<<<<< HEAD
import { Box, Button } from "@mui/material";
import {Card, CardActions, CardContent, Typography} from "@material-ui/core"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Produto from "../../../models/Produto";
import { busca } from "../../../service/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";

function ListaProduto(){

    const [produtos, setProdutos] = useState<Produto[]>([])

    const token= useSelector<TokenState,TokenState["tokens"]>(
      (state) => state.tokens
      );

    let navigate = useNavigate();
  
    useEffect(() =>{
      if(token ===''){
        alert("Você precisa estar logado!")
        navigate("/login")
      }
    },[token])

    async function getProdutos() {
        await busca("/produtos", setProdutos, {
          headers: {
            'Authorization': token
          }
        })
      }

      useEffect(() => {

        getProdutos()
    
      }, [produtos.length])

    return (
        <>
                  {
        produtos.map(produto=> (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Postagens
                </Typography>
                <Typography variant="h5" component="h2">
                  {produto.nomeProduto}
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.infoProduto}
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.categoria?.classeCategoria}
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.categoria?.modProdCategoria}
                </Typography>
                <Typography variant="body2" component="p">
                  {produto.categoria?.frescorCategoria}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${produto.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        Alterar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${produto.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        Deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
        </>
    )
}

export default ListaProduto;
=======
import React from 'react'

function ListaProduto() {
  return (
    <div>ListaProduto</div>
  )
}

export default ListaProduto
>>>>>>> 094bb997e96c86bf72f44be4fb656f1e670bcbd4
