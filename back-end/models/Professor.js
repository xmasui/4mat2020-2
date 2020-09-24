const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome:{
        type: String,
        required: true //atributo obrigatório
    },
    formacao:{
        type: String,
        required: true
    },
    data_nascimento:{
        type: Date,
        required: true
    },
    //CPF com o índice único para evitar duplicidades
    cpf: {
        type: String,
        required: true,
        index: {unique: true}
    },
    rg: {
        type: String,
        required: true
    },
    valor_hora_aula: {
        type: Number,
        required: true,
        default: 20.15
    },
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    //email com índice único para evitar duplicidades
    email: {
        type: String,
        required: true,
        index: {unique: true}
    }

})
// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)

module.exports = mongoose.model('Professor', esquema, 'professores') 