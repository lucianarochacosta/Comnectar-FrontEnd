import { Button, Typography } from '@material-ui/core'
import { Box, Paper } from '@mui/material'
import React from 'react'
import "./CardCategoria.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Categoria from '../../../models/Categoria'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function CardCategoria(props: Categoria) {

    const token= useSelector<TokenState,TokenState["tokens"]>(
        (state) => state.tokens
        );
    if(token !== ""){   
    return (
        <Paper elevation={4} style={{ borderRadius: "8px", position: "relative", height: "296px" }}>
            <FavoriteBorderIcon style={{ position: "absolute", right: "12px", top: "12px", fontSize: "32px", color: "#7C6F64", background: "#fff", padding: "2px", borderRadius: "4px" }} />
            <Box display="flex" gap="24px" flexDirection="column" width="228px" paddingBottom="12px" >
                <Box height="135px" style={{ height: "140px", backgroundSize: "cover", borderRadius: "8px 8px 0px 0px" }}>

                </Box>
                <Box style={{ paddingLeft: "12px" }}>
                    <Typography variant='h2' style={{ fontSize: "22px", fontWeight: "bold", color: "40352C" }}>
                        {props.classeCategoria}
                    </Typography>
                    <Typography variant="h5" style={{ fontSize: "16px", color: "#7C6F64" }}>
                    {props.modProdCategoria} 
                    </Typography>
                    <Typography variant="h5" style={{ fontSize: "16px", color: "#7C6F64" }}>
                    {props.frescorCategoria==true ? "Fresco":"XPTO"}
                    </Typography>
                </Box>
                <Box style={{ paddingLeft: "12px" }} display="flex" >
                    <Box style={{ flex: 1 }} display="flex" alignItems="center">
                        <Link to={`/cadastrocategoria/${props.id}`} className="text-decorator-none">
                            <Box mx={1}>
                                <Button variant="contained" className="marginLeft, botao1" size='small' >
                                    Atualizar
                                </Button>
                            </Box>
                        </Link>
                        <Link to={`/deletarcategoria/${props.id}`} className="text-decorator-none">
                            <Box mx={1}>
                                <Button variant="contained" size='small' color="secondary" className="botao2">
                                    Deletar
                                </Button>
                            </Box>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}
else{
    return (
        <Paper elevation={4} style={{ borderRadius: "8px", position: "relative", height: "296px" }}>
            <FavoriteBorderIcon style={{ position: "absolute", right: "12px", top: "12px", fontSize: "32px", color: "#7C6F64", background: "#fff", padding: "2px", borderRadius: "4px" }} />
            <Box display="flex" gap="24px" flexDirection="column" width="228px" paddingBottom="12px" >
                <Box height="135px" style={{ height: "140px", backgroundSize: "cover", borderRadius: "8px 8px 0px 0px" }}>

                </Box>
                <Box style={{ paddingLeft: "12px" }}>
                    <Typography variant='h2' style={{ fontSize: "22px", fontWeight: "bold", color: "40352C" }}>
                        {props.classeCategoria}
                    </Typography>
                    <Typography variant="h5" style={{ fontSize: "16px", color: "#7C6F64" }}>
                    {props.modProdCategoria} 
                    </Typography>
                    <Typography variant="h5" style={{ fontSize: "16px", color: "#7C6F64" }}>
                    {props.frescorCategoria==true ? "Fresco":"XPTO"} 
                    </Typography>
                </Box>
                <Box style={{ paddingLeft: "12px" }} display="flex" >
                    <Box style={{ flex: 1 }} display="flex" justifyContent="center">
                        <Link to={`/cadastrocategoria/${props.id}`} className="text-decorator-none">
                            <Box mx={1}>
                                <Button variant="contained" className="marginLeft, botao1" size='small' >
                                    Listar Produtos
                                </Button>
                            </Box>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}
}
export default CardCategoria