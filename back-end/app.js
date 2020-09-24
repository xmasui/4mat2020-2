var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const db = require ('./config/database')
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbName = process.env.DB_NAME
db(`mongodb+srv://${dbUser}:${dbPass}@cluster0.hmll1.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`)

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//criação de uma nova rota
const teste = require('./routes/teste')
app.use('/teste', teste) //comecar a validar teste passando a variavel

//Rota para curso
const curso = require('./routes/curso')
app.use('/curso', curso)

//rota para professor
const professor = require('./routes/professor')
app.use('/professor', professor)

//rota para sala de aula
const sala_aula = require('./routes/sala_aula')
app.use('/sala-aula', sala_aula)

//rota para turma
const turma = require('./routes/turma')
app.use('/turma', turma)

module.exports = app;
