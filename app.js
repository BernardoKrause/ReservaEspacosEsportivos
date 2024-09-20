const express = require('express');
const db = require('./config/db');
const enderecoController = require('./controllers/enderecoController');
const espacoController = require('./controllers/espacoController');
const tipoEspacoController = require('./controllers/tipoEspacoController');

const app = express(); //Instância do Express
const PORT = 3000; //Porta para o servidor, por exemplo a 3000

app.use(express.json()); //Middleware para tratar os dados no formato JSON

app.route('/').get((req,res) => {
    res.status(200).send("alo");
})

app.get('/api/enderecos', enderecoController.getAllEnderecos); //Rota para obter todos os cidades
app.post('/api/enderecos', enderecoController.createNewEndereco); //Rota para adicionar um novo cidade

app.get('/api/espacos', espacoController.getAllEspacos); //Rota para obter todos os cidades
app.post('/api/espacos', espacoController.createNewEspaco); //Rota para adicionar um novo cidade

app.get('/api/tipoEspacos', tipoEspacoController.getAllTipoEspacos); //Rota para obter todos os cidades
app.post('/api/tipoEspacos', tipoEspacoController.createNewTipoEspaco); //Rota para adicionar um novo cidade



app.listen(PORT, () => {
  console.log(`Servidor na porta ${PORT}`);
}); 