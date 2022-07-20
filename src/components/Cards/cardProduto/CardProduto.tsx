import { Button, Typography } from '@material-ui/core'
import { Box, Paper } from '@mui/material'
import React, { useState } from 'react'
import Produto from '../../../models/Produto'
import "./CardProduto.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Link } from 'react-router-dom'

function CardProduto(props:Produto) {
  const [favorite, setFavorite] = useState(false)
  const favoritar = ()=>{
    setFavorite(!favorite)
  }
  if(props.token == ""){
  return (
    <Paper elevation={4} className="paperContainer">
      {!favorite? <FavoriteBorderIcon className="heart" onClick={()=>favoritar()} /> : <FavoriteOutlinedIcon className="heart2" onClick={()=>favoritar()}/>}
      
      <Box className='flex-column principal-c' >
        <Box className='image-c' style={{ backgroundImage:`url(${props.fotoProduto!==null ? props.fotoProduto : ""})`}}>
        </Box>
        <Box className="p-l">
          <Typography variant='h2' className='nomeProduto'>
            {props.nomeProduto}
          </Typography>
          <Typography variant="h5" className='categoria'>
            {props.categoria?.classeCategoria+" "+props.categoria?.modProdCategoria}
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
}else{
  return(
    <Paper elevation={4} className="paperContainer2">
    {!favorite? <FavoriteBorderIcon className="heart" onClick={()=>favoritar()} /> : <FavoriteOutlinedIcon className="heart2" onClick={()=>favoritar()}/>}
    <Box className='flex-column principal-c' >
      <Box className='image-c' style={{ backgroundImage:`url(${props.fotoProduto!==null ? props.fotoProduto : ""})`}}>
      </Box>
      <Box className="p-l">
        <Typography variant='h2' className='nomeProduto'>
          {props.nomeProduto}
        </Typography>
        <Typography variant="h5" className='categoria'>
          {props.categoria?.classeCategoria+" "+props.categoria?.modProdCategoria}
        </Typography>
        <Typography variant="h5" className='preco'>
          <span>R$ </span>{props.precoProduto.toFixed(2)}
        </Typography>
      </Box>
      <Box className='p-l' display="flex" gap="12px">
        <Box className="flex-center">
        <Link to={`/atualizarProduto/${props.id}`} >
          <Button  color="secondary" variant="contained"> 
            Atualizar
          </Button>
        </Link>
        </Box>
        <Link to={`/deletaProduto/${props.id}`} >
        <Button  variant="contained" className="btnDeletar" style={{width:"100%"}}> 
          Deletar
        </Button>
        </Link>
      </Box>
    </Box>
  </Paper>
)
}
}

export default CardProduto