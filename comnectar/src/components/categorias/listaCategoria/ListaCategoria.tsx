import { Button, Card, CardActions, CardContent } from "@material-ui/core";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Categoria from "../../../models/Categoria";
import { busca } from "../../../service/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";

function ListaCategoria() {

  const [categorias, setCategorias] = useState<Categoria[]>([])
 
  let navigate = useNavigate() 

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state)=> state.tokens
  ) 

  useEffect(() => {
    if (token == '') {
      toast.info('Você precisa estar logado!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
        });
      navigate('/login')
    }
  }, [token])

  async function getCategorias() {
    await busca(`/categorias`, setCategorias, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getCategorias()
  }, [categorias.length])

  return (
    <>
      {
        categorias.map(categorias => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Categorias
                </Typography>
                <Typography variant="h5" component="h2">
                  {categorias.classeCategoria}
                </Typography>
                <Typography variant="h5" component="h2">
                  {categorias.modProdCategoria}
                </Typography>
                <Typography variant="h5" component="h2">
                  {categorias.frescorCategoria}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >
                  
                  <Link to={`/cadastrocategoria/${categorias.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft, botao1" size='small' >
                        Atualizar
                      </Button>
                    </Box>
                  </Link>

                  <Link to={`/deletarcategoria/${categorias.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary" className="botao2">
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
  );
}


export default ListaCategoria;
