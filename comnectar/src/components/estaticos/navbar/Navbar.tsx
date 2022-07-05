import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import {Link} from 'react-router-dom';
import "./Navbar.css";
function Navbar() {
    return (
        <>
            <AppBar position="static" >
                <Toolbar variant="dense" className="Menu">
                    <Grid container justifyContent="space-between">
                        <Box display="flex" justifyContent="flex-start" alignItems="center">
                        <Link to='/home' className='text-decorator-none'>
                            <Box className="MenuPagesComnectar">
                                <Typography variant="h3" color="inherit" className="BlogTitle">
                                    COMNECTAR
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/home' className='text-decorator-none'>
                            <Box className="MenuPagesLeftBox">
                                <Typography variant="h5" color="inherit" className="MenuPagesFont">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/sobre-nos' className='text-decorator-none'>
                            <Box className="MenuPagesLeftBox">
                                <Typography variant="h5" color="inherit" className="MenuPagesFont">
                                    SOBRE
                                </Typography>
                            </Box>
                        </Link>
                        </Box>

                        <Box display="flex" justifyContent="flex-end" alignItems="center">
                        <Link to='/login' className='text-decorator-none'>
                            <Box className="MenuPagesRightBox">
                                <Typography variant="h5" color="inherit" className="MenuPagesFont">
                                    ENTRAR
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/cadastrar' className='text-decorator-none'>
                            <Box className="MenuPagesRightBox">
                                <Typography variant="h5" color="inherit" className="MenuPagesFont">
                                    CADASTRAR
                                </Typography>
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