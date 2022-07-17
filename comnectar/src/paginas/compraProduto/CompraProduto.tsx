import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React, { ChangeEvent, useEffect, useState } from 'react'
import './CompraProduto.css';
import { Box, Pagination } from '@mui/material';
import { busca } from '../../service/Service';
import Produto from '../../models/Produto';
import ListaProduto from '../../components/produtos/listaProduto/ListaProduto';
import SwapVertIcon from '@mui/icons-material/SwapVert';

export interface ListaProd {
  produtos: Produto[];
}
function CompraProduto() {

  const [myProdutos, setMyProdutos] = useState<Produto[]>([])
  const [listaProd, setListaProd] = useState<ListaProd>({ produtos: myProdutos })
  const [nomeProduto, setNomeProduto] = useState("");
  const [page, setPage] = useState(1)
  const qntd = 8; // produtos por página

  async function getProdutos() {
    await busca("/produtos", setMyProdutos, {
      headers: {
        'Authorization': ""
      }
    })
  };
  
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setListaProd({ produtos: myProdutos.slice(value * qntd - qntd, value * qntd) })
  };
  
  const updateNomeProduto = (e: ChangeEvent<HTMLInputElement>) => {
    setNomeProduto(e.target.value)
  }
  async function getProdutosByName() {
    if (nomeProduto !== "")
      await busca(`/produtos/nome/${nomeProduto}`, setMyProdutos,
        {
          headers: {
            'Authorization': ""
          }
        })
  }
  useEffect(() => {
    if (nomeProduto == "") {
      getProdutos()
    }
  }, [myProdutos.length, nomeProduto])

  useEffect(() => {
    setListaProd({ produtos: myProdutos.slice(page * qntd - qntd, page * qntd) })
  }, [myProdutos.length])

  return (
    <>
      <Grid container className="topoCompra" >
        <Grid item xs={12}>
          <Box className='flex-column content-center container' >
            {/* <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center" className="boxTopoCompra" gap="64px">
          <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center" className="blurCompra" >
            <Typography variant="h1" align="center" className="tituloCompra">
              Nossos produtos
            </Typography>
          </Box>
        </Box>    */}
            <Grid item xs={12} className="m-auto-100">
              <Box className="m-auto-80 flex-column" >
                <Box className="boxBusca flex-column gap-48" >
                  <Typography variant="h2" className="title">
                    Encontre o que você deseja:
                  </Typography>
                  <Box className="gap-8">
                    <Box className="caixaBusca">
                      <TextField value={nomeProduto} label="O que você precisa?" type="search" fullWidth variant='outlined' onChange={(e: ChangeEvent<HTMLInputElement>) => updateNomeProduto(e)} />
                    </Box>
                    <Button color="primary" variant="contained" className="botaoBusca" onClick={() => getProdutosByName()}>
                      Buscar
                    </Button>
                  </Box>
                  <Box className='gap-8' >
                    <Button variant="outlined">FRUTAS</Button>
                    <Button variant="outlined">LEGUMES</Button>
                    <Button variant="outlined">VERDURAS</Button>
                  </Box>
                </Box>
                <Box className='line'>

                </Box>
                <Box className='flex-center' justifyContent="space-between">
                  <span className='m-l ft-24'>
                    {(myProdutos.length === 1) ? listaProd.produtos.length + " de " + myProdutos.length + " resultado" : (myProdutos.length > 1 ? listaProd.produtos.length + " de " + myProdutos.length + " resultados" : "nenhum resultado")}</span>
                  <Box>
                    <Box className='gap-2' onClick={() => { }}>
                      <span className='cursor-p'>ordenar</span>
                      <SwapVertIcon fontSize="medium" className="order cursor-p" />
                    </Box>
                  </Box>
                </Box>
                <Box  className="box-produto" >
                  <ListaProduto
                    produtos={listaProd?.produtos}
                  />
                  <Pagination
                    count={Number.isInteger(myProdutos.length / qntd) ? Math.floor(myProdutos.length / qntd) : Math.floor(myProdutos.length / qntd) + 1}
                    page={page} variant="outlined"
                    shape="rounded"
                    className='position-bt-r'
                    onChange={handleChange}
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