import React from "react";
import { Grid, Button, Typography, Paper, Card, CardContent } from "@material-ui/core";
import { Box } from "@mui/material";
import './SobreNos.css';

function SobreNos() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="background">

                <Grid alignItems="center" justifyContent="center" xs={12}>
                    <Box>
                        <Typography variant="h3" align="center" className="titulo1">Sobre nós</Typography>
                        <Typography variant="h5" align="center" className="titulo2">Conheça a nossa história!</Typography>
                    </Box>
                </Grid>

                <Grid container direction="row" className="cont-direita" xs={12}>
                    <Grid alignItems="center" xs={8}>
                        <Box paddingX={10}>
                            <Typography variant="h4" align="justify" className="subtitulo1">Quem somos?</Typography>
                            <Typography variant="h6" align="justify" className="subtitulo2">Somos uma e-commerce inspirada na ODS 13. Nossos objetivos consistem em incentivar a agricultura sustentável e promover a conexão entre o pequeno produtor e o consumidor interessado em uma vida mais saudável.</Typography>
                        </Box>
                    </Grid>
                    <Grid xs={4}>
                        <Box paddingX={10}>
                            <Card className="card1"></Card>
                        </Box>

                    </Grid>
                </Grid>


                <Grid container direction="row-reverse" justifyContent="center" alignContent="center" className="cont-esquerda" xs={12}>
                    <Grid xs={8}>
                        <Box paddingX={10}>
                            <Typography variant="h4" align="justify" className="subtitulo1">Por que utilizar a nossa plataforma?</Typography>
                            <Typography variant="h6" align="justify" className="subtitulo2">Ao utilizar a nossa plataforma, você contribui para que comerciantes responsáveis ganhem visibilidade. Desta forma, é possível promover uma vida mais saudável, incentivar o pequeno produtor e promover a agricultura sustentável.</Typography>
                        </Box>
                    </Grid>
                    <Grid alignItems="center" xs={4}>
                        <Box paddingX={10}>
                            <Card className="card2"></Card>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container direction="row" className="cont-direita" xs={12}>
                    <Grid alignItems="center" xs={8}>
                        <Box paddingX={10}>
                            <Typography variant="h4" align="justify" className="subtitulo1">Como surgiu a ideia?</Typography>
                            <Typography variant="h6" align="justify" className="subtitulo2">A ideia surgiu durante o desenvolvimento do projeto integrador da turma 52 da Generation Brasil (Desenvolvedor Web Java Fullstack JR). Momento no qual os integrantes sentiram-se alinhados com os princípios da ODS 13.</Typography>
                        </Box>
                    </Grid>
                    <Grid xs={4}>
                        <Box paddingX={10}>
                            <Card className="card3"></Card>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container direction="row-reverse" justifyContent="center" alignContent="center" className="cont-esquerda" xs={12}>
                    <Grid alignItems="center" xs={8}>
                        <Box paddingX={10}>
                            <Typography variant="h4" align="justify" className="subtitulo1">ODS 13</Typography>
                            <Typography variant="h6" align="justify" className="subtitulo2">Os Objetivos de desenvolvimento sustentável são um apelo global com o intuito de erradicar a pobreza, proteger o clima e o meio ambiente, garantindo paz e prosperidade à população. A ODS 13 propõe a adoção de medidas para combater as alterações climáticas e seus impactos.</Typography>
                        </Box>
                    </Grid>
                    <Grid xs={4}>
                        <Box paddingX={10}>
                            <Card className="card4"></Card>
                        </Box>
                    </Grid>
                </Grid>

                <Grid alignItems="center" justifyContent="center" xs={12}>
                    <Box>
                        <Typography variant="h3" align="center" className="titulo1">Nossa equipe</Typography>
                    </Box>
                </Grid>

                <Grid alignItems="center" item xs={12} className="caixacard">
                    <Box display="flex" justifyContent="space-evenly">
                        <Card className="cardAndrei"></Card>
                        <Card className="cardLairton"></Card>
                        <Card className="cardLuciana"></Card>
                    </Box>
                </Grid>

                <Grid alignItems="center" item xs={12} className="caixacard">
                    <Box display="flex" justifyContent="space-evenly">
                        <Card className="cardLuan"></Card>
                        <Card className="cardIsabela"></Card>
                        <Card className="cardTacio"></Card>
                    </Box>
                </Grid>

                

            </Grid>
        </>
    )
}

export default SobreNos;