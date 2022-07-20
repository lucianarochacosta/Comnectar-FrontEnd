import React, {useState,useEffect,ChangeEvent} from "react";
import { Grid, TextField, Typography, Button, Paper } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import UserLogin from "../../models/UserLogin";
import { login } from "../../service/Service";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";
import { NoMeals } from "@mui/icons-material";
import useLocalStorage from "react-use-localstorage";

function Login (){
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [nome, setNome] = useLocalStorage('nome');

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id:0,
            loginUsuario:'',
            senhaUsuario: '',
            token:''
        })

        function updatedModel(e: ChangeEvent<HTMLInputElement>){
            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }
            useEffect(()=>{
                if(token !==''){
                    dispatch(addToken(token))
                    navigate('/home')
                }
            },[token])
        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{ 
                await login(`/usuarios/logar`,userLogin,setToken,setNome)
                toast.success('Usuário logado com sucesso!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                    });
            } catch(error){
                toast.error('Dados incorretos. Erro ao logar!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                    });
            }
        }
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" xs={12} >
                <Box width='100%' height='100vh' className='backgroundImg' display={'flex'} alignItems='center' paddingLeft={'10%'} >
                    <Paper style={{padding:'32px 48px', borderRadius:'16px'}} elevation={12} className="login-c">
                    <Box maxWidth={'420px'}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color="textPrimary" align="center" component="h3" className="texto">
                            Entrar
                        </Typography>
                        <TextField  value={userLogin.loginUsuario} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id="usuario" label="Usuario" variant="outlined" name="loginUsuario" margin="normal" fullWidth />
                        <TextField  value={userLogin.senhaUsuario} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id="senha" label="Senha" variant="outlined" name="senhaUsuario" margin="normal" type="password" fullWidth/>
                        <Box marginTop={2} textAlign="center">
                                <Button type='submit' className="botao">
                                    Logar
                                </Button>
                        </Box>
                    </form >
                    <Box display="flex" justifyContent="center" marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center">
                                Não tem uma conta?
                            </Typography>
                        </Box>
                        <Link to='/cadastrousuario' style={{textDecoration: 'none', color:'#40352C'}}>
                        <Typography variant="subtitle1" gutterBottom align="center"  className="cursor">
                            Cadastre-se
                        </Typography>
                        </Link>
                    </Box>
                </Box>
                </Paper>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Login;