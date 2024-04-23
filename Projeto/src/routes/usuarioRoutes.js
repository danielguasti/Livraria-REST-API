import express from "express";
import UsuarioController from "../controllers/usuariosController.js";
import autenticado from "../middleware/autenticado.js";

const router = express.Router();

router.use(autenticado);

router
  .get("/usuarios", UsuarioController.listarUsuarios)
  .get("/usuarios/:id", UsuarioController.listarUsuarioPorId)
  .post("/usuarios", UsuarioController.cadastrarUsuario)
  .put("/usuarios/:id", UsuarioController.atualizarUsuario)
  .delete("/usuarios", UsuarioController.excluirUsuario)


export default router; 