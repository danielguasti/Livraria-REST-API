import mongoose from "mongoose"

mongoose.connect("mongodb+srv://danielguasti:daniel123@bancoteste.lryglmh.mongodb.net/livraria?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;