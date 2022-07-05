interface UserLogin {
    id:number;
    nomeUsuario?:string | null
    loginUsuario:string;
    senhaUsuario:string;
    localUsuario?:string | null
    foto?:string | null
    token?:string | null
}
export default UserLogin;