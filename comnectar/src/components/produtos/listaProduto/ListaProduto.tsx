import { Box, Button } from "@mui/material";
import {Card, CardActions, CardContent, Typography} from "@material-ui/core"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Produto from "../../../models/Produto";
import { busca } from "../../../service/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import CardProduto from "../../Cards/cardProduto/CardProduto";
import { ListaProd } from "../../../paginas/compraProduto/CompraProduto";
import './ListaProduto.css';

function ListaProduto({produtos}:ListaProd){

    const token= useSelector<TokenState,TokenState["tokens"]>(
      (state) => state.tokens
      );

    if(token !== ""){
      return (
        <Box className="card-c">
          {produtos.map(produto=>{
            return <CardProduto 
            key={produto.id}
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
            token = {token}
            />
          })}
          </Box>)}
    else{
      return (
        <Box className="card-c">
          {produtos.map(produto=>{
            return <CardProduto 
            key={produto.id}
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
            token = {token}
            />
          })}
        </Box>
      )
    }
}

export default ListaProduto;
