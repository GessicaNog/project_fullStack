
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import produtoRouters from './routers/produto.routes.js'

dotenv.config();
const app = express();
const port = process.env.SERVER_PORT;

// Middleware para parsear JSON
app.use(bodyParser.json());
app.use(cors());
app.use('/produtos', produtoRouters);

// Inicia o servidor
app.listen(port, () => {
    console.log(`Fake API rodando em http://localhost:${port}`);
});