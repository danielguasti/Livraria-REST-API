import express from "express";
import LivroController from "../controllers/livrosController.js";
import autenticado from "../middleware/autenticado.js";

const router = express.Router();
router.use(autenticado);


router
  .get("/livros", LivroController.listarLivros)
  .get("/livros/busca", LivroController.buscaLivro)
  .get("/livros/:id", LivroController.listarLivroPorId)
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.excluirLivro)

export default router;   