import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Produto from "../../../models/Produto";
import { buscaId, deleteId } from "../../../service/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import CardDeletar from "../../cardDeletar/CardDeletar";
import CardProduto from "../../Cards/cardProduto/CardProduto";
import { ID } from "../../modalDeletar/ModalDeletar";

function DeletarProduto(props:ID) {
    let navigate = useNavigate();
    // const { id } = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
    const [produto, setProduto] = useState<Produto>()
    const id = props.id

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    useEffect(()=>{
      if(token == ""){
        navigate("/login")
      }
    },[token])

    async function findById(id: string) {
        buscaId(`/produtos/${id}`, setProduto, {
          headers: {
            'Authorization': token
        }
          })
        }

        function sim() {
          navigate('/produtos')
            deleteId(`/produtos/${id}`, {
              headers: {
                'Authorization': token
            }
            });
            toast.success('Produto deletado com sucesso', {
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
            navigate('/produtos')
          }
  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography variant="h6"  style={{fontWeight:"bold"}} color="textPrimary" gutterBottom>
                Deseja deletar o produto:
              </Typography>
              <CardDeletar
              id={produto?.id ? produto.id : 0}
              nomeProduto={produto?.nomeProduto ?produto.nomeProduto : ""}
              fotoProduto={produto?.fotoProduto}
              precoProduto={produto?.precoProduto ?produto.precoProduto: 0}
              categoria= {produto?.categoria}
              />
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
              <Button  onClick={nao} variant="contained" size='large' color="primary">
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
export default DeletarProduto;
