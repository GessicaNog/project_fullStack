import * as produtoService from '../services/produto.service.js';


export const listarProdutos = async (req, res) => {
    const { data, error } = await produtoService.listar();
    if (error) {
        res.status(400).json({ message: "Erro: " + error })
    } else {
        if (!data) {
            res.status(404).json({ message: "Produtos não encontrados" });
        } else {
            res.status(200).json(data);
        }
    }
};



export const criarProduto = async (req, res) => {
    const novoProduto = {
        ...req.body
    };
    const { error } = await produtoService.criar(novoProduto)
    if (error) {
        res.status(500).json({ message: "Erro ao inserir produto" })
    } else {
        res.status(201).json(novoProduto); // Retorna 201 Created
    }
};

export const atualizarProduto = (req, res) => {
    const { error } = produtoService.atualizar(req.params.id, req.body);
    if (error) {
        return res.status(404).json({ message: 'Produto não encontrado' });
    } else {

        res.json({ message: "Produto atualizado" });
    }
};

export const excluirProduto = async (req, res) => {
    const response = await produtoService.excluir(req.params.id);

    if (response.status == 204) {
        res.status(204).json({ message: 'Produto apagado!' });
    } else {
        res.status(404).json({ message: 'Produto não encontrado para apagar.' })
    }
};