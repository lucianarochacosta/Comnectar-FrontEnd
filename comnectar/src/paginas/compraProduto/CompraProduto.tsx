import { Button, createStyles, FormControl, FormHelperText, Grid, InputLabel, makeStyles, NativeSelect, TextField, Theme, Typography } from '@material-ui/core'
import React, { ChangeEvent, useEffect, useState } from 'react'
import './CompraProduto.css';
import { Box, Pagination } from '@mui/material';
import { api, busca } from '../../service/Service';
import Produto from '../../models/Produto';
import ListaProduto from '../../components/produtos/listaProduto/ListaProduto';
import SwapVertIcon from '@mui/icons-material/SwapVert';

export interface ListaProd {
  produtos: Produto[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 120,
    },
    selectEmpty: {
      border: 0,
    },
  }),
);

function CompraProduto() {
  const classes = useStyles();
  const [myProdutos, setMyProdutos] = useState<Produto[]>([])
  const [listaProd, setListaProd] = useState<ListaProd>({ produtos: myProdutos })
  const [nomeProduto, setNomeProduto] = useState("");
  const [page, setPage] = useState(1)
  const qntd = 8; // produtos por página
  const [order, setOrder] = useState(30);

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
  // useEffect(() => {
  //   if (nomeProduto == "") {
  //     getProdutos()
  //   }
  // }, [myProdutos.length])

  useEffect(() => {
    setListaProd({ produtos: myProdutos.slice(page * qntd - qntd, page * qntd) })
  }, [myProdutos.length,myProdutos[0],
  order, myProdutos[myProdutos.length-1],
  myProdutos[Math.floor((myProdutos.length-1)/2)]
])  
  
  const filtrar = (e:ChangeEvent<any>)=>{
    const event = e;
    if(event.currentTarget.id == "Fruta"){
      api.get("/produtos").then((resp)=>{
        console.log(resp.data)
      setMyProdutos(resp.data.filter((response:Produto)=>response.categoria?.classeCategoria == "Fruta"))
       })
      }
       else if (event.currentTarget.id=="Verdura"){
    api.get("/produtos").then((resp)=>{
      console.log(resp.data)
    setMyProdutos(resp.data.filter((response:Produto)=>response.categoria?.classeCategoria == "Verdura"))
    })}
    else if(event.currentTarget.id=="Legumes"){
    api.get("/produtos").then((resp)=>{
      console.log(resp.data)
    setMyProdutos(resp.data.filter((response:Produto)=>response.categoria?.classeCategoria == "Legumes"))
      })}}

  useEffect(()=>{
    if(order == 10){
      setMyProdutos(myProdutos.sort((a,b)=> 
         (a.precoProduto < b.precoProduto)? -1 : 1
        ));
    }
    else if(order == 20){
      setMyProdutos(myProdutos.sort((a,b)=> 
         (a.precoProduto > b.precoProduto)? -1 : 1
        ));
    }
    else if(order == 30){
      busca('/produtos', setMyProdutos, {
        "Authorization": ""
      })
    }
    else if(order == 40){
        setMyProdutos(myProdutos.sort((a,b)=> 
         (a.nomeProduto < b.nomeProduto)? -1 : 1
        ));
    }
    else if (order == 50){
      setMyProdutos(myProdutos.sort((a,b)=> 
         (a.nomeProduto > b.nomeProduto)? -1 : 1
        ));
    }
  }, [order])

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
                    <Button variant="outlined" id="Fruta"  onClick={(e)=>filtrar(e)}>FRUTAS</Button>
                    <Button variant="outlined" id="Legumes" onClick={(e)=>filtrar(e)}> LEGUMES</Button>
                    <Button variant="outlined" id="Verdura" onClick={(e)=>filtrar(e)} >VERDURAS</Button>
                  </Box>
                </Box>
                <Box className='line'>

                </Box>
                <Box className='flex-center' justifyContent="space-between">
                  <span className='m-l ft-24'>
                    {(myProdutos.length === 1) ? listaProd.produtos.length + " de " + myProdutos.length + " resultado" : (myProdutos.length > 1 ? listaProd.produtos.length + " de " + myProdutos.length + " resultados" : "nenhum resultado")}</span>
                  <Box>
                    <Box className='gap-2' onClick={() => { }}>
                      <span className='cursor-p'>ordenar:</span>
                      <FormControl className={classes.formControl} >
                         <NativeSelect
                            className={classes.selectEmpty}
                            defaultValue={order}
                            value={order}
                            inputProps={{
                            name: 'order',
                            id: 'uncontrolled-native',
                          }
                        }
                        onChange={(e:any)=>setOrder(e.target.value)}
                        >
                          <option value={10}>Menor Preço</option>
                          <option value={20}>Maior Preço</option>
                          <option value={30}>Todos</option>
                          <option value={40}>a-z A-Z</option>
                          <option value={50}>z-a Z-A</option>
                        </NativeSelect>
                      </FormControl>
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