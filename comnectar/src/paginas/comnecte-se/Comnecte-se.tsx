import { Grid, ListItem, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import './Comnecte-se.css';

function ComnecteSe() {
    return (
        <>
            <Grid container justifyContent="center" alignItems="center">

                <Grid xs={12} container justifyContent="center" alignContent="center" className=" background">
                    <Grid xs={4}>
                        <Box paddingLeft={10} className="introC1">
                            <img src="https://i.imgur.com/dWijvVX.jpg" className="img1" alt="Imagem - plantio" />
                        </Box>
                    </Grid>
                    <Grid xs={8}>
                        <Box paddingRight={10} className="introC1">
                            <Box>
                                <Typography variant="h4" align="center" className="tituloCC">Como agriculturas sustentáveis podem mudar o mundo?</Typography>
                                <Box marginTop={3}><ListItem divider></ListItem></Box>
                            </Box>
                        </Box>
                        <Box paddingRight={10} className="introC1">
                            <Box>
                                <Typography variant="h6" align="justify" className="tituloCC2">Produtos mais saudáveis!</Typography>
                            </Box>
                        </Box>
                        <Box paddingRight={10} className="introC1">
                            <Box>
                                <Typography variant="h6" align="justify" className="tituloCC2">Combate ao aquecimento global!</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export default ComnecteSe;
