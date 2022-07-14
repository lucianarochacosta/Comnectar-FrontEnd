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
      <Grid container className="topoCompra" justifyContent='center' alignItems="center">
        <Grid item xs={12}>
        <Box display="flex" flexDirection="column" gap="72px" justifyContent="center">
        <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center" className="boxTopoCompra" gap="64px">
          <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center" className="blurCompra" >
            <Typography variant="h1" align="center" className="tituloCompra">
              Nossos produtos
            </Typography>
          </Box>
        </Box>   
        <Grid item xs={12} style={{margin:"0 auto", width:"100%"}}>
        <Box width="80%" margin="0 auto" gap="48px" display="flex" flexDirection="column">
        <Box display="flex" flexDirection="column" className="boxBusca" gap="48px">
          <Typography variant="h2" className="title">
            Encontre o que você deseja:
          </Typography>
            <Box display="flex" >
              <Box display="flex" className="caixaBusca">
                <TextField label="O que você precisa?" type="search" fullWidth />
              </Box>
              <Button color="primary" variant="contained" className="botaoBusca">
                Buscar
              </Button>
            </Box>
          <Box display="flex" gap="8px" >
            <Button variant="outlined">FRUTAS</Button>
            <Button variant="outlined">LEGUMES</Button>
            <Button variant="outlined">VERDURAS</Button>
            <Button variant="outlined">VEGETAIS</Button>
            <Button variant="outlined">HORTALIÇAS</Button>
          </Box>
          </Box>
          <Box style={{height:"2px", background:"#D9D9D9"}}>

          </Box>
          <Box display="flex" flexDirection="row" className="boxProdutos" minHeight="512px"  marginBottom="72px">          
          <ListaProduto />
          </Box>
        </Box>
        </Grid>
        </Box> 
        </Grid>
      </Grid>
    </>
  )
}

export default CompraProduto