import React, {useState, useEffect, ChangeEvent} from 'react';
import { Grid, Typography, Button, TextField, Paper } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import User from '../../models/User';
import './CadastroUsuario.css';
import { cadastroUsuario } from '../../service/Service';
import { toast } from 'react-toastify';

function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nomeUsuario: '',
            loginUsuario: '',
            senhaUsuario: '',
            localUsuario: '',
            fotoUsuario: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nomeUsuario: '',
            loginUsuario: '',
            senhaUsuario: '',
            localUsuario: '',
            fotoUsuario: ''
        })

    useEffect(() => {
        if (userResult.id !== 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(confirmarSenha === user.senhaUsuario){
        cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        toast.success('Usuario cadastrado com sucesso', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
            })
            navigate("/login");
        }else{
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro', {
                position: "top-right",
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
        <Grid container direction="row" justifyContent="center" alignItems="center" >
            <Grid alignItems="center" xs={12} >
            <Box width='100vw' height='100vh' className="bgCadastroFoto" display={'flex'} alignItems='center' paddingLeft={'10%'} >
                <Paper style={{padding:'32px 48px', borderRadius:'16px', maxWidth:"560px"}} elevation={12} className="paperCadastro">
                            <Box display="flex" justifyContent="center" className='boxJaTemConta'>
                                <Box marginRight={1}>
                                    <Typography variant="subtitle1" gutterBottom align="center">
                                        Já tem uma conta?
                                    </Typography>
                                </Box>
                                <Link to='/login' style={{textDecoration: 'none', color:'#40352C'}}>
                                <Typography variant="subtitle1" gutterBottom align="center"  className="cursor">
                                    Fazer login
                                </Typography>
                                </Link>
                            </Box>
                                            <Box className="boxCadastro" >
                                                <form onSubmit={onSubmit}>
                                                    <Typography variant='h3' gutterBottom color='primary' component='h3' align='center' className='paperCadastroTitulo'>Cadastrar</Typography>
                                                    <TextField value={user.nomeUsuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Insira o seu nome completo' variant='outlined' name='nomeUsuario' margin='normal' fullWidth  className="tfCadastro" />
                                                    <TextField value={user.loginUsuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Informe o seu melhor e-mail' variant='outlined' name='loginUsuario' margin='normal'fullWidth className="tfCadastro"/>
                                                    <TextField value={user.senhaUsuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Insira uma senha ' variant='outlined' name='senhaUsuario' margin='normal' type='password' fullWidth className="tfCadastro"/>
                                                    <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirme a sua senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth className="tfCadastro"/>
                                                    <Box marginTop={2} textAlign='center'>
                                                        <Button type='submit' variant='contained' color='primary' fullWidth className='btnCadastrar'>
                                                                Cadastrar
                                                        </Button>
                                                    </Box>
                                                </form>
                                            </Box>
                        
                    </Paper>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuario;