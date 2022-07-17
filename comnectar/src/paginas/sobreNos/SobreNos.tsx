import { Grid, Typography, Card, ListItem } from "@material-ui/core";
import { Box } from "@mui/material";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import './SobreNos.css';

function SobreNos() {
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="background">
                <Grid xs={12} className="intro">
                    <Box className="boxOqueNosMove">
                        <Box display="flex" flexDirection="column" >
                        <Typography variant="h5" align="center" className="titulo2">O Que Nos Move</Typography>
                            <Typography variant="h5" align="center" className="subtitulo2">
                                Nos últimos anos, quantidades cada vez maiores de fenômenos extremos têm ocorrido na natureza.
                            </Typography>
                            <Typography variant="h5" align="center" className="subtitulo2">
                                Os impactos negativos dos mesmos vêm se intensificando de forma acelerada.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid container direction="row" alignItems="center" xs={12}>
                        <Box className="boxSiberia">
                            
                        </Box>
                </Grid>
                <Grid container direction="row" className="cont-direita" alignItems="center" xs={12}>
                    <Grid alignItems="center" xs={6}>
                        <Box className="cardA">
                        <Typography variant="h6" align="left" className="subtitulo2">
                                Grandes incêndios na Sibéria, tradicionalmente
                                referenciada por seus recordes de baixas
                                temperaturas no passado sinalizam a
                                magnitude desse desequilíbrio.
                            </Typography> <br/>
                            <Typography variant="h6" className="subtitulo2">
                                A emissão em quantidades astronômicas dos
                                GEE’s - Gases do Efeito Estufa - tem provocado a
                                elevação das temperaturas médias globais em
                                velocidade e níveis nunca antes experienciados.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={6}>
                        <Box className="cardB">
                            <Typography variant="h6" align="right" className="subtitulo2">
                                O conhecido Permafrost, o ‘gelo permanente’
                                concentrado em poucas localidades do nosso
                                planeta está se comprometendo em ritmo
                                acelerado.
                            </Typography> <br/>
                            <Typography variant="h6" align="right" className="subtitulo2">
                                Com o derretimento, imensuráveis depósitos de
                                Metano, gás de enorme potencial estufa poderão
                                ser libertados na atmosfera, o que poderá causar
                                impactos catastróficos para a vida no planeta.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container direction="row-reverse" justifyContent="center" alignContent="center" className="cont-esquerda1" xs={12}>
                    <Grid alignItems="center" xs={6}>
                        <Box paddingRight={5}>
                            <Typography variant="h6" align="left" className="subtitulo2">
                                Em grande parte devido à esse contexto que em 2015 
                                foram estabelecidas Objetivos de Desenvolvimento 
                                Sustentável pela Organização das Nações Unidas, a ONU: 
                                uma lista contendo 17 medidas centrais a serem tomadas 
                                pelos Governos de todos os países até 2030, que visam 
                                frear um colapso ambiental com a adoção de posturas 
                                sustentáveis, replicáveis globalmente.
                            </Typography>
                            <Box paddingRight={5}>
                                <Card className="cardC1"></Card>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={6}>
                        <Box paddingLeft={5}>
                            <Card className="cardC"></Card>
                        </Box>
                    </Grid>
                </Grid>
                <Grid xs={10}>
                    <Box>
                        <Typography variant="h6" align="center" className="subtitulo2">
                            Dentre os 17, optamos pela ODS 13, pela compreensão de que o Desenvolvimento Sustentável
                            possui como prerrogativa um clima habitável para a nossa - e demais - espécies.
                        </Typography>
                    </Box>
                </Grid>
                <Grid container direction="row" className="cont-direita1" xs={12} alignItems="center">
                    <Grid alignItems="center" xs={6}>
                        <Box paddingLeft={5}>
                            <Typography variant="h5" align="center" className="subtitulo1">
                                A resposta é simples:
                            </Typography>
                            <Typography variant="h5" align="center" className="subtitulo1">
                                Plantando!
                            </Typography> <br/>
                            <Typography variant="h6" align="right" className="subtitulo2">
                                Na Comnectar, entendemos que muito do que já foi destruído pode e deve ser recuperado. 
                                Assim sendo, um dos primeiros passos de uma Ação Climática perpassa pelo desenvolvimento
                                 de um modelo de consumo 
                                vinculado à medidas 
                            </Typography> <br/> 
                            <Typography variant="h6" align="right" className="subtitulo2">
                                Dessa forma, nossa proposta é conectar consumidores que compreendem e se preocupam com esse cenário 
                                a produtores que trabalham para transformá-lo.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={6}>
                        <Box paddingLeft={5}>
                            <Card className="cardD"></Card>
                        </Box>
                    </Grid>
                </Grid>
                <Grid className="intro" xs={12}>
                    <Box>
                        <Typography variant="h3" align="center" className="titulo1">Quem Somos</Typography>
                        <Typography variant="h5" align="center" className="titulo2">Conheça a Equipe</Typography>
                        <Box marginTop={3} paddingX={10}><ListItem divider></ListItem></Box>
                    </Box>
                </Grid>
                <Grid alignItems="center" item xs={12} className="cardEquipe">
                    <Box display="flex" justifyContent="space-evenly">
                        <Card className="flip-container">
                            <div className="flipper">
                                <div className="front">
                                    <Card className="cardAndrei"></Card>
                                </div>
                                <div className="back">
                                    <Card className="backgroundBack">
                                        <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                            <Typography className="fonteCardBack">Andrei Lançanova</Typography>
                                            <Typography className="fonteCardBack2">Desenvolvedor Fullstack Java Junior</Typography>
                                            <a href="https://www.linkedin.com/in/andreifl/" target="_blank">
                                                <LinkedInIcon className='iconeSocial'/>
                                            </a>
                                            <a href="https://github.com/andreiflancanova" target="_blank"><GitHub className='iconeSocial'/></a>
                                        </Box>
                                    </Card>
                                </div>
                            </div>
                        </Card>
                        <Card className="flip-container">
                            <div className="flipper">
                                <div className="front">
                                    <Card className="cardIsabela"></Card>
                                </div>
                                <div className="back">
                                    <Card className="backgroundBack">
                                        <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                            <Typography className="fonteCardBack">Isabela Piana</Typography>
                                            <Typography className="fonteCardBack2">Desenvolvedora Fullstack Java Junior</Typography>
                                            <a href="https://www.linkedin.com/in/isabela-piana/" target="_blank">
                                                <LinkedInIcon className='iconeSocial'/>
                                            </a>
                                            <a href="https://github.com/isabelapiana" target="_blank">
                                                <GitHub className='iconeSocial'/>
                                            </a>
                                        </Box>
                                    </Card>
                                </div>
                            </div>
                        </Card>
                        <Card className="flip-container">
                            <div className="flipper">
                                <div className="front">
                                    <Card className="cardLairton"></Card>
                                </div>
                                <div className="back">
                                    <Card className="backgroundBack">
                                        <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                            <Typography className="fonteCardBack">Lairton da Silva</Typography>
                                            <Typography className="fonteCardBack2">Desenvolvedor Fullstack Java Junior</Typography>
                                            <a href="https://www.linkedin.com/in/lairton-da-silva-382688224/" target="_blank">
                                                <LinkedInIcon className='iconeSocial'/>
                                            </a>
                                            <a href="https://github.com/Lairtondasilva" target="_blank">
                                                <GitHub className='iconeSocial'/>
                                            </a>
                                        </Box>
                                    </Card>
                                </div>
                            </div>
                        </Card>
                        <Card className="flip-container">
                            <div className="flipper">
                                <div className="front">
                                    <Card className="cardLuan"></Card>
                                </div>
                                <div className="back">
                                    <Card className="backgroundBack">
                                        <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                            <Typography className="fonteCardBack">Luan Saramago</Typography>
                                            <Typography className="fonteCardBack2">Desenvolvedor Fullstack Java Junior</Typography>
                                            <a href="https://www.linkedin.com/in/luan-saramago/" target="_blank">
                                                <LinkedInIcon className='iconeSocial'/>
                                            </a>
                                            <a href="https://github.com/luantss" target="_blank">
                                                <GitHub className='iconeSocial'/>
                                            </a>
                                        </Box>
                                    </Card>
                                </div>
                            </div>
                        </Card>
                        <Card className="flip-container">
                            <div className="flipper">
                                <div className="front">
                                    <Card className="cardLuciana"></Card>
                                </div>
                                <div className="back">
                                    <Card className="backgroundBack">
                                        <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                            <Typography className="fonteCardBack">Luciana Rocha Costa</Typography>
                                            <Typography className="fonteCardBack2">Desenvolvedor Fullstack Java Junior</Typography>
                                            <a href="https://www.linkedin.com/in/lucianarochacosta/" target="_blank">
                                                <LinkedInIcon className='iconeSocial'/>
                                            </a>
                                            <a href="https://github.com/lucianarochacosta" target="_blank">
                                                <GitHub className='iconeSocial'/>
                                            </a>
                                        </Box>
                                    </Card>
                                </div>
                            </div>
                        </Card>
                        <Card className="flip-container">
                            <div className="flipper">
                                <div className="front">
                                    <Card className="cardTacio"></Card>
                                </div>
                                <div className="back">
                                    <Card className="backgroundBack">
                                        <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                            <Typography className="fonteCardBack">Tácio Ferreira</Typography>
                                            <Typography className="fonteCardBack2">Desenvolvedor Fullstack Java Junior</Typography>
                                            <a href="https://www.linkedin.com/in/taciosfer/" target="_blank">
                                                <LinkedInIcon className='iconeSocial'/>
                                            </a>
                                            <a href="https://github.com/taciosfer" target="_blank">
                                                <GitHub className='iconeSocial'/>
                                            </a>
                                        </Box>
                                    </Card>
                                </div>
                            </div>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default SobreNos;
