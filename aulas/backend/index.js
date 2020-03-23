const express = require('express'); // importando as funcionalidades do express, importando o módulo express para dentro da variável express

const app = express(); // criando variável que armazena a aplicação, instanciando aplicação

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'João Marcos'
    })
});

app.listen(3333); // mandando a aplicação ouvir a porta 3333