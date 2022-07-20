import { Button, Card, CardActions, CardContent } from "@material-ui/core";
import { Box , Typography} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Categoria from "../../../models/Categoria";
import { buscaId, deleteId } from "../../../service/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";

function DeletaCategoria() {
  let navigate = useNavigate();
  const { id } = useParams<{id: string}>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [categorias, setCategorias] = useState<Categoria>()

  useEffect(() =>{
      if(id !== undefined){
          findById(id)
      }
  }, [id])

  async function findById(id: string) {
      buscaId(`/categorias/${id}`, setCategorias, {
        headers: {
          'Authorization': token
      }
      })
      }

      function sim() {
        navigate('/categorias')
          deleteId(`/categorias/${id}`, {
            headers: {
              'Authorization': token
          }
          });
          toast.success('Categoria deletada com sucesso!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
            });
        }
      
        function nao() {
          navigate('/categorias')
        }

return (
  <>
    <Box m={2}>
      <Card variant="outlined" >
        <CardContent>
          <Box justifyContent="center">
            <Typography color="textSecondary" gutterBottom>
              Deseja deletar o item:
            </Typography>
            <Typography color="textSecondary" >
            {categorias?.classeCategoria} {categorias?.modProdCategoria} {categorias?.frescorCategoria==true?"Fresco": "Não Fresco"}
            </Typography>
          </Box>

        </CardContent>
        <CardActions>
          <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
            <Box mx={2}>
            <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
              Sim
            </Button>
            </Box>
            <Box>
            <Button  onClick={nao} variant="contained" size='large' color="secondary">
              Não
            </Button>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </Box>
  </>
);
}
export default DeletaCategoria;
