import UsuarioService from "../services/usuariosService.js";
import usuarios from "../models/Usuario.js";

const usuarioService = new UsuarioService();

class UsuarioController {


    static listarUsuarios = async (req, res) => {
        try {
            const usuariosResultado = await usuarios.find().exec();
      
            res.status(200).json(usuariosResultado);
          } catch (erro) {
            res.status(500).json({ message: "Erro interno no servidor" });
          }
    };

    static listarUsuarioPorId = async (req, res) => {
        try {
            const id = req.params.id;
      
            const usuariosResultados = await usuarios.findById(id).exec();
      
            res.status(200).send(usuariosResultados);
          } catch (erro) {
            res.status(400).send({message: `${erro.message} - Id do usuário não localizado.`});
          }
    };

    static cadastrarUsuario = async (req, res) => {
        const {nome, email, senha} = req.body;

        try {
            const usuario = await usuarioService.cadastrar({nome, email, senha});

            res.status(201).send("cadastrado com sucesso");

        } catch (error) {
            res.status(400).send({message: error.message});

        }

        
    };

    static atualizarUsuario = async (req, res) => {
        try {
            const id = req.params.id;
      
            await usuarios.findByIdAndUpdate(id, {$set: req.body});
      
            res.status(200).send({message: "Usuário atualizado com sucesso"});
          } catch (erro) {
            res.status(500).send({message: erro.message});
          } 
    };

    static excluirUsuario = async (req, res) => {
        try {
            const id = req.params.id;
      
            await usuarios.findByIdAndDelete(id);
      
            res.status(200).send({message: "Usuário removido com sucesso"});
          } catch (erro) {
            res.status(500).send({message: erro.message});
          }
    }



};

export default UsuarioController