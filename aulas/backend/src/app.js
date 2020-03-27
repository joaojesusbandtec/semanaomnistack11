const express = require('express'); // importando as funcionalidades do express, importando o módulo express para dentro da variável express
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes'); // importando a variável routes de routes.js

const app = express(); // criando variável que armazena a aplicação, instanciando aplicação

app.use(cors());
app.use(express.json()); // para entender o corpo e seu formato JSON
app.use(routes);
app.use(errors());

module.exports = app;