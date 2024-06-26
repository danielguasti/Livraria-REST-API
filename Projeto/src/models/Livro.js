import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {type: String, required: true},
    autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores'},
    editora: {type: String, required: true},
    numeroPaginas: {type: Number, required: true},
    preco: {type: Number, required: true}
  }
);

const livros= mongoose.model('livros', livroSchema);

export default livros;