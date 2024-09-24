const express = require('express');
const db = require('./config/db');
const routes = require('./routes/index');
const cors = require('cors');

const app = express(); 
const PORT = 3030; 

app.use((req,res,next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  res.header("Access-Control-Allow-Methods", "*");
  app.use(cors());
  next();
});

app.use(express.json()); 
routes(app);

app.listen(PORT, () => {
  console.log(`Servidor na porta ${PORT}`);
}); 