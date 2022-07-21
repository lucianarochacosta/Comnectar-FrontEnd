import React, { ChangeEvent, useEffect, useState } from 'react'
import { Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText, Paper, Grid, Icon, InputAdornment } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom';
import { busca, buscaId, post, put } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Produto from '../../../models/Produto'
import Categoria from "../../../models/Categoria";
import { Box} from '@mui/material'
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
            headers:{
                "Authorization": token
              }
        })
    }

    async function findByIdProduto(id: string) {
        await buscaId(`produtos/${id}`, setProduto, {
            headers:{
                "Authorization": token
              }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {
        if(e.target.value.startsWith("R$ "))
            e.target.value = e.target.value.substring(3)
            console.log(e.target.value)
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
                headers:{
                    "Authorization": token
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
        navigation('/meusProdutos')
    }
  return (
    <Grid container style={{background:`url(https://i.imgur.com/qWBJAyE.png)`, backgroundSize:"cover", height:"100vh"}}>
        <Box style={{width:"600px",margin:"64px auto"}}>
        <Paper elevation={24} style={{borderRadius:"16px"}}>
        <Box display="flex" style={{margin:"0 auto", padding:"24px 64px"}}>
            <form onSubmit={onSubmit} style={{display:'flex', flexDirection:"column", gap:"12px"}}>
                <Typography variant="h3" color="textPrimary" component="h2" align="center" style={{marginBottom:"12px", fontWeight:"bold"}} >{id !== undefined ? "Atualizar produto" : "Cadastrar produto"}</Typography>
                <Box display='flex' className='gap-1' flexWrap="wrap" >
                    <TextField value={produto.nomeProduto} id="nomeProduto" label="Nome do Produto" variant="outlined" name="nomeProduto" margin="normal" fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedProduto(e)} className='input-m' />
                    <TextField  value={produto.fotoProduto} id="fotoProduto" label="Foto do Produto" name="fotoProduto" variant="outlined" margin="normal" fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedProduto(e)} className='input-g'/>
                </Box>
                <Box display='flex' className='gap-2'>
                    <TextField style={{flex: 1}}
                     value={produto.precoProduto} 
                     id="precoProduto" label="Preço do Produto"  
                     name="precoProduto" 
                     variant="outlined" 
                     margin="normal" 
                     fullWidth 
                     onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedProduto(e)}
                     InputProps={{startAdornment: <InputAdornment position="start" className='cifrao' >R$</InputAdornment>,
          }}/>
                    {/* <TextField style={{flex: 1}} value={produto.unidadeProduto} id="unidadeProduto" label="unidade" name="unidadeProduto" variant="outlined" margin="normal" fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedProduto(e)}/>
                    <TextField  style={{flex: 1}} type='number'  value={produto.estoqueProduto} id="estoqueProduto" label="estoque" name="estoqueProduto" variant="outlined" margin="normal" fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedProduto(e)}/> */}
                </Box>
                <Box display='flex' className='gap-2' flexWrap="wrap">
                    <FormControl style={{flex:"1 1 100%", borderRadius:"8px"}} variant='filled'>
                        <InputLabel id="demo-simple-select-helper-label">Categoria do Produto </InputLabel>
                        <Select
                            style={{borderRadius:"8px"}}
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            onChange={(e:any)=>buscaId(`/categorias/${e.target.value}`, setCategoria, {
                                headers: {
                                    'Authorization': token
                                }
                            })}
                            value={produto.categoria?.id !== undefined ? produto.categoria.id : 0 }
                            > 
                            {categorias.map(categoria=>
                                <MenuItem value={categoria.id}>{categoria.classeCategoria+' | '+categoria.modProdCategoria +' | '+(categoria.frescorCategoria === true && categoria.classeCategoria !== "Legumes" ? "Fresca" : "Não fresca")}</MenuItem>
                                )} 
                        </Select>
                    </FormControl>
                    {/* <TextField style={{flex:"0.5"}} value={produto.shelfProduto} id="shelfProduto" label="validade" name="shelfProduto" variant="outlined" margin="normal" fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedProduto(e)}/>
                    <TextField  style={{flex:"0.5"}} value={produto.chegadaProduto} id="chegadaProduto" label="chegada" name="chegadaProduto" variant="outlined" margin="normal" fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedProduto(e)}/> */}
                </Box>
                    {/* <TextField classes={{root:".MuiOutlinedInput-input"}} value={produto.infoProduto} id="infoProduto" label="descrição" name="infoProduto" variant="outlined" margin="normal" fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedProduto(e)} className="description" /> */}
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