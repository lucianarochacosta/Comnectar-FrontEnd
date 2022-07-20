import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { buscaId, post, put } from '../../../service/Service';
import Categoria from '../../../models/Categoria';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function CadastroCategoria() {
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const token= useSelector<TokenState,TokenState["tokens"]>(
        (state) => state.tokens
        );
    const [categorias, setCategorias] = useState<Categoria>( {
        id: 0,
        classeCategoria: '',
        modProdCategoria: '',
        frescorCategoria: false
    })

    useEffect(() => {
        if(token == "") {
            toast.info('Para cadastrar categoria, é preciso estar logado!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
            navigate("/login")
        }
    }, [token])

    useEffect(() => {
        if(id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/categorias/${id}`,setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    function atualizaCategoria(e: ChangeEvent<HTMLInputElement>) {
        setCategorias({
            ...categorias,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("categoria " + JSON.stringify(categorias))

        if (id !== undefined) {
            console.log(categorias)
            put(`/categorias/${id}`, categorias, setCategorias, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria atualizada com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
        } else {
            post(`/categorias`, categorias, setCategorias, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria cadastrada com sucesso!', {
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
        back()
    }

    function back() {
        navigate('/categorias')
    }

    return(
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center">Cadastrar Classe</Typography>
                <TextField value={categorias.classeCategoria} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizaCategoria(e)} id="classeCategoria" label="Classe" variant="outlined" name="classeCategoria" margin="normal" fullWidth/>
                <TextField value={categorias.modProdCategoria} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizaCategoria(e)} id="modProdCategoria" label="Modo de produção" variant="outlined" name="modProdCategoria" margin="normal" fullWidth/>
                <TextField value={categorias.frescorCategoria} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizaCategoria(e)} id="frescorCategoria" label="Frescor" variant="outlined" name="frescorCategoria" margin="normal" fullWidth/>
                <Button type="submit" variant="contained" color="primary">
                    Cadastrar
                </Button>
            </form>
        

        </Container>
    )
}

export default CadastroCategoria;
