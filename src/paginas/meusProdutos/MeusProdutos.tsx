import { Button, createStyles, FormControl, makeStyles, NativeSelect, TextField, Theme, Typography } from '@material-ui/core';
import { Box, fabClasses, Pagination } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ListaProduto from '../../components/produtos/listaProduto/ListaProduto';
import Produto from '../../models/Produto';
import { api, busca } from '../../service/Service';
import { TokenState } from '../../store/tokens/tokensReducer';
import { ListaProd } from '../compraProduto/CompraProduto';
import './MeusProdutos.css'

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

function MeusProdutos() {
  const classes = useStyles();
  const [myProdutos, setMyProdutos] = useState<Produto[]>([])
  const [listaProd, setListaProd] = useState<ListaProd>({ produtos: myProdutos })
  const [nomeProduto, setNomeProduto] = useState("");
  const [page, setPage] = useState(1)
  const qntd = 8; // produtos por página
  const [order, setOrder] = useState(30);
  const navigation = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )
  const [btnFiltro, setBtnFiltro] = useState(false);
  const [btnFiltro1, setBtnFiltro1] = useState(false);
  const [btnFiltro2, setBtnFiltro2] = useState(false);
  const [filtro, setFiltro] = useState(false)

  async function getProdutos() {
    if(filtro == false)
    await busca("/produtos", setMyProdutos, {
      headers: {
        'Authorization': ""
      }
    })
  };
  useEffect(() => {
    if (token == "") {
      navigation("/login")
    }
  }, [token])

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
  }, [nomeProduto,myProdutos.length,filtro])

  useEffect(() => {
    setListaProd({ produtos: myProdutos.slice(page * qntd - qntd, page * qntd) })
  }, [myProdutos.length, myProdutos[0],
    order, myProdutos[myProdutos.length - 1],
  myProdutos[Math.floor((myProdutos.length - 1) / 2)]
  ])



  const filtrar = (e: ChangeEvent<any>) => {
    const event = e;
    if (event.currentTarget.id == "Fruta") {
      setFiltro(!filtro)
      setBtnFiltro(!btnFiltro)
      api.get("/produtos").then((resp) => {
        setMyProdutos(resp.data.filter((response: Produto) => response.categoria?.classeCategoria == "Fruta"))
      })
    }
    else if (event.currentTarget.id == "Verdura") {
      setFiltro(!filtro)
      setBtnFiltro1(!btnFiltro1)
      api.get("/produtos").then((resp) => {
        setMyProdutos(resp.data.filter((response: Produto) => response.categoria?.classeCategoria == "Verdura"))
      })
    }
    else if (event.currentTarget.id == "Legumes") {
      setFiltro(!filtro)
      setBtnFiltro2(!btnFiltro2)
      api.get("/produtos").then((resp) => {
        setMyProdutos(resp.data.filter((response: Produto) => response.categoria?.classeCategoria == "Legume"))
      })
    }
  }

  useEffect(() => {
    if (order == 10) {
      setMyProdutos(myProdutos.sort((a, b) =>
        (a.precoProduto < b.precoProduto) ? -1 : 1
      ));
    }
    else if (order == 20) {
      setMyProdutos(myProdutos.sort((a, b) =>
        (a.precoProduto > b.precoProduto) ? -1 : 1
      ));
    }
    else if (order == 30) {
      busca('/produtos', setMyProdutos, {
        "Authorization": ""
      })
    }
    else if (order == 40) {
      setMyProdutos(myProdutos.sort((a, b) =>
        (a.nomeProduto < b.nomeProduto) ? -1 : 1
      ));
    }
    else if (order == 50) {
      setMyProdutos(myProdutos.sort((a, b) =>
        (a.nomeProduto > b.nomeProduto) ? -1 : 1
      ));
    }
  }, [order])

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap="24px">
      <Typography variant="h2" component="h2" style={{ textAlign: "center", margin: "48px 0" }} className="title titulo2">Meus Produtos</Typography>
      <Box className="boxBusca flex-column gap-48" >
        <Box className="gap-8">
          <Box className="caixaBusca">
            <TextField value={nomeProduto} label="O que você precisa?" type="search" fullWidth variant='outlined' onChange={(e: ChangeEvent<HTMLInputElement>) => updateNomeProduto(e)} />
          </Box>
          <Button color="primary" variant="contained" className="botaoBusca" onClick={() => getProdutosByName()}>
            Buscar
          </Button>
        </Box>
        <Box justifyContent="center" gap="24px" display="flex" width="100%" >
          <Button className="btn-filtro" color={btnFiltro == true ? "secondary" : "primary"} variant={btnFiltro == false ? "outlined" : "contained"} id="Fruta" onClick={(e) => filtrar(e)} disabled={(btnFiltro1 || btnFiltro2? true: false)}>FRUTAS</Button>
          <Button className="btn-filtro" color={btnFiltro2 == true ? "secondary" : "primary"} variant={btnFiltro2 == false ? "outlined" : "contained"} id="Legumes" onClick={(e) => filtrar(e)} disabled={(btnFiltro || btnFiltro1? true: false)}> LEGUMES</Button>
          <Button className="btn-filtro" color={btnFiltro1 == true ? "secondary" : "primary"} variant={btnFiltro1 == false ? "outlined" : "contained"} id="Verdura" onClick={(e) => filtrar(e)} disabled={(btnFiltro || btnFiltro2? true: false)} >VERDURAS</Button>
        </Box>
      </Box>
      <Box className='line'>

      </Box>
      <Box className='flex-center' justifyContent="space-between" width="1200px" paddingRight="0px" paddingLeft="64px">
        <span className='m-l ft-24'>
          {(myProdutos.length === 1) ? listaProd.produtos.length + " de " + myProdutos.length + " resultado" : (myProdutos.length > 1 ? listaProd.produtos.length + " de " + myProdutos.length + " resultados" : "Nenhum resultado")}</span>
        <Box>
          <Box className='gap-2' onClick={() => { }}>
            <span className='cursor-p'>Ordenar:</span>
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
                onChange={(e: any) => setOrder(e.target.value)}
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
      <Box className="box-produto" width="1200px" justifyContent="center" style={{ paddingLeft: "64px" }}>
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
  )
}

export default MeusProdutos