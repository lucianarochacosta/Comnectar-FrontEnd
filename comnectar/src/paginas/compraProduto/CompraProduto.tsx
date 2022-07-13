import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import './CompraProduto.css';
import ListaProduto from '../../components/produtos/listaProduto/ListaProduto'
import { Box } from '@mui/material';

function CompraProduto() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" className="topoCompra">
        <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center" className="boxTopoCompra">
          <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center" className="blurCompra">
            <Typography variant="h1" align="center" className="tituloCompra">
              Nossos produtos
            </Typography>
          </Box>
        </Box>
        <Box display="flex" className="boxBusca" alignItems="center">
          <Box display="flex" flexDirection="column" className="caixaBusca">
            <TextField label="O que você precisa?" type="search" />
          </Box>
          <Button className="botaoBusca">
            Buscar
          </Button>
        </Box>       
        <Box display="flex" alignItems="center" flexDirection="row" className="boxProdutos">          
            <ListaProduto />        
        </Box>  
      </Grid>
    </>
  )
}

export default CompraProduto