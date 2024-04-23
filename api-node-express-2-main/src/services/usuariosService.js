import usuarios from "../models/Usuario.js"

class UsuarioService {
    async cadastrar(dto) {
        let novoUsuario = new usuarios({
            nome: dto.nome, 
            email: dto.email,
            senha: dto.senha
        })
        const usuario = await usuarios.findOne({email: novoUsuario.email}).exec();

        if (usuario) {
            throw new Error('Usuario ja cadastrado')
        }

        try { 
    
            const criandoUsuario = await novoUsuario.save();

            return criandoUsuario;

        } catch (error) {
            throw new Error('Erro ao cadastrar usuario')
        }

        
    };
}

export default UsuarioService