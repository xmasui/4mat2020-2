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

//método Atualizar(), implementando a operação update
controller.atualizar = async (req, res) => {
    try{
        //isolar o _id do objeto para fins de busca
        const id = req.body._id
        //busca o objeto pelo id e, encontrando-o, substitui o conteúdo
        let obj = await Curso.findByIdAndUpdate(id, req.body)

        //se encontrou e substitui, retornamos HTTP 204: no content
        if (obj) res.status(204).end()
        //caso contrário, retorna http 404: not found
        else res.status(404).end()
    }
    catch(error){
        console.error(erro)
        res.status(500).end()
    }
}

//método excluir(), implementando a operação DELETE
controller.excluir = async (req, res) => {
    try{
    //isolando o id para exclusao
    const id = req.body._id
    let obj = await Curso.findByIdAndDelete(id)

    //encontrou e excluiu
    if(obj) res.status(204).end()
    //objeto não foi encontrado para exclusão
    else res.status(404).end()
    }
    catch(erro){
    console.error(erro)
    res.status(500).send(erro)
    }
}
module.exports = controller