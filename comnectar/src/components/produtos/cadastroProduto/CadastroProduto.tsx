import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom';
import { busca, buscaId, post, put } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Produto from '../../../models/Produto'
import Categoria from "../../../models/Categoria";


function CadastroProduto() {  
  const navigation = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
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
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdProduto(id: string) {
        await buscaId(`produtos/${id}`, setProduto, {
            headers: {
                'Authorization': token
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
                headers: {
                    'Authorization': token
                }
            })
            alert('Produto atualizado com sucesso');
        } else {
            post(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Produto cadastrado com sucesso');
        }
        back()
    }

    function back() {
        navigation('/home')
    }
  return (
    <Container maxWidth="sm" className="topo">    
        <form onSubmit={onSubmit}>
            <Typography variant="h3" color="textSecondary" component="h2" align="center" >Formulário de cadastro produto</Typography>
            <TextField value={produto.nomeProduto} id="nomeProduto" label="Nome" variant="outlined" name="nomeProduto" margin="normal" fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedProduto(e)}/>
            <TextField  value={produto.fotoProduto} id="fotoProduto" label="foto" name="fotoProduto" variant="outlined" margin="normal" fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedProduto(e)}/>
            <TextField  value={produto.infoProduto} id="infoProduto" label="descrição" name="infoProduto" variant="outlined" margin="normal" fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedProduto(e)}/>
            <TextField type='number' value={produto.precoProduto} id="precoProduto" label="preço" name="precoProduto" variant="outlined" margin="normal" fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedProduto(e)}/>
            <TextField  value={produto.unidadeProduto} id="unidadeProduto" label="unidade" name="unidadeProduto" variant="outlined" margin="normal" fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedProduto(e)}/>
            <TextField type='number'  value={produto.estoqueProduto} id="estoqueProduto" label="estoque" name="estoqueProduto" variant="outlined" margin="normal" fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedProduto(e)}/>
            <TextField  value={produto.chegadaProduto} id="chegadaProduto" label="chegada" name="chegadaProduto" variant="outlined" margin="normal" fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedProduto(e)}/>
            <TextField  value={produto.shelfProduto} id="shelfProduto" label="shelf" name="shelfProduto" variant="outlined" margin="normal" fullWidth onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedProduto(e)}/>
        
            <FormControl fullWidth variant='filled'>
                <InputLabel id="demo-simple-select-helper-label">categoria </InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                     onChange={(e:any)=>buscaId(`/categorias/${e.target.value}`, setCategoria, {
                         headers: {
                             "Authorization": token
                         }
                     })}
                     value={null}
                    > 
                    {categorias.map(categoria=>
                        <MenuItem value={categoria.id}>{categoria.classeCategoria+' | '+categoria.modProdCategoria +' | '+categoria.frescorCategoria}</MenuItem>
                        )} 
               </Select>
                <FormHelperText variant='standard'>Escolha um categoria para a produto</FormHelperText> 
                 <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </FormControl>
        </form>
    </Container>
)
}

export default CadastroProduto