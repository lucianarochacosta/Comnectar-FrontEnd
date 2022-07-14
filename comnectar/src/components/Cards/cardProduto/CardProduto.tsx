import { Button, Typography } from '@material-ui/core'
import { Box, Paper } from '@mui/material'
import React from 'react'
import Produto from '../../../models/Produto'
import "./CardProduto.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function CardProduto(props:Produto) {
  return (
    <Paper elevation={4} style={{borderRadius:"8px", position:"relative", height:"296px"}}>
      <FavoriteBorderIcon style={{position:"absolute", right:"12px", top:"12px", fontSize:"32px", borderRadius:"4px", color:"white"}}/>
      <Box display="flex" gap="24px" flexDirection="column" width="228px" paddingBottom="12px" >
        <Box  height="135px" style={{height:"140px", backgroundImage:`url(${props.fotoProduto!==null ? props.fotoProduto : ""})`, backgroundSize:"cover", borderRadius:"8px 8px 0px 0px"}}>
    
        </Box>
        <Box style={{paddingLeft:"12px"}}>
          <Typography variant='h2' style={{fontSize: "22px", fontWeight:"bold", color:"40352C"}}>
            {props.nomeProduto}
          </Typography>
          <Typography variant="h5" style={{fontSize:"16px", color:"#7C6F64"}}>
            {props.categoria?.classeCategoria+"-"+props.categoria?.modProdCategoria}
          </Typography>
        </Box>
        <Box style={{paddingLeft:"12px"}} display="flex" >
          <Box style={{flex: 1}} display="flex" alignItems="center">
           <Typography variant='h2' style={{fontSize: "20px", fontWeight:"bold", color:"#5FA974"}}>
              R$ {props.precoProduto.toFixed(2)}
          </Typography>
            </Box>
          <Button className="btn" color="secondary" variant="contained" style={{flex: 1, fontSize:"16px", color:"white", height:"48px", marginRight:"2px"}}  classes={{root:".MuiButton-root"}}> 
          <AddShoppingCartIcon style={{marginRight:"4px"}} /> Comprar
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}

export default CardProduto