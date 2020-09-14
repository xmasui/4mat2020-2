/*
    QUATRO OPERAÇÕES BÁSICAS SOBRE DADOS
    1) CREATE (criação ou inserção)
        Cria um novo objeto dentro da coleção
    2) RETRIEVE (recuperação ou listagem)
        Permite recuperar os objetos a partir do BD
    3) UPDATE (atualização)
        Altera os dados de um objeto que JÁ EXISTE no BD
    4) DELETE (exclusão)
        Elimina um objeto do BD
    (C)reate + (R)etrieve + (U)pdate + (D)elete = CRUD
    VERBOS HTTP ASSOCIADOS ÀS OPERAÇÕES CRUD
    Verbo       Operação
    POST        Create
    GET         Retrieve
    PUT         Update
    DELETE      Delete
*/

//Importar o model para dentro do controller
const Curso = require('../models/Curso')

const controller = {} //objeto vazio

//método novo(), implementando a operação CREATE
controller.novo = async (req, res) => {
    try{
        //Envia os dados dentro de req.body paro o BD para criação
        await Curso.create(req.body)
        //HTTP 201: Created
        res.status(201).end()
    }
    catch(erro){
        console.error(erro)
        //HTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
}

//método listar(), implementando a operação RETRIEVE all
controller.listar = async (req, res) => {
    try{
    //find() sem parâmetros é para trazer tudo
    let dados = await Curso.find()
    res.send(dados) //vai com status HTTP 200: ok
    }
    catch(erro){
        console.error(erro)
    res.status(500).send(erro)
    }
}

//método obterUm(), implementando a operação RETRIEVE one
controller.obterUm = (req, res) => {
    const id = req.params.id //capturando o parâmetro id
    let obj = Curso.findById = id

    //se o obj vier preenchido
    if (obj) res.send(obj)
    //se o obj estiver vazio enviamos HTTP 404
    else res.status(404).end()
}

module.exports = controller