import React, {useState,useEffect,ChangeEvent} from "react";
import { Grid, TextField, Typography, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from 'react-use-localstorage';
import './Login.css';
import UserLogin from "../../models/UserLogin";
import { login } from "../../service/Service";

function Login (){
    let navigate = useNavigate();
    const [token,setToken] = useLocalStorage('token');
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
                    navigate('/home')
                }
            },[token])
        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{ 
                await login(`/usuarios/logar`,userLogin,setToken)
                alert('Usuário logado com sucesso!')
            } catch(error){
                alert('Dados incorretos. Erro ao logar!');
            }
        }
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" className="background">
            <Grid alignItems="center" xs={7}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color="textPrimary" align="center" component="h3" className="texto">
                            Entrar
                        </Typography>
                        <TextField  value={userLogin.loginUsuario} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id="usuario" label="usuario" variant="outlined" name="usuario" margin="normal" fullWidth />
                        <TextField  value={userLogin.senhaUsuario} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id="senha" label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                        <Box marginTop={2} textAlign="center">
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' className="botao">
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form >
                    <Box display="flex" justifyContent="center" marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center">
                                Não tem uma conta?
                            </Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                        <Typography variant="subtitle1" gutterBottom align="center"  className="cursor">
                            Cadastre-se
                        </Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={5} className='imagem'>

            </Grid>
        </Grid>
    );
}

export default Login;