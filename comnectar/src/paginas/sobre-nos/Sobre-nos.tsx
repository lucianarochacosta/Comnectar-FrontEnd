import React from "react";
import { Grid, Button, Typography, Paper } from "@material-ui/core";
import { Box } from "@mui/material";
import './Sobre-nos.css';

function SobreNos() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="background">
                <Grid container direction="row" justifyContent="center" alignContent="center" className="cont-direita">
                    <Grid alignItems="center" xs={10}>
                        <Box paddingX={10}>
                            <h2 className="subtitulo1">Quem somos?</h2>
                            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quasi quisquam recusandae nobis, non harum rerum vitae aliquam? Provident assumenda itaque non aliquid iusto sapiente omnis sunt eveniet similique a.</h3>
                        </Box>
                    </Grid>
                    <Grid xs={2}>
                        <Box>
                            <img src="https://i.imgur.com/GbADBfw.png" className="imagem1" />
                        </Box>

                    </Grid>
                </Grid>
                <Grid container direction="row-reverse" justifyContent="center" alignContent="center" className="cont-esquerda">
                    <Grid xs={10}>
                        <Box paddingX={10}>
                            <h2 className="subtitulo1">Por que utilizar a nossa plataforma?</h2>
                            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quasi quisquam recusandae nobis, non harum rerum vitae aliquam? Provident assumenda itaque non aliquid iusto sapiente omnis sunt eveniet similique a.</h3>
                        </Box>
                    </Grid>
                    <Grid alignItems="center" xs={2}>
                        <Box paddingX={10} >
                            <img src="https://i.imgur.com/NtwAHwT.png" className="imagem1" />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container direction="row" className="cont-direita" >
                    <Grid alignItems="center" xs={10}>
                        <Box paddingX={10}>
                            <h2 className="subtitulo1">Como surgiu a ideia?</h2>
                            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quasi quisquam recusandae nobis, non harum rerum vitae aliquam? Provident assumenda itaque non aliquid iusto sapiente omnis sunt eveniet similique a.</h3>
                        </Box>
                    </Grid>
                    <Grid xs={2}>
                        <Box>
                            <img src="https://i.imgur.com/BbEoAQA.png" className="imagem1" />
                        </Box>
                    </Grid>
                    <Grid container direction="row-reverse" justifyContent="center" alignContent="center" className="cont-esquerda">
                        <Grid alignItems="center" xs={10}>
                            <Box paddingX={10}>
                                <h2 className="subtitulo1">ODS 13</h2>
                                <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quasi quisquam recusandae nobis, non harum rerum vitae aliquam? Provident assumenda itaque non aliquid iusto sapiente omnis sunt eveniet similique a.</h3>
                            </Box>
                        </Grid>
                        <Grid xs={2}>
                            <Box paddingX={10}>
                                <img src="https://i.imgur.com/zYF6iYb.png" className="imagem1" />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default SobreNos;