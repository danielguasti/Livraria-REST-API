import usuarios from "../models/Usuario.js";
import jasonwebtoken from "jsonwebtoken";
import secretToken from "../Secret/secretToken.js"

class authService{
    async login(dto) {
        let novoLogin = new usuarios({
            email: dto.email,
            senha: dto.senha
        });

        const usuario = await usuarios.findOne({email: novoLogin.email}).exec();

        if(!usuario) {
            throw new Error("Usuario não encontrado!");
        }

        if(dto.senha != usuario.senha) {
            throw new Error("Usuário ou senha inválido");
        }

        const acessToken = jasonwebtoken.sign({
            email: usuario.email
        }, secretToken, {
            expiresIn: 86400
        });

        return acessToken;


    }
}

export default authService;