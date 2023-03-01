const express = require('express');
const cors = require('cors');
const config = require('./config');
const apiRoutes = require('./routes/api');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

app.listen(config.port, () => console.log(`Servidor rodando na porta ${config.port}.`));