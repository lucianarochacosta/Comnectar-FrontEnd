import { Button, Card, Grid, ListItem, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import './Comnecte-se.css';

function ComnecteSe() {
    return(
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
                        <Box paddingRight={5}>
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
                            <Typography variant="h6" align="justify" className="subtituloC2">Consiste na não-utilização de insumos sintéticos como sementes, fertilizantes, agrotóxicos, catalisadores, reguladores entre outros. Os processos mecanizados são reduzidos - ou inexistentes -, e a produção apresenta teor nutricional mais elevado que o convencional bem como sabor e frescor diferenciados. Grau de Regeneratividade 1 na Comnectar.</Typography>
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
                                <Typography variant="h6" align="justify" className="subtituloC2">Estima-se que 80% de toda a comida produzida no planeta seja oriunda dessa modalidade de cultivo. Segue todos os pressupostos da Orgânica, com o diferencial do uso/armazenamento de sementes Crioulas - sementes tradicionais com características únicas e altamente regionais. Baixo custo e alto impacto social. Grau de Regeneratividade 2 na Comnectar.</Typography>
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
                                <Typography variant="h6" align="justify" className="subtituloC2">Também segue os pressupostos da Orgânica, difundindo e estimulando o uso de sementes locais e tradicionais, assim como a Familiar. Entretanto, além de um viés político, os cultivos são planejados de forma a maximizar a produção, otimizando o espaço disponível, enriquecendo o solo e assegurando a soberania alimentar ao longo de todo o ano. As variedades de alimentos acompanham as estações do ano. Grau de Regeneratividade 3 na Comnectar.</Typography>
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
                                <Typography variant="h6" align="justify" className="subtituloC2">Mescla conhecimentos da Orgânica, Familiar e da Agroecológica. Visa replicar processos naturais que levam ao estabelecimento de florestas virgens mediante observação empírica da dinâmica da própria floresta. Conhecida pela capacidade de 'reviver nascentes e reestabelecer cursos d'água'. Produtos de qualidade inigualável. Fiel observância aos princípios propostos pela Genética. Sistemática para criação, desenvolvimento, manutenção e alcance de sistemas produtivos caracterizados pela abundância. Grau de Regeneratividade 4 na Comnectar.</Typography>
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
                            <Box display="flex" justifyContent="center">
                                <img src="https://i.imgur.com/01pfQT5.png" className="img2"></img>
                            </Box>
                        </Grid>
                        <Grid xs={4} justifyContent="center" alignItems="center">
                            <Box className="introC2" display="flex" justifyContent="flex-start" paddingLeft={5}>
                                <Link to='/cadastrousuario' className='text-decorator-none'>
                                    <Button variant='contained' color='primary'>
                                        Cadastre-se
                                    </Button>
                                </Link>
                            </Box>
                            <Box className="introC1" display="flex" justifyContent="flex-start" paddingLeft={5}>
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
