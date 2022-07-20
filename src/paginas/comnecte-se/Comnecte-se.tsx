import { Button, Card, Grid, ListItem, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import './Comnecte-se.css';

function ComnecteSe() {
    return (
        <>
            <Grid container justifyContent="center" alignItems="center" className=" background">

                <Grid xs={12}>
                    <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center" className="img1" gap="64px">
                        <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center" >
                            <Typography variant="h1" align="center" className="tituloCnts">
                                Como a agricultura sustentável pode mudar o mundo?
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid xs={12} container justifyContent="center" alignContent="center">
                    <Box paddingLeft={0} className="introC1">
                        <Typography variant="h4" align="center" className="tituloC1">Tipos de Agricultura</Typography>
                    </Box>
                </Grid>

                <Box className="margem">
                    <Box display="flex" gap="24px" flexDirection="row">
                        <Box flexDirection="column" paddingLeft={10}>
                            <Typography variant="h4" align="justify" className="subtituloC1">Orgânica</Typography>
                            <Typography variant="h6" align="justify" className="subtituloC2">Consiste na não-utilização de insumos sintéticos como sementes, fertilizantes, agrotóxicos, catalisadores, reguladores entre outros. Os processos mecanizados são reduzidos - ou inexistentes -, e a produção apresenta teor nutricional mais elevado que o convencional bem como sabor e frescor diferenciados. Grau de Regeneratividade 1 no Comnectar.</Typography>
                        </Box>
                        <Box paddingRight={10}>
                            <Card className="cardCo1"></Card>
                        </Box>
                    </Box>
                </Box>

                <Box className="margem">
                    <Box display="flex" gap="24px" flexDirection="row-reverse">
                        <Box flexDirection="column" paddingRight={10}>
                            <Typography variant="h4" align="justify" className="subtituloC1">Familiar</Typography>
                            <Typography variant="h6" align="justify" className="subtituloC2">Estima-se que 80% de toda a comida produzida no planeta seja oriunda dessa modalidade de cultivo. Segue todos os pressupostos da Orgânica, com o diferencial do uso/armazenamento de sementes Crioulas - sementes tradicionais com características únicas e altamente regionais. Baixo custo e alto impacto social. Grau de Regeneratividade 2 no Comnectar.</Typography>
                        </Box>
                        <Box paddingLeft={10}>
                            <Card className="cardC2"></Card>
                        </Box>
                    </Box>
                </Box>

                <Box className="margem">
                    <Box display="flex" gap="24px" flexDirection="row">
                        <Box flexDirection="column" paddingLeft={10}>
                            <Typography variant="h4" align="justify" className="subtituloC1">Agroecológica</Typography>
                            <Typography variant="h6" align="justify" className="subtituloC2">Também segue os pressupostos da Orgânica, difundindo e estimulando o uso de sementes locais e tradicionais, assim como a Familiar. Entretanto, além de um viés político, os cultivos são planejados de forma a maximizar a produção, otimizando o espaço disponível, enriquecendo o solo e assegurando a soberania alimentar ao longo de todo o ano. As variedades de alimentos acompanham as estações do ano. Grau de Regeneratividade 3 no Comnectar.</Typography>
                        </Box>
                        <Box paddingRight={10}>
                            <Card className="cardC3"></Card>
                        </Box>
                    </Box>
                </Box>

                <Box className="margem">
                    <Box display="flex" gap="24px" flexDirection="row-reverse">
                        <Box flexDirection="column" paddingRight={10}>
                        <Typography variant="h4" align="justify" className="subtituloC1">Sintrópica</Typography>
                            <Typography variant="h6" align="justify" className="subtituloC2">Mescla conhecimentos da Orgânica, Familiar e da Agroecológica. Visa replicar processos naturais que levam ao estabelecimento de florestas virgens mediante observação empírica da dinâmica da própria floresta. Conhecida pela capacidade de 'reviver nascentes e reestabelecer cursos d'água'. Produtos de qualidade inigualável. Fiel observância aos princípios propostos pela Genética. Sistemática para criação, desenvolvimento, manutenção e alcance de sistemas produtivos caracterizados pela abundância. Grau de Regeneratividade 4 no Comnectar.</Typography>
                        </Box>
                        <Box paddingLeft={10}>
                            <Card className="cardC4"></Card>
                        </Box>
                    </Box>
                </Box>

                <Grid xs={12} container direction="row" justifyContent="space-between" alignContent="center" className="gridProdutor">
                    <Grid xs={6}>
                        <Box className="introC3" flexDirection="column" justifyContent="center" alignItems="center">
                            <Typography variant="h4" align="center" className="tituloC1">Quer vender seus produtos conosco?</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" flexDirection="column" className="introC2" >
                            <Box paddingBottom={3}>
                                <Link to='/cadastrousuario' className='text-decorator-none'>
                                    <Button variant='contained' className="botaoCmnts" color='primary'>
                                        Cadastre-se
                                    </Button>
                                </Link>
                            </Box>
                            <Box>
                                <Link to='/contato' className='text-decorator-none'>
                                    <Button variant='contained' className="botaoCmnts" color='primary'>
                                        Envie a sua dúvida
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid xs={6} className="img-produtora">
                            <img src="https://i.imgur.com/mL4GnYS.jpeg" className="img2"></img>
                    </Grid>

                </Grid>

            </Grid>
        </>
    )
}

export default ComnecteSe;
