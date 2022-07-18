import React, {useEffect, useState} from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import './TabProduto.css';
import ListaProduto from '../listaProduto/ListaProduto';
import { ListaProd } from '../../../paginas/compraProduto/CompraProduto';
import Produto from '../../../models/Produto';
import { busca } from '../../../service/Service';

function TabProduto() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
    const [myProdutos, setMyProdutos] = useState<Produto[]>([])
    const [listaProd, setListaProd] = useState<ListaProd>({produtos:myProdutos})

    async function getProdutos() {
      await busca("/produtos", setMyProdutos, {
          headers: {
              'Authorization': ""
          }
      })
    };

    useEffect(() => {
        getProdutos()
    }, [myProdutos.length])
  
    useEffect(()=>{
        setListaProd({produtos:myProdutos})
    },[myProdutos.length])
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todos os produtos" value="1"/>
            <Tab label="Modos de produção" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaProduto
            produtos={listaProd.produtos}
            />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Modos de produção</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ut eveniet natus totam et.</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabProduto;
