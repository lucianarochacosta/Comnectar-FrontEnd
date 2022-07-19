import { Grid, Typography, Card, ListItem } from "@material-ui/core";
import { Box } from "@mui/material";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import './SobreNos.css';

function SobreNos() {
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="sobre-bg" xs={12}>

                <Grid item xs={12} className="intro">
                    <Box>
                        <Typography color="textPrimary" variant="h5" align="center" className="titulo2">O que nos move</Typography>
                        <Box display="flex" flexDirection="column">
                            <Typography color="textPrimary" variant="h5" align="center" className="subtitulo">
                                Nos últimos anos, quantidades cada vez maiores de fenômenos da natureza têm ocorrido.
                            </Typography>
                            <Typography color="textPrimary" variant="h5" align="center" className="subtitulo">
                                E também já há algum tempo, é possível observar que eles vêm se intensificando de forma acelerada.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Box >
                    <Box display="flex" flexDirection="column" width="100%" alignItems="center" className="cont-esquerda-sb">
                        <Box className="section1" style={{ background: "white", padding: "64px 24px" }}>
                            <Typography variant="h2" component="h2" style={{ textAlign: "center", marginBottom: "64px" }}>Queimada na Sibéria</Typography>
                            <Box display="flex" width="100%" gap="48px" alignItems="center">
                                <img src="https://i.imgur.com/sXN0b0H.png" alt="queimada na Síbéria" />
                                <Box display="flex" flexDirection="column" gap="24px">
                                    <Typography color="textPrimary" variant="h6" align="left" style={{ fontSize: "24px" }} >
                                        Grandes incêndios na Sibéria, tradicionalmente
                                        referenciada por seus recordes de baixas
                                        temperaturas no passado sinalizam a
                                        magnitude desse desequilíbrio.
                                    </Typography>
                                    <Typography color="textPrimary" variant="h6" align="left" style={{ fontSize: "24px" }}>
                                        A emissão em quantidades astronômicas dos
                                        GEE’s - Gases do Efeito Estufa - tem provocado a
                                        elevação das temperaturas médias globais em
                                        velocidade e níveis nunca antes experienciados.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="section1" marginBottom="128px" style={{ background: "white", padding: "64px 24px 80px 24px" }} >
                            <Typography variant="h2" component="h2" style={{ textAlign: "center", marginBottom: "64px" }}>Permafrost Descongelando</Typography>
                            <Box display="flex" width="100%" gap="48px" flexDirection="row-reverse" alignItems="center">
                                <img src="https://i.imgur.com/9FzS3go.png" alt="queimada na Síbéria" />
                                <Box display="flex" flexDirection="column" gap="24px">
                                    <Typography color="textPrimary" variant="h6" style={{ fontSize: "24px" }}>
                                        O conhecido Permafrost, o ‘gelo permanente’
                                        concentrado em poucas localidades do nosso
                                        planeta está se comprometendo em ritmo
                                        acelerado.
                                    </Typography>  <br />
                                    <Typography color="textPrimary" variant="h6" style={{ fontSize: "24px" }}>
                                        Com o derretimento, imensuráveis depósitos de
                                        Metano, gás de enorme potencial estufa poderão
                                        ser libertados na atmosfera, o que poderá causar
                                        impactos catastróficos para a vida no planeta.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="section1" style={{ background: "white", padding: "64px 24px 80px 24px" }} >
                            <Typography variant="h2" component="h2" style={{ textAlign: "center", marginBottom: "64px" }}>ODS 13: Adotar Medidas urgentes contra as ações climáticas</Typography>
                            <Box display="flex" width="100%" gap="48px" flexDirection="column" alignItems="center" >
                                <Box>
                                    <img src="https://i.imgur.com/RpmbmAO.png" alt="queimada na Síbéria" />
                                </Box>
                                <Box display="flex" flexDirection="column" gap="24px">
                                    <Typography color="textPrimary" variant="h6" style={{ fontSize: "24px" }}>
                                        Em grande parte devido à esse contexto que, em 2015,
                                        foram estabelecidas os 17 Objetivos de Desenvolvimento
                                        Sustentável pela Organização das Nações Unidas, a ONU:
                                        uma lista de medidas centrais a serem tomadas antes de
                                        2030, visando frear um colapso ambiental com a adoção
                                        de posturas sustentáveis, replicáveis globalmente.
                                    </Typography>  <br />
                                </Box>
                                <Box>
                                    <Box display="flex" gap="24px" flexDirection="row-reverse">
                                        <Typography color="textPrimary" variant="h6" style={{ fontSize: "24px" }}>
                                            Dentre os 17, optamos pela ODS 13, pela compreensão de que o Desenvolvimento Sustentável
                                            possui como prerrogativa um clima habitável para a nossa - e demais - espécies.
                                        </Typography>
                                        <img src="https://i.imgur.com/Ud3tScH.png" alt="ODS:13" />
                                    </Box>

                                </Box>
                            </Box>
                            <Grid container direction="row" className="cont-direita1" xs={12} alignItems="center">
                                <Grid alignItems="center" xs={6}>
                                    <Box paddingLeft={5}>
                                        <Typography color="textPrimary" variant="h5" align="center" className="subtitulo1">
                                            A resposta é simples:
                                        </Typography>
                                        <Typography color="textPrimary" variant="h5" align="center" className="subtitulo1">
                                            plantando!
                                        </Typography>  <br />
                                        <Typography color="textPrimary" variant="h6"  className="subtitulo2">
                                            Entendemos que muito do que foi destruído precisa ser recuperado
                                            em se tratando de uma Ação Climática concreta.
                                        </Typography>  <br />
                                        <Typography color="textPrimary" variant="h6"  className="subtitulo2">
                                            Dessa forma, nossa proposta é conectar
                                            consumidores que compreendem esse cenário
                                            a produtores que o combatem
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid xs={6}>
                                    <Box paddingLeft={5}>
                                        <Card className="cardD"></Card>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Grid  xs={12} style={{background:"#00000090"}}>
                        <Box >
                            <Typography color="textPrimary" variant="h3" align="center" className="titulo1" style={{paddingTop:"64px"}}>Quem somos nós</Typography>
                            <Typography color="textPrimary" variant="h5" align="center" className="titulo2">Nossa equipe de desenvolvedores</Typography>
                        </Box>
                    </Grid>

                    <Grid alignItems="center" item xs={12} className="cardEquipe" style={{background:"#00000090"}}>
                        <Box display="flex" justifyContent="space-between" gap="24px">
                            <Card className="flip-container">
                                <div className="flipper">
                                    <div className="front">
                                        <Card className="cardAndrei"></Card>
                                    </div>
                                    <div className="back">
                                        <Card className="backgroundBack">
                                            <Box justifyContent="center" alignItems="center" display="-moz-initial" paddingX={3} className="alinhamentoBack">
                                                <Typography color="textPrimary" className="fonteCardBack">Andrei Lançanova</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Desenvolvedor Web Java Fullstack</Typography>
                                                <a href="https://www.linkedin.com/in/andreifl/" target="_blank" rel="noreferrer">
                                                    <LinkedInIcon className='iconeSocial' />
                                                </a>
                                                <a href="https://github.com/andreiflancanova" target="_blank" rel="noreferrer">
                                                    <GitHub className='iconeSocial' />
                                                </a>
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
                                                <Typography color="textPrimary" className="fonteCardBack">Isabela Piana</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Desenvolvedora Web Java Fullstack</Typography>
                                                <a href="https://www.linkedin.com/in/isabela-piana/" target="_blank" rel="noreferrer">
                                                    <LinkedInIcon className='iconeSocial' />
                                                </a>
                                                <a href="https://github.com/isabelapiana" target="_blank" rel="noreferrer">
                                                    <GitHub className='iconeSocial' />
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
                                                <Typography color="textPrimary" className="fonteCardBack">Lairton da Silva</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Desenvolvedor Web Java Fullstack</Typography>
                                                <a href="https://www.linkedin.com/in/lairton-da-silva-382688224/" target="_blank" rel="noreferrer">
                                                    <LinkedInIcon className='iconeSocial' />
                                                </a>
                                                <a href="https://github.com/Lairtondasilva" target="_blank" rel="noreferrer">
                                                    <GitHub className='iconeSocial' />
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
                                                <Typography color="textPrimary" className="fonteCardBack">Luan Saramago</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Desenvolvedor Web Java Fullstack</Typography>
                                                <a href="https://www.linkedin.com/in/luan-saramago/" target="_blank" rel="noreferrer">
                                                    <LinkedInIcon className='iconeSocial' />
                                                </a>
                                                <a href="https://github.com/luantss" target="_blank" rel="noreferrer">
                                                    <GitHub className='iconeSocial' />
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
                                                <Typography color="textPrimary" className="fonteCardBack">Luciana Rocha Costa</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Desenvolvedora Web Java Fullstack</Typography>
                                                <a href="https://www.linkedin.com/in/lucianarochacosta/" target="_blank" rel="noreferrer">
                                                    <LinkedInIcon className='iconeSocial' />
                                                </a>
                                                <a href="https://github.com/lucianarochacosta" target="_blank" rel="noreferrer">
                                                    <GitHub className='iconeSocial' />
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
                                                <Typography color="textPrimary" className="fonteCardBack">Tácio Ferreira</Typography>
                                                <Typography color="textPrimary" className="fonteCardBack2">Desenvolvedor Web Java Fullstack</Typography>
                                                <a href="https://www.linkedin.com/in/taciosfer/" target="_blank" rel="noreferrer">
                                                    <LinkedInIcon className='iconeSocial' />
                                                </a>
                                                <a href="https://github.com/taciosfer" target="_blank" rel="noreferrer">
                                                    <GitHub className='iconeSocial' />
                                                </a>
                                            </Box>
                                        </Card>
                                    </div>
                                </div>
                            </Card>
                        </Box>
                    </Grid>
                </Box>
            </Grid>
        </>
    )
}

export default SobreNos;
