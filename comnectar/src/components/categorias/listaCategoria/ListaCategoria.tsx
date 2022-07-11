import { Button, Card, CardActions, CardContent } from "@material-ui/core";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { busca } from "../../../service/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";

function ListaCategoria() {

    const [categoria, setCategoria] = useState<Categoria[]>([])
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
  
    useEffect(()=>{
      if(token == ''){
        alert("Você precisa estar logado")
        navigate("/login")
      }
    }, [token])
  
  
    async function getCategoria(){
      await busca("/categorias", setCategoria, {
        headers: {
          'Authorization': token
        }
      })
    }
  
  
    useEffect(()=>{
      getCategoria()
    }, [categoria.length])
  
  
    return (
        <>
        {
          categoria.map(categoria =>(
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Categorias
                </Typography>
                <Typography variant="h5" component="h2">
                 {categoria.classeCategoria}
                </Typography>
                <Typography variant="h5" component="h2">
                 {categoria.modProdCategoria}
                </Typography>
                <Typography variant="h5" component="h2">
                 {categoria.frescorCategoria}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >
    
                  <Link to={`/cadastrocategoria/${categoria.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>

                  <Link to={`/deletacategoria/${categoria.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
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

}

export default ListaCategoria;