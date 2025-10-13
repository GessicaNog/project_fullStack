import db from '../config/db.js';


export const listar = async () => {
    return await db.from('produto').select('*').order('id', { ascending: true });
};

export const criar = async (novoProduto) => {
    return await db.from('produto').insert(novoProduto);;
};

export const atualizar = async (id, produto) => {
    return await db.from('produto').update({ nome: produto.nome, preco: produto.preco }).eq('id', id);
};

export const excluir = async (id) => {

    return await db.from('produto').delete().eq('id', id);;
};