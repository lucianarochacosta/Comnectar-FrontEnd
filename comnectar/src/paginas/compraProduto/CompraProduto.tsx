import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './CompraProduto.css';
import ListaProduto from '../../components/produtos/listaProduto/ListaProduto'
import { Box } from '@mui/material';
import CardProduto from '../../components/Cards/cardProduto/CardProduto';
import { busca } from '../../service/Service';
import Produto from '../../models/Produto';

function CompraProduto() {
  const [produtos, setProdutos] = useState<Produto[]>([])

  async function getProdutos() {
    await busca("/produtos", setProdutos, {
        headers: {
            'Authorization': ""
        }
    })
  };

  useEffect(() => {

    getProdutos()

  }, [produtos.length])
  return (
    <>
      <Grid container className="topoCompra">
        <Grid item xs={12}>
        <Box display="flex" flexDirection="column" gap="48px" justifyContent="center">
        <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center" className="boxTopoCompra" gap="64px">
          <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center" className="blurCompra" >
            <Typography variant="h1" align="center" className="tituloCompra">
              Nossos produtos
            </Typography>
          </Box>
        </Box>   
        <Box display="flex" className="boxBusca" alignItems="center" justifyContent="center">
          <Box display="flex" justifyContent="center">
          <Box display="flex" className="caixaBusca">
            <TextField label="O que você precisa?" type="search" />
          </Box>
          <Button className="botaoBusca">
            Buscar
          </Button>
        </Box>
          </Box>
        <Box display="flex" alignItems="center" flexDirection="row" className="boxProdutos" paddingLeft="24px" marginBottom="48px">          
        <ListaProduto />
        </Box>
        </Box> 
        </Grid>
      </Grid>
    </>
  )
}

export default CompraProduto