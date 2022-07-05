import React from "react";
import { Grid, Typography, Card, ListItem } from "@material-ui/core";
import { Box } from "@mui/material";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import './SobreNos.css';

function SobreNos() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="background">

                <Grid xs={12} className="intro">
                    <Box>
                        <Typography variant="h3" align="center" className="titulo1">Sobre nós</Typography>
                        <Typography variant="h5" align="center" className="titulo2">Conheça a nossa história!</Typography>
                        <Box marginTop={3} paddingX={10}><ListItem divider></ListItem></Box>
                    </Box>
                </Grid>

                <Grid container direction="row" className="cont-direita" xs={12}>
                    <Grid alignItems="center" xs={8}>
                        <Box paddingLeft={10}>
                            <Typography variant="h4" align="justify" className="subtitulo1">Quem somos?</Typography>
                            <Typography variant="h6" align="justify" className="subtitulo2">Somos um e-commerce inspirado na ODS 13. Nossos objetivos consistem em incentivar a agricultura sustentável e promover a conexão entre o pequeno produtor e o consumidor interessado em uma vida mais saudável.</Typography>
                        </Box>
                    </Grid>
                    <Grid xs={4}>
                        <Box paddingX={10}>
                            <Card className="cardA"></Card>
                        </Box>

                    </Grid>
                </Grid>

                <Grid container direction="row-reverse" justifyContent="center" alignContent="center" className="cont-esquerda" xs={12}>
                    <Grid xs={8}>
                        <Box paddingRight={10}>
                            <Typography variant="h4" align="justify" className="subtitulo1">Por que utilizar a nossa plataforma?</Typography>
                            <Typography variant="h6" align="justify" className="subtitulo2">Ao utilizar a nossa plataforma, você contribui para que comerciantes responsáveis ganhem visibilidade. Desta forma, é possível promover uma vida mais saudável, incentivar o pequeno produtor e promover a agricultura sustentável.</Typography>
                        </Box>
                    </Grid>
                    <Grid alignItems="center" xs={4}>
                        <Box paddingLeft={10}>
                            <Card className="cardB"></Card>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container direction="row" className="cont-direita" xs={12}>
                    <Grid alignItems="center" xs={8}>
                        <Box paddingLeft={10}>
                            <Typography variant="h4" align="justify" className="subtitulo1">Como surgiu a ideia?</Typography>
                            <Typography variant="h6" align="justify" className="subtitulo2">A ideia surgiu durante o desenvolvimento do projeto integrador da turma 52 da Generation Brasil (Desenvolvedor Web Java Fullstack JR). Momento no qual os integrantes sentiram-se alinhados com os princípios da ODS 13.</Typography>
                        </Box>
                    </Grid>
                    <Grid xs={4}>
                        <Box paddingX={10}>
                            <Card className="cardC"></Card>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container direction="row-reverse" justifyContent="center" alignContent="center" className="cont-esquerda" xs={12}>
                    <Grid alignItems="center" xs={8}>
                        <Box paddingRight={10}>
                            <Typography variant="h4" align="justify" className="subtitulo1">ODS 13</Typography>
                            <Typography variant="h6" align="justify" className="subtitulo2">Os Objetivos de desenvolvimento sustentável são um apelo global com o intuito de erradicar a pobreza, proteger o clima e o meio ambiente, garantindo paz e prosperidade à população. A ODS 13 propõe a adoção de medidas para combater as alterações climáticas e seus impactos.</Typography>
                        </Box>
                    </Grid>
                    <Grid xs={4}>
                        <Box paddingLeft={10}>
                            <Card className="cardD"></Card>
                        </Box>
                    </Grid>
                </Grid>

                <Grid className="intro" xs={12}>
                    <Box>
                        <Typography variant="h3" align="center" className="titulo1">Quem somos nós</Typography>
                        <Typography variant="h5" align="center" className="titulo2">Nossa equipe de desenvolvedores</Typography>
                        <Box marginTop={3} paddingX={10}><ListItem divider></ListItem></Box>
                    </Box>
                </Grid>

                <Grid alignItems="center" item xs={12} className="cardEquipe">
                    <Box display="flex" justifyContent="space-evenly">
                        <Card className="cardAndrei"></Card>
                        <Card className="cardLairton"></Card>
                        <Card className="cardLuciana"></Card>
                        <Card className="cardLuan"></Card>
                        <Card className="cardIsabela"></Card>
                        <Card className="cardTacio"></Card>
                    </Box>
                </Grid>

                <Grid alignItems="center" item xs={12} className="redesSociais">
                    <Box display="flex" justifyContent="space-evenly">
                        <Box justifyContent="center" paddingX={6}>
                            <a href="https://www.linkedin.com/in/andreifl/" target="_blank">
                                <LinkedInIcon className='iconeSocial' />
                            </a>
                            <a href="https://github.com/andreiflancanova" target="_blank">
                                <GitHub className='iconeSocial' />
                            </a>
                        </Box>

                        <Box justifyContent="center" paddingX={6}>
                            <a href="https://www.linkedin.com/in/lairton-da-silva-382688224/" target="_blank">
                                <LinkedInIcon className='iconeSocial' />
                            </a>
                            <a href="https://github.com/Lairtondasilva" target="_blank">
                                <GitHub className='iconeSocial' />
                            </a>
                        </Box>
          
                        <Box justifyContent="center" paddingX={6}>
                            <a href="https://www.linkedin.com/in/lucianarochacosta/" target="_blank">
                                <LinkedInIcon className='iconeSocial' />
                            </a>
                            <a href="https://github.com/lucianarochacosta/Comnectar-FrontEnd" target="_blank">
                                <GitHub className='iconeSocial' />
                            </a>
                        </Box>

                        <Box justifyContent="center" paddingX={6}>
                            <a href="https://www.linkedin.com/in/luan-saramago/" target="_blank">
                                <LinkedInIcon className='iconeSocial' />
                            </a>
                            <a href="https://github.com/luantss" target="_blank">
                                <GitHub className='iconeSocial' />
                            </a>
                        </Box>
     
                        <Box justifyContent="center" paddingX={6}>
                            <a href="https://www.linkedin.com/in/taciosfer/" target="_blank">
                                <LinkedInIcon className='iconeSocial' />
                            </a>
                            <a href="https://github.com/taciosfer" target="_blank">
                                <GitHub className='iconeSocial' />
                            </a>
                        </Box>
         
                        <Box justifyContent="center" paddingX={6}>
                            <a href="https://www.linkedin.com/in/isabela-piana/" target="_blank">
                                <LinkedInIcon className='iconeSocial' />
                            </a>
                            <a href="https://github.com/isabelapiana" target="_blank">
                                <GitHub className='iconeSocial' />
                            </a>
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </>
    )
}

export default SobreNos;