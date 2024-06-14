import mongoose from "mongoose"

mongoose.connect("mongodb+srv://danielguasti:daniel123@web-avancada.rstle2x.mongodb.net/livraria?retryWrites=true&w=majority&appName=WEB-AVANCADA");

let db = mongoose.connection;

export default db;