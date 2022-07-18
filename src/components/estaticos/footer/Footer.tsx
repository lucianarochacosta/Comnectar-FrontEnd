import React from 'react';
import './Footer.css';
import { Box } from '@mui/material';
import { Typography, Grid } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';


function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center" className="caixa1">
                            <Typography variant="h5" align="center" gutterBottom className='textos'>Apoio:</Typography>
                            <a href="https://brazil.generation.org/" target="_blank"><img src="https://i.imgur.com/CR6ivB0.png" alt="Logo da Generation" /></a>
                        </Box>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center" className="caixa2">
                            <Box>
                                <a target="_blank" href="https://comnectar.herokuapp.com/swagger-ui/index.html">
                                    <Typography variant="h5" align="center" gutterBottom className='textos link-hover'>Comnecte-se!</Typography>
                                </a>
                            </Box>
                            <Box>
                                <a href="https://github.com/andreiflancanova/Comnectar-BackEnd" target="_blank">
                                    <GitHub className='social' />
                                </a>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos'> © 2022 Copyright | Todos os Direitos Reservados</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Footer;