import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import './Home.css';
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { TokenState } from "../../store/tokens/tokensReducer";
import ModalProduto from "../../components/produtos/modalProduto/ModalProduto";

function Home() {
    var homeComponent;

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    if (token !== "") {
        homeComponent =
            <Grid container justifyContent="center" alignItems="center" className="caixatop">
                <Box>
                    <Link to="/produtos" className="text-decorator-none">
                        <Button variant="outlined" className="botao" >Listar Produtos</Button>
                    </Link>
                    <Link to="/categorias" className="text-decorator-none">
                        <Button variant="outlined" className="botao">Listar Categorias</Button>
                    </Link>
                </Box>
                <Box>
                    <Link to="/registroProduto" className="text-decorator-none">
                        <Button variant="outlined" className="botao">Cadastrar Produtos</Button>
                    </Link>
                    <Link to="/cadastrocategoria" className="text-decorator-none">
                        <Button variant="outlined" className="botao">Cadastrar Categorias</Button>
                    </Link>
                </Box>
            </Grid>
    }

    else {
        homeComponent =
            <Grid container xs={12}>

                <Grid xs={12} justifyContent="center" alignItems="center" className="caixatop">
                   <Box alignItems="center" justifyContent="center" display="flex">
                        <Link to='/produtos' className='text-decorator-none'>
                            <Button className="botaoH1" variant="outlined">
                                Comprar
                            </Button>
                        </Link>
                    </Box>                    
                    <Box textAlign="end" className="boxfoto, tituloh1">
                        <Typography variant="h1" className="tituloh">
                            VOCÊ CONSOME.
                        </Typography>
                    </Box>
 
                </Grid>

                <Grid xs={12} justifyContent="center" alignItems="center" className="caixatop2">
                </Grid>

                <Grid xs={12} justifyContent="center" alignItems="center" className="caixatop3">
                    <Box textAlign="unset" className="boxfoto">
                        <Typography variant="h1" className="tituloh">
                            A GENTE RECUPERA.
                        </Typography>
                    </Box>
                    <Box alignItems="center" justifyContent="center" display="flex">
                        <Link to='/login' className='text-decorator-none'>
                            <Button className="botaoH2" variant="outlined">
                                Sou produtor
                            </Button>
                        </Link>
                    </Box> 
                </Grid>

            </Grid>
    }


    return (
        <>
            {homeComponent}
        </>
    );
}


export default Home;