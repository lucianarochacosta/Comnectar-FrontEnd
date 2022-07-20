import React, { ChangeEvent, useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Grid, Button, ClickAwayListener } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import "./Navbar.css";
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';
import useLocalStorage from 'react-use-localstorage';
import { AnyAction } from 'redux';

function Navbar() {
    const [nome, setNome] = useLocalStorage('nome');

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Você saiu.', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "colored",
            progress: undefined
        })
        navigate('/')
    }

    var navbarComponent;
  const [open, setOpen] = React.useState(false);

  const handleClick = (e:any) => {
    setOpen((prev) => !prev);
    if(!open){
        e.target.classList.add("color-clicked")
    }
    else{
        e.target.classList.remove("color-clicked")
    }
  };

  const handleClickAway = () => {
    setOpen(false);
    document.querySelector(".MuiTypography-root.color-clicked")?.classList.remove("color-clicked")
  };
const handleRedirect = ()=>{
    setOpen(false)
    document.querySelector(".MuiTypography-root.color-clicked")?.classList.remove("color-clicked")
}
    if (token == "") {
        navbarComponent =
        <AppBar position="sticky" >
            <Toolbar variant="dense" className="Menu">
                <Grid container justifyContent="space-between">
                    <Box display="flex" justifyContent="flex-start" alignItems="center">
                        <Link to='/home' className='text-decorator-none'>
                            <Box className="MenuPagesComnectar">
                                <a>
                                    <img src="https://i.imgur.com/dSw6Y80.png" title="Logo do Comnectar" className='imglogo' />
                                </a>
                            </Box>
                        </Link>
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Link to='/home' className='text-decorator-none'>
                            <Box className="MenuPagesCenterBox">
                                <Typography variant="h5" color="inherit" className="MenuPagesFont">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/sobre' className='text-decorator-none'>
                            <Box className="MenuPagesCenterBox">
                                <Typography variant="h5" color="inherit" className="MenuPagesFont">
                                    Sobre
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/produtos' className='text-decorator-none'>
                            <Box className="MenuPagesCenterBox">
                                <Typography variant="h5" color="inherit" className="MenuPagesFont">
                                    Produtos
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/contato' className='text-decorator-none'>
                            <Box className="MenuPagesCenterBox">
                                <Typography variant="h5" color="inherit" className="MenuPagesFont">
                                    Contato
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/comnectese' className='text-decorator-none'>
                            <Box className="MenuPagesCenterBox">
                                <Typography variant="h5" color="inherit" className="MenuPagesFont">
                                    Comnecte-se
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                    <Box display="flex" justifyContent="flex-end" alignItems="center">
                    <ClickAwayListener onClickAway={handleClickAway}>
                        <div className="position-r">
                            <span onClick={handleClick} className="cursor-p" >
                            <Typography variant="h5" className="MenuPagesFont">
                                Sou um Produtor
                            </Typography>
                            </span>
                            {open ? (
                             <Box className="menuportal">
                              {/* <Typography variant="h6" color="inherit" className='textoportal'>
                                 Melhore o mundo, conosco!
                             </Typography>  */}
                             <Box className='botoesportal'>
                                 <Link to='/login' className='text-decorator-none' onClick={()=>handleRedirect()}>
                                     <Box className="MenuPagesEntrar">
                                         <Button variant="contained" endIcon={<ExitToAppIcon />} className='botaoentrar'>
                                             Entrar
                                         </Button>
                                     </Box>
                                 </Link>
                                 <Link to='/cadastrousuario' className='text-decorator-none' onClick={()=>handleRedirect()}>
                                     <Box className="MenuPagesCadastrar">
                                         <Button variant="outlined" className='botaocadastrar'>
                                             Cadastrar
                                         </Button>
                                     </Box>
                                 </Link>
                             </Box>
                         </Box>
                            ) : null}
                        </div>
                        </ClickAwayListener>
                       
                        <Box className='boxcarrinho'>
                            <Button variant='contained' className='btn-carrinho'>
                                <ShoppingCartRoundedIcon fontSize="large" />
                            </Button>
                        </Box>

                    </Box>
                </Grid>
            </Toolbar>
        </AppBar>
    }
    else {
        navbarComponent =
        <AppBar position="sticky" >
            <Toolbar variant="dense" className="Menu">
                <Grid container justifyContent="space-between">
                    <Box display="flex" justifyContent="flex-start" alignItems="center">
                        <Link to='/home' className='text-decorator-none'>
                            <Box className="MenuPagesComnectar">
                                <a>
                                    <img src="https://i.imgur.com/dSw6Y80.png" title="Logo do Comnectar" className='imglogo' />
                                </a>
                            </Box>
                        </Link>
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Link to='/home' className='text-decorator-none'>
                            <Box className="MenuPagesCenterBox">
                                <Typography variant="h5" color="inherit" className="MenuPagesFont">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/sobre-nos' className='text-decorator-none'>
                            <Box className="MenuPagesCenterBox">
                                <Typography variant="h5" color="inherit" className="MenuPagesFont">
                                    Sobre
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/produtos' className='text-decorator-none'>
                            <Box className="MenuPagesCenterBox">
                                <Typography variant="h5" color="inherit" className="MenuPagesFont">
                                    Produtos
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/contato' className='text-decorator-none'>
                            <Box className="MenuPagesCenterBox">
                                <Typography variant="h5" color="inherit" className="MenuPagesFont">
                                    Contato
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/comnectese' className='text-decorator-none'>
                            <Box className="MenuPagesCenterBox">
                                <Typography variant="h5" color="inherit" className="MenuPagesFont">
                                    Comnecte-se
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                    <Box display="flex" justifyContent="flex-end" alignItems="center">
                        <Box className="menuportal2">
                            <Typography variant="h6" color="inherit" className='textoportal2'>
                                Olá, {nome.substring(nome.indexOf(' '), 0)}!
                            </Typography>
                            <Box className='botoesportal2'>
                                    <Box className="MenuPagesEntrar" onClick={goLogout}>
                                        <Button variant="contained" endIcon={<ExitToAppIcon />} className='botaoentrar'>
                                            Sair
                                        </Button>
                                    </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Toolbar>
        </AppBar>
    }

    return (
            <>
                {navbarComponent}
            </>
        )
    }

    export default Navbar;