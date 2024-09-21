const express = require('express');
const db = require('./config/db');
const routes = require('./routes/index')

const app = express(); 
const PORT = 3000; 

app.use(express.json()); 
routes(app);

app.listen(PORT, () => {
  console.log(`Servidor na porta ${PORT}`);
}); 