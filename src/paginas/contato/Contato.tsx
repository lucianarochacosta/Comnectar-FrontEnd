import { Button, Card, Grid, ListItem, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React, { ChangeEvent } from "react";
import './Contato.css'

function Contato() {

    return (
        <>
            <Grid container justifyContent='center' alignItems='center' className="background">
                <Grid alignItems="center">
                    <Box width='100%' height='100%' display={'flex'} alignItems='center' paddingLeft={'10%'} >
                        <form action="https://formspree.io/f/xknyleeg" method="POST" target="_blank">

                            <Grid xs={12} className="intro-C">
                                <Box>
                                    <Typography variant="h3" align="center" className="tituloC">Entre em contato</Typography>
                                    <Typography variant="h5" align="center" className="tituloC2">Preencha os campos abaixo:</Typography>
                                    <Box marginTop={3} paddingX={10}><ListItem divider></ListItem></Box>
                                </Box>
                            </Grid>
                            <Box className="intro-C">
                                <TextField name="nome" type="name" id='nome' label='Insira o seu nome completo' variant='outlined' margin='normal' fullWidth />
                                <TextField name="email" type="email" id='email' label='Insira o seu e-mail' variant='outlined' margin='normal' fullWidth />
                                <TextField name="mensagem" type="name" id='mensagem' label='Escreva a mensagem' variant='outlined' margin='normal' fullWidth className="tamanho" />
                                <Box marginTop={2} textAlign='center'>
                                    <Button type='submit' variant='contained'className="botaoCmnts" color='primary'>
                                        Enviar
                                    </Button>
                                </Box>
                                <Box paddingX={10} alignItems="center" justifyContent="center" >
                                    <Card className="cardCont"></Card>
                                </Box>
                            </Box>
                        </form>
                    </Box>
                </Grid>

            </Grid>
        </>
    )
}

export default Contato;