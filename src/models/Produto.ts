import Categoria from "./Categoria";
import User from "./User";

interface Produto {
    id:number;
    nomeProduto:string;
    fotoProduto?:string | null;
    infoProduto?:string | null;
    precoProduto:number;
    unidadeProduto?:string | null;
    estoqueProduto?:number;
    chegadaProduto?:string;
    shelfProduto?:string;
    categoria?:Categoria | null
    usuario?:User | null
    token?: string | null
}

export default Produto;