import { Paper, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import Produto from '../../models/Produto'

function CardDeletar(props: Produto) {
  return (
   
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

    </Box>
)
  }

export default CardDeletar