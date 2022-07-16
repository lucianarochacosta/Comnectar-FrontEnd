import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React, { ChangeEvent, useEffect, useState } from 'react'
import './CompraProduto.css';
import { Box } from '@mui/material';
import CardProduto from '../../components/Cards/cardProduto/CardProduto';
import { busca } from '../../service/Service';
import Produto from '../../models/Produto';
import ListaProduto from '../../components/produtos/listaProduto/ListaProduto';

export interface ListaProd {
  produtos : Produto[];
}
function CompraProduto() {
  const [myProdutos, setMyProdutos] = useState<Produto[]>([])
  const [listaProd, setListaProd] = useState<ListaProd>({produtos:myProdutos})
  const [nomeProduto, setNomeProduto] = useState("");
  async function getProdutos() {
    await busca("/produtos", setMyProdutos, {
        headers: {
            'Authorization': ""
        }
    })
  };
  async function getProdutosByName(){
    await busca(`/produtos/nome/${nomeProduto}`, setMyProdutos, 
    {
      headers: {
          'Authorization': ""
      }
})
  }
  useEffect(() => {
    if(nomeProduto == ""){
      getProdutos()
    }
  }, [myProdutos.length,nomeProduto])

  useEffect(()=>{
    getProdutosByName()
  }, [nomeProduto])
  useEffect(()=>{
      setListaProd({produtos:myProdutos})
  },[myProdutos.length])

  const updateNomeProduto = (e:ChangeEvent<HTMLInputElement>)=>{
    setNomeProduto(e.target.value)
  }
  return (
    <>
      <Grid container className="topoCompra" justifyContent='center' alignItems="center">
        <Grid item xs={12}>
        <Box display="flex" flexDirection="column" gap="72px" justifyContent="center">
        <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center" className="boxTopoCompra" gap="64px">
          <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center" className="blurCompra" >
            <Typography variant="h1" align="center" className="tituloCompra">
              Nossos produtos
            </Typography>
          </Box>
        </Box>   
        <Grid item xs={12} style={{margin:"0 auto", width:"100%"}}>
        <Box width="80%" margin="0 auto" gap="48px" display="flex" flexDirection="column">
        <Box display="flex" flexDirection="column" className="boxBusca" gap="48px">
          <Typography variant="h2" className="title">
            Encontre o que você deseja:
          </Typography>
            <Box display="flex" gap="8px">
              <Box display="flex" className="caixaBusca">
                <TextField value={nomeProduto} label="O que você precisa?" type="search" fullWidth variant='outlined' onChange={(e:ChangeEvent<HTMLInputElement>)=>updateNomeProduto(e)}/>
              </Box>
              <Button color="primary" variant="contained" className="botaoBusca">
                Buscar
              </Button>
            </Box>
          <Box display="flex" gap="8px" >
            <Button variant="outlined">FRUTAS</Button>
            <Button variant="outlined">LEGUMES</Button>
            <Button variant="outlined">VERDURAS</Button>
          </Box>
          </Box>
          <Box style={{height:"2px", background:"#D9D9D9"}}>

          </Box>
          <Box display="flex" flexDirection="row" className="boxProdutos" minHeight="512px"  marginBottom="72px">          
            <ListaProduto
            produtos={listaProd?.produtos}
            />
          </Box>
        </Box>
        </Grid>
        </Box> 
        </Grid>
      </Grid>
    </>
  )
}

export default CompraProduto