import React, {useState, useEffect, ChangeEvent} from 'react';
import { Grid, Typography, Button, TextField, Paper } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import User from '../../models/User';
import './CadastroUsuario.css';
import { cadastroUsuario } from '../../service/Service';

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
        if (userResult.id != 0) {
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
        if(confirmarSenha == user.senhaUsuario){
        cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        alert('Usuario cadastrado com sucesso')
        }else{
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        <Grid container justifyContent='center' alignItems='center' className="bgCadastroFoto">
                <Paper className="paperCadastro">
                <Box className="boxCadastro">
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='paperCadastroTitulo'>Cadastrar</Typography>
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



        </Grid>
    );
}

export default CadastroUsuario;