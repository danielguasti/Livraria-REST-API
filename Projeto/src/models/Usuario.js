import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true},
    email: {type: String, required: true},
    senha: {type: String, required: true}
  },
  {
    versionKey: false
  }
)

const usuarios = mongoose.model("usuarios", autorSchema)

export default usuarios;