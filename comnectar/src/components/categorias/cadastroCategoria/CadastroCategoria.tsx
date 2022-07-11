import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { buscaId, post, put } from '../../../service/Service';
import Categoria from '../../../models/Categoria';

function CadastroCategoria() {
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const [token, setToken] = useLocalStorage('token');
    const [categoria, setCategoria] = useState<Categoria>( {
        id: 0,
        classeCategoria: '',
        modProdCategoria: '',
        frescorCategoria: true||false
    })

    useEffect(() => {
        if(token == "") {
            alert("Para cadastrar categoria, é preciso estar logado!")
            navigate("/login")
        }
    }, [token])

    useEffect(() => {
        if(id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/categorias/${id}`,setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    function atualizaCategoria(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("categoria " + JSON.stringify(categoria))

        if (id !== undefined) {
            console.log(categoria)
            put(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Categoria atualizada com sucesso!');
        } else {
            post(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Categoria cadastrada com sucesso!');
        }
        back()
    }

    function back() {
        navigate('/listacategoria')
    }

    return(
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center">Cadastrar Classe</Typography>
                <TextField value={categoria.classeCategoria} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizaCategoria(e)} id="classeCategoria" label="classeCategoria" variant="outlined" name="classeCategoria" margin="normal" fullWidth/>
                <Button type="submit" variant="contained" color="primary">
                    Cadastrar
                </Button>
            </form>
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center">Cadastrar Modo de Produção</Typography>
                <TextField value={categoria.modProdCategoria} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizaCategoria(e)} id="modProdCategoria" label="modProdCategoria" variant="outlined" name="modProdCategoria" margin="normal" fullWidth/>
                <Button type="submit" variant="contained" color="primary">
                    Cadastrar
                </Button>
            </form>
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center">Cadastrar Frescor</Typography>
                <TextField value={categoria.frescorCategoria} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizaCategoria(e)} id="frescorCategoria" label="frescorCategoria" variant="outlined" name="frescorCategoria" margin="normal" fullWidth/>
                <Button type="submit" variant="contained" color="primary">
                    Cadastrar
                </Button>
            </form>

        </Container>
    )
}

export default CadastroCategoria;
