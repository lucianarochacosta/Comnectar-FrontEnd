import { Button, Typography } from '@material-ui/core'
import { Box, Paper } from '@mui/material'
import React from 'react'
import Produto from '../../../models/Produto'
import "./CardProduto.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function CardProduto(props:Produto) {
  return (
    <Paper elevation={4} className="paperContainer">
      <FavoriteBorderIcon className="heart" />
      <Box className='flex-column principal-c' >
        <Box className='image-c' style={{ backgroundImage:`url(${props.fotoProduto!==null ? props.fotoProduto : ""})`}}>
        </Box>
        <Box className="p-l">
          <Typography variant='h2' className='nomeProduto'>
            {props.nomeProduto}
          </Typography>
          <Typography variant="h5" className='categoria'>
            {props.categoria?.classeCategoria+"-"+props.categoria?.modProdCategoria}
          </Typography>
        </Box>
        <Box className='p-l' display="flex" >
          <Box style={{flex: 1}} className="flex-center">
            <Typography variant='h2' className='preco'>
                R$ {props.precoProduto.toFixed(2)}
            </Typography>
          </Box>
          <Button className="btn" color="secondary" variant="contained" classes={{root:".MuiButton-root"}}> 
            <AddShoppingCartIcon style={{marginRight:"4px"}} /> Comprar
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}

export default CardProduto