const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');
const apiRoutes = require('./routes/api');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", true);
mongoose.connect(config.databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao banco de dados.'))
    .catch((e) => console.log('Erro ao conectar ao banco de dados.', e));

app.use('/api', apiRoutes);

app.listen(config.port, () => console.log(`Servidor rodando na porta ${config.port}.`));