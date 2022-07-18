import './Footer.css';
import { Box } from '@mui/material';
import { Typography, Grid } from '@material-ui/core';
import GitHub from '@material-ui/icons/GitHub';

function Footer() {
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="flex-end" justifyContent="flex-end" className="caixa1">
                            <a href="https://brazil.generation.org/" target="_blank"><img src="https://i.imgur.com/CR6ivB0.png" alt="Logo Generation"/></a>
                        </Box>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center" className="caixa2">
                            <Box>
                                <a href="https://github.com/lucianarochacosta/Comnectar-FrontEnd" target="_blank">
                                    <GitHub className='social'/>
                                </a>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos'>Comnectar © 2022 | Todos os Direitos Reservados</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Footer;
