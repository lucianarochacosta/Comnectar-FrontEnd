import { Button, Typography } from '@material-ui/core'
import { Box, Paper } from '@mui/material'
import React from 'react'
import Produto from '../../../models/Produto'
import "./CardProduto.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function CardProduto(props:Produto) {
  return (
    <Paper elevation={4} style={{borderRadius:"8px", position:"relative"}}>
      <FavoriteBorderIcon style={{position:"absolute", right:"16px", top:"16px", fontSize:"32px", color:"#7C6F64"}}/>
      <Box display="flex" gap="24px" flexDirection="column" padding="24px 0 12px 12px">
        <Box width="194px" height="135px">
          <img src="https://i.imgur.com/8ajl3MK.png" alt="Banana" style={{width: "100%", height:"auto"}} />
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
           <Typography variant='h2' style={{fontSize: "20px", fontWeight:"bold", color:"#5FA974" }}>
              R$ 4,50
          </Typography>
            </Box>
          <Button className="btn" color="secondary" variant="contained" style={{flex: 1, fontSize:"16px", color:"white", height:"48px"}}  classes={{root:".MuiButton-root"}}> 
          <AddShoppingCartIcon style={{marginRight:"4px"}} /> Comprar
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}

export default CardProduto