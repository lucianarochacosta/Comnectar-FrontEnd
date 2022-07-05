import React from 'react';
import './Footer.css';
import { Box} from '@mui/material';
import {Typography, Grid} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

function Footer() {
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <a target="_blank" href="https://comnectar.herokuapp.com/swagger-ui/index.html">
                                <Typography variant="h5" align="center" gutterBottom className='textos link-hover'>Comnecte-se !</Typography>
                            </a>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center" gap="24px">
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                <LinkedInIcon className='social'/>
                            </a>
                            <a href="https://github.com/lucianarochacosta/Comnectar-FrontEnd" target="_blank">
                                <GitHub className='social'/>
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                <InstagramIcon className='social'/>
                            </a>                            
                            <a href="https://www.facebook.com/generationbrasil" target="_blank">
                                <FacebookIcon className='social'/>
                            </a>
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