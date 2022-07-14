import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import {Link} from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import "./Navbar.css";
function Navbar() {
    return (
        <>
            <AppBar position="fixed" >
                <Toolbar variant="dense" className="Menu">
                    <Grid container justifyContent="space-between">
                        <Box display="flex" justifyContent="flex-start" alignItems="center">
                        <Link to='/home' className='text-decorator-none'>
                            <Box className="MenuPagesComnectar">
                            <a>
                                <img src="https://i.imgur.com/dSw6Y80.png" title="source: imgur.com" className='imglogo'/>
                            </a>
                            </Box>
                        </Link>
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center">
                        <Link to='/home' className='text-decorator-none'>
                            <Box className="MenuPagesCenterBox">
                                <Typography variant="h5" color="inherit" className="MenuPagesFont">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/sobre-nos' className='text-decorator-none'>
                            <Box className="MenuPagesCenterBox">
                                <Typography variant="h5" color="inherit" className="MenuPagesFont">
                                    Sobre
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/produtos' className='text-decorator-none'>
                            <Box className="MenuPagesCenterBox">
                                <Typography variant="h5" color="inherit" className="MenuPagesFont">
                                    Produtos
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/contato' className='text-decorator-none'>
                            <Box className="MenuPagesCenterBox">
                                <Typography variant="h5" color="inherit" className="MenuPagesFont">
                                    Contato
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/comnectese' className='text-decorator-none'>
                            <Box className="MenuPagesCenterBox">
                                <Typography variant="h5" color="inherit" className="MenuPagesFont">
                                    Comnecte-se
                                </Typography>
                            </Box>
                        </Link>
                        </Box>
                        

                        <Box display="flex" justifyContent="flex-end" alignItems="center">
                        <Link to='/login' className='text-decorator-none'>
                            <Box className="MenuPagesEntrar">
                                <Button variant="contained" endIcon={<ExitToAppIcon/>} className='botaoentrar'>
                                    Entrar
                                </Button>
                            </Box>
                        </Link>
                        <Link to='/cadastrousuario' className='text-decorator-none'>
                            <Box className="MenuPagesCadastrar">
                                <Button variant="outlined" className='botaocadastrar'>
                                    Cadastrar
                                </Button>
                            </Box>
                        </Link>
                        </Box>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;