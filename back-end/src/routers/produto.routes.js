import express from 'express';
import * as produtoController from '../controllers/produto.controller.js';

const router = express.Router();


router.get('/', produtoController.listarProdutos);
router.post('/', produtoController.criarProduto);
router.put('/:id', produtoController.atualizarProduto);
router.delete('/:id', produtoController.excluirProduto);

export default router;