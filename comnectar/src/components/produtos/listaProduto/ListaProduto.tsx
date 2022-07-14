import { Box, Button } from "@mui/material";
import {Card, CardActions, CardContent, Typography} from "@material-ui/core"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Produto from "../../../models/Produto";
import { busca } from "../../../service/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import CardProduto from "../../Cards/cardProduto/CardProduto";

function ListaProduto(){

    const [produtos, setProdutos] = useState<Produto[]>([])

    const token= useSelector<TokenState,TokenState["tokens"]>(
      (state) => state.tokens
      );

    async function getProdutos() {
        await busca("/produtos", setProdutos, {
            headers: {
                'Authorization': token
            }
        })
      };

      useEffect(() => {

        getProdutos()
    
      }, [produtos.length])
    if(token !== ""){
      return (
        <>
          {
            produtos.map(produto=> (
              <Box m={2} >
                <Card variant="outlined">
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      Produtos
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {produto.nomeProduto}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {produto.infoProduto}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {produto.categoria?.classeCategoria}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {produto.categoria?.modProdCategoria}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {produto.categoria?.frescorCategoria}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Box display="flex" justifyContent="center" mb={1.5}>

                      <Link to={`/atualizarProduto/${produto.id}`} className="text-decorator-none" >
                        <Box mx={1}>
                          <Button variant="contained" className="marginLeft" size='small' color="primary" >
                            Alterar
                          </Button>
                        </Box>
                      </Link>
                      <Link to={`/deletaproduto/${produto.id}`} className="text-decorator-none">
                        <Box mx={1}>
                          <Button variant="contained" size='small' color="secondary">
                            Deletar
                          </Button>
                        </Box>
                      </Link>
                    </Box>
                  </CardActions>
                </Card>
              </Box>
            ))
        }
          </>
      )
    }else{
      return (
        <Box display="flex" gap="48px">
          {produtos.map(produto=>{
            return <CardProduto key={produto.id}
            id= {produto.id}
            nomeProduto = {produto.nomeProduto}
            fotoProduto = {produto.fotoProduto}
            infoProduto = {produto.infoProduto}
            precoProduto = {produto.precoProduto}
            unidadeProduto = {produto.unidadeProduto}
            estoqueProduto = {produto.estoqueProduto}
            chegadaProduto = {produto.chegadaProduto}
            shelfProduto = {produto.shelfProduto}
            categoria = {produto.categoria}
            />
          })}
        </Box>
      )
    }
}

export default ListaProduto;
