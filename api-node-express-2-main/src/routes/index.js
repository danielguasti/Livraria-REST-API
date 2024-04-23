import express from "express";
import livros from "./livrosRoutes.js"
import autores from "./autoresRoutes.js"
import usuarios from "./usuarioRoutes.js"
import auth from "./authRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Bem-vindo a livraria"})
  })

  app.use(
    express.json(),
    auth,
    usuarios,
    livros,
    autores,
    
  )
}

export default routes