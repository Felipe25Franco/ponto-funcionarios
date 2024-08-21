require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const pontoRoutes = require('./routes/pontoRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com o banco de dados MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Usando as rotas de ponto
app.use('/api/ponto', pontoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
