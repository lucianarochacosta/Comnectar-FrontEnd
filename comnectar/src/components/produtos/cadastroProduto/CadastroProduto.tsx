import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText, Paper, Grid } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom';
import { busca, buscaId, post, put } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Produto from '../../../models/Produto'
import Categoria from "../../../models/Categoria";
import { Box, inputBaseClasses } from '@mui/material'
import './CadastroProduto.css'
import { toast } from 'react-toastify';


function CadastroProduto() {  
  const navigation = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    useEffect(() => {
        if (token == "") {
            toast.info('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
            navigation("/login")

        }
    }, [navigation, token])

    const [produto, setProduto] = useState<Produto>(
        {
          id:0,
          nomeProduto:"",
          fotoProduto:"",
          infoProduto:"",
          precoProduto:0,
          unidadeProduto:"",
          estoqueProduto:0,
          chegadaProduto:"",
          shelfProduto:"",
          categoria: null,
          usuario:null
        })

    const [categoria, setCategoria] = useState<Categoria>({
      id: 0,
      classeCategoria: "",
      modProdCategoria: "",
      frescorCategoria: false
    })

    useEffect(() => { 
        setProduto({
            ...produto,
            categoria: categoria
        })
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    async function getCategorias() {
        await busca("/categorias", setCategorias, {
            auth:{
                username: "root",
                password: "root"
              }
        })
    }

    async function findByIdProduto(id: string) {
        await buscaId(`produtos/${id}`, setProduto, {
            auth:{
                username: "root",
                password: "root"
              }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/produtos/${id}`, produto, setProduto, {
                auth:{
                    username: "root",
                    password: "root"
                  }
            })
            toast.success('Produto atualizado com sucesso', {
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
            post(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Produto cadastrado com sucesso', {
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
        navigation('/home')
    }
  return (
    <Grid container >
        <Box style={{width:"1018px",margin:"64px auto"}}>
        <Paper elevation={24}>
        <Box display="flex" style={{margin:"0 auto", padding:"70px 130px"}}>
            <form onSubmit={onSubmit} style={{display:'flex', flexDirection:"column", gap:"8px"}}>
                <Typography variant="h3" color="textSecondary" component="h2" align="center" >Formulário de cadastro produto</Typography>
                <Box display='flex' className='gap-1' >
                    <TextField value={produto.nomeProduto} id="nomeProduto" label="Nome" variant="outlined" name="nomeProduto" margin="normal" fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedProduto(e)} className='input-m' />
                    <TextField  value={produto.fotoProduto} id="fotoProduto" label="foto" name="fotoProduto" variant="outlined" margin="normal" fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedProduto(e)} className='input-g'/>
                </Box>
                <Box display='flex' className='gap-2'>
                    <TextField className="input-m" type='number' value={produto.precoProduto} id="precoProduto" label="preço" name="precoProduto" variant="outlined" margin="normal" fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedProduto(e)}/>
                    <TextField className="input-p" value={produto.unidadeProduto} id="unidadeProduto" label="unidade" name="unidadeProduto" variant="outlined" margin="normal" fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedProduto(e)}/>
                    <TextField className="input-p" type='number'  value={produto.estoqueProduto} id="estoqueProduto" label="estoque" name="estoqueProduto" variant="outlined" margin="normal" fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedProduto(e)}/>
                </Box>
                <Box display='flex' className='gap-2'>
                    <FormControl className='input-m' variant='filled'>
                        <InputLabel id="demo-simple-select-helper-label">categoria </InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            onChange={(e:any)=>buscaId(`/categorias/${e.target.value}`, setCategoria, {
                                headers: {
                                    'Authorization': token
                                }
                            })}
                            value={produto.categoria?.id !== undefined ? produto.categoria.id : " " }
                            > 
                            {categorias.map(categoria=>
                                <MenuItem value={categoria.id}>{categoria.classeCategoria+' | '+categoria.modProdCategoria +' | '+(categoria.frescorCategoria === true && categoria.classeCategoria !== "Legumes" ? "Fresca" : "Não fresca")}</MenuItem>
                                )} 
                        </Select>
                    </FormControl>
                    <TextField className="input-p" value={produto.shelfProduto} id="shelfProduto" label="shelf" name="shelfProduto" variant="outlined" margin="normal" fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedProduto(e)}/>
                    <TextField  className="input-p" value={produto.chegadaProduto} id="chegadaProduto" label="chegada" name="chegadaProduto" variant="outlined" margin="normal" fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedProduto(e)}/>
                </Box>
                    <TextField classes={{root:".MuiOutlinedInput-input"}} value={produto.infoProduto} id="infoProduto" label="descrição" name="infoProduto" variant="outlined" margin="normal" fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedProduto(e)} className="description" />
                        <Button type="submit" variant="contained" color="primary">
                            Finalizar
                        </Button>
                </form>   
             </Box> 
        </Paper>  
        </Box>
        
       
    </Grid>
)
}

export default CadastroProduto