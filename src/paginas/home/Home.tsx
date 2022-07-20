import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import './Home.css';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { TokenState } from "../../store/tokens/tokensReducer";

function Home() {
    var homeComponent;

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    if (token !== "") {
        homeComponent =
            <Grid container justifyContent="center" alignItems="center" className="background">
                <Grid xs={12}>
                    <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center" className="imgh1" gap="64px">
                        <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center" >
                            <Typography variant="h1" align="center" className="tituloh2">
                                Portal do Vendedor
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid container xs={12}>
                    <Grid xs={6}>
                        <Box paddingBottom={3} paddingTop={20} display="flex" alignItems="center" flexDirection="column" justifyContent="center">
                            <Link to="/registroProduto" className="text-decorator-none">
                                <Button variant='contained' className="botaoh3" color='primary'>Cadastrar Produtos</Button>
                            </Link>
                        </Box>
                        <Box paddingBottom={20} display="flex" alignItems="center" flexDirection="column" justifyContent="center">
                            <Link to="/cadastrocategoria" className="text-decorator-none">
                                <Button variant='contained' className="botaoh3" color='primary'>Cadastrar Categorias</Button>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid xs={6}>
                        <Box paddingBottom={3} paddingTop={20} display="flex" alignItems="center" flexDirection="column" justifyContent="center">
                            <Link to="/meusProdutos" className="text-decorator-none">
                                <Button variant='contained' className="botaoh3" color='primary'>Listar Produtos</Button>
                            </Link>
                        </Box>
                        <Box paddingBottom={20} display="flex" alignItems="center" flexDirection="column" justifyContent="center">
                            <Link to="/categorias" className="text-decorator-none">
                                <Button variant='contained' className="botaoh3" color='primary'>Listar Categorias</Button>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
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
                    <Box alignItems="center" justifyContent="center" display="flex">
                        <img className="imgLogoH" src="https://i.imgur.com/gDNJDRe.png"></img>
                    </Box>
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
                                Sou Produtore
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