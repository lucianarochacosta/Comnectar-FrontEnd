import { Button, Card, Grid, ListItem, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
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
                                <Typography variant="h4" align="center" className="tituloC1">Como agriculturas sustentáveis podem mudar o mundo?</Typography>
                                <Box marginTop={3}><ListItem divider></ListItem></Box>
                            </Box>
                        </Box>
                        <Box paddingRight={5} >
                            <Box>
                                <Typography variant="h6" align="justify" className="tituloC2">Produtos mais saudáveis!</Typography>
                            </Box>
                        </Box>
                        <Box paddingRight={5}>
                            <Box>
                                <Typography variant="h6" align="justify" className="tituloC2">Combate ao aquecimento global!</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Grid xs={12} container justifyContent="center" alignContent="center">
                    <Box paddingLeft={10} className="introC1">
                        <Typography variant="h4" align="center" className="tituloC1">Tipos de Agricultura</Typography>
                        <Box marginTop={3}><ListItem divider></ListItem></Box>
                    </Box>
                </Grid>

                <Grid container direction="row" className="cont-direita" xs={12}>
                    <Grid alignItems="center" xs={8}>
                        <Box paddingLeft={11} paddingRight={5}>
                            <Typography variant="h4" align="justify" className="subtituloC1">Orgânica</Typography>
                            <Typography variant="h6" align="justify" className="subtituloC2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quis suscipit laborum culpa modi quia nobis tenetur? Eaque et, veniam rerum minima similique provident error! Est officiis dolorem dignissimos numquam!</Typography>
                        </Box>
                    </Grid>
                    <Grid xs={4}>
                        <Box paddingRight={8}>
                            <Card className="cardC1"></Card>
                        </Box>
                    </Grid>

                    <Grid container direction="row-reverse" justifyContent="center" alignContent="center" className="cont-esquerda" xs={12}>
                        <Grid xs={8}>
                            <Box paddingRight={11} paddingLeft={3}>
                                <Typography variant="h4" align="justify" className="subtituloC1">Familiar</Typography>
                                <Typography variant="h6" align="justify" className="subtituloC2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nulla aliquid delectus deleniti possimus vero architecto eligendi quisquam dolores! Laborum cumque dicta ipsum explicabo totam qui minima iste eos pariatur.</Typography>
                            </Box>
                        </Grid>
                        <Grid alignItems="center" xs={4}>
                            <Box paddingLeft={10}>
                                <Card className="cardC2"></Card>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" className="cont-direita" xs={12}>
                        <Grid alignItems="center" xs={8}>
                            <Box paddingLeft={11} paddingRight={5}>
                                <Typography variant="h4" align="justify" className="subtituloC1">Agroecológica</Typography>
                                <Typography variant="h6" align="justify" className="subtituloC2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nam ipsum mollitia adipisci odio veritatis alias! Adipisci, magni inventore repellendus aut natus eaque. Corporis, odit libero maxime vitae velit consequatur.</Typography>
                            </Box>
                        </Grid>
                        <Grid xs={4}>
                            <Box paddingRight={10}>
                                <Card className="cardC3"></Card>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container direction="row-reverse" justifyContent="center" alignContent="center" className="cont-esquerda" xs={12}>
                        <Grid alignItems="center" xs={8}>
                            <Box paddingRight={11} paddingLeft={3}>
                                <Typography variant="h4" align="justify" className="subtituloC1">Sintrópica</Typography>
                                <Typography variant="h6" align="justify" className="subtituloC2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus officia voluptatem reprehenderit omnis animi aperiam nihil amet tempora nulla, doloribus reiciendis dolor tenetur corporis. Rem eaque tempore officiis exercitationem nemo.</Typography>
                            </Box>
                        </Grid>
                        <Grid xs={4}>
                            <Box paddingLeft={10}>
                                <Card className="cardC4"></Card>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid xs={12} container justifyContent="center" alignContent="center">
                        <Box paddingLeft={10} className="introC1">
                            <Typography variant="h4" align="center" className="tituloC1">Quer vender seus produtos com a gente?</Typography>
                            <Box marginTop={3}><ListItem divider></ListItem></Box>
                        </Box>

                        <Grid xs={8} justifyContent="center" alignItems="center">
                            <Box display="flex" justifyContent="center" >
                                <img src="https://i.imgur.com/01pfQT5.png" className="img2"></img>
                            </Box>
                        </Grid>

                        <Grid xs={4} justifyContent="center" alignItems="center">
                            <Box className="introC2" display="flex" justifyContent="flex-start"  paddingLeft={5}>
                                <Link to='/cadastrousuario' className='text-decorator-none'>
                                    <Button variant='contained' color='primary'>
                                        Cadastre-se
                                    </Button>
                                </Link>
                            </Box>
                            <Box className="introC1" display="flex" justifyContent="flex-start"  paddingLeft={5}>
                                <Link to='/contato' className='text-decorator-none'>
                                    <Button variant='contained' color='primary'>
                                        Envie a sua dúvida
                                    </Button>
                                </Link>
                            </Box>
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>
        </>
    )
}

export default ComnecteSe;
